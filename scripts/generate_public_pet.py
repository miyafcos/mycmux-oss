from __future__ import annotations

import argparse
import hashlib
import math
from pathlib import Path

from PIL import Image, ImageDraw


def draw_orbit() -> Image.Image:
    atlas = Image.new("RGBA", (1536, 1872), (0, 0, 0, 0))
    for row in range(9):
        for frame in range(8):
            left, top = frame * 192, row * 208
            bob = round(math.sin(frame * math.pi / 4) * (6 if row == 7 else 2))
            drawing = ImageDraw.Draw(atlas)
            body = (left + 42, top + 44 + bob, left + 150, top + 154 + bob)
            drawing.rounded_rectangle(body, radius=26, fill=(55, 164, 174), outline=(27, 68, 77), width=5)
            drawing.rectangle((left + 73, top + 74 + bob, left + 82, top + 85 + bob), fill=(244, 250, 251))
            drawing.rectangle((left + 110, top + 74 + bob, left + 119, top + 85 + bob), fill=(244, 250, 251))
            drawing.line((left + 78, top + 115 + bob, left + 114, top + 115 + bob), fill=(27, 68, 77), width=5)
            drawing.line((left + 62, top + 155 + bob, left + 55, top + 171), fill=(27, 68, 77), width=7)
            drawing.line((left + 130, top + 155 + bob, left + 137, top + 171), fill=(27, 68, 77), width=7)
            if row in {6, 8}:
                drawing.ellipse((left + 150, top + 28 + frame * 2, left + 171, top + 49 + frame * 2), fill=(245, 190, 75))
            if row == 5:
                drawing.line((left + 65, top + 67, left + 86, top + 72), fill=(27, 68, 77), width=5)
    return atlas


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("output", type=Path)
    args = parser.parse_args()
    with args.output.open("xb") as stream:
        draw_orbit().save(stream, format="WEBP", lossless=True)
    print(hashlib.sha256(args.output.read_bytes()).hexdigest())


if __name__ == "__main__":
    main()
