# Bundled asset sources

This inventory concerns files shipped in the public source, not private development records. License text is linked from [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

## Fonts

- HackGen Console NF v2.10.0: https://github.com/yuru7/HackGen/releases/download/v2.10.0/HackGen_NF_v2.10.0.zip — archive SHA-256 `f8abd483d5edfad88a78ed511978f43c83b43c48e364aa29ebe4a68217474428`.
- UDEV Gothic NF v2.2.0: https://github.com/yuru7/udev-gothic/releases/download/v2.2.0/UDEVGothic_NF_v2.2.0.zip — archive SHA-256 `45faeef7b5d8bc591bcc5887a2ca0c5fb9028066f18a5a52cd6f10b7d655ba37`.

For each family's Regular and Bold TTF, conversion uses `fontTools.ttLib.TTFont(source, recalcTimestamp=False)`, sets `flavor = "woff"`, then saves to a new file. All decompressed tables match the official TTF, excluding only `head.checkSumAdjustment`, which changes with the container. The `head.modified` timestamp is unchanged. Preserve [OFL.txt](src/assets/fonts/OFL.txt); do not treat these as renamed or redesigned fonts.

## Orbit sprite and badges

`scripts/generate_public_pet.py OUTPUT.webp` creates the independent Orbit robot atlas with Pillow. It refuses to overwrite an existing output. The atlas is 1536 × 1872 pixels, eight columns and nine rows, with 192 × 208-pixel cells. This retains the application's existing sprite contract. The compatibility ID/path `clawd` does not describe the distributed artwork.

The source of the independent agent letter badges is `src/components/icons/AgentIcons.tsx`. The separately licensed Hermes image is documented in [SOURCES.md](src/assets/agents/SOURCES.md).

## App icon

The 50 files in `src-tauri/icons/` derive from the project's generic terminal mark introduced in revision `c0a5eae3c8098e4bd86c10e95369a25652ff204d` and its subsequent platform-size changes. Each file was matched to a version in the source history; these identifiers document origin, not an assertion that private development history is included in this snapshot.

## Wallpaper images

The eleven full-size WebP source assets and their thumbnails are included in the source tree. Runtime distribution/caching can use a separately configured wallpaper pack; source inclusion is still redistribution. See [WALLPAPER_SOURCES.md](src/assets/WALLPAPER_SOURCES.md) for all image URLs, credits and the separate photograph/theme terms.

## Unicode

Run the following with Python 3.12.10 (Unicode database 15.0.0):

```sh
python scripts/generate_export_unicode.py src-tauri/src/agent_design/export_unicode.json --check
```

The compact JSON reproduces the original generator introduced in revision `1af2b09df0a5ad7da9537a6e530ce52b8ef57135`. The JSON is normalization/case-fold data, not an exported user log. Python and Unicode notices are retained under `LICENSES/`.

## Synthetic examples

`src/mock/groupingScenario.ts`, `src-tauri/src/commands/fixtures/online_savepoint/sample_00000000/` and `src-tauri/src/commands/artifact/testdata/markdown_kitchen_sink.md` contain deliberately artificial examples. They preserve the parser/layout contracts without reproducing actual project names, conversations or business figures.
