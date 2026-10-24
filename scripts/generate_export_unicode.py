from __future__ import annotations

import argparse
import hashlib
import json
from pathlib import Path
import unicodedata


def unicode_data() -> dict:
    decompositions, classes, compositions, folds = {}, {}, {}, {}
    for point in range(0x110000):
        character = chr(point)
        if not 0xAC00 <= point <= 0xD7A3:
            value = unicodedata.normalize("NFKD", character)
            if value != character:
                decompositions[str(point)] = [ord(item) for item in value]
        if unicodedata.combining(character):
            classes[str(point)] = unicodedata.combining(character)
        raw = unicodedata.decomposition(character).split()
        if len(raw) == 2 and not raw[0].startswith("<"):
            pair = [int(item, 16) for item in raw]
            if unicodedata.normalize("NFC", "".join(map(chr, pair))) == character:
                compositions[str(pair[0] * 0x110000 + pair[1])] = point
        if character.casefold() != character.lower():
            folds[str(point)] = character.casefold()
    return {"version": unicodedata.unidata_version, "decomp": decompositions,
            "classes": classes, "compose": compositions, "fold": folds}


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("output", type=Path)
    parser.add_argument("--check", action="store_true")
    args = parser.parse_args()
    if unicodedata.unidata_version != "15.0.0":
        raise SystemExit("Unicode 15.0.0 is required; use Python 3.12.10")
    payload = (json.dumps(unicode_data(), ensure_ascii=True, separators=(",", ":")) + "\n").encode("utf-8")
    if args.check:
        if args.output.read_bytes() != payload:
            raise SystemExit("Unicode table mismatch")
    else:
        with args.output.open("xb") as stream:
            stream.write(payload)
    print(hashlib.sha256(payload).hexdigest())


if __name__ == "__main__":
    main()
