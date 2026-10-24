# Third-party notices

mycmux is a GPL-3.0 fork of [cai0baa/cmux-for-linux (ptrcode)](https://github.com/cai0baa/cmux-for-linux). See [LICENSE](LICENSE). The source snapshot omits private development history, not the upstream attribution. Component-specific licenses below remain in force; the application license does not relicense fonts or photographs.

## Code

- `src-tauri/vendor/portable-pty-0.8.1`: MIT, Copyright (c) 2018 Wez Furlong. Full text: [LICENSE.md](src-tauri/vendor/portable-pty-0.8.1/LICENSE.md).
- `src-tauri/crates/crsm-core`: vendored from [miyafcos/crsm](https://github.com/miyafcos/crsm), revision `b5f5be2`, authored by the mycmux author and declared MIT in its crate manifest. A standalone [MIT notice](src-tauri/crates/crsm-core/LICENSE) is supplied in this snapshot to make that declaration explicit. See [VENDOR.md](src-tauri/crates/crsm-core/VENDOR.md) for modifications.
- JavaScript and Rust dependency versions are fixed by `package-lock.json` and `src-tauri/Cargo.lock`. Dependencies downloaded during a build retain their own licenses; they are not relicensed by this file.

## Fonts

Four WOFF files are format-only conversions of the official HackGen Console NF v2.10.0 and UDEV Gothic NF v2.2.0 releases. The original glyphs, metrics, names and timestamps are retained. All font tables were compared with their source TTFs, excluding only the format-dependent checksum adjustment.

The complete retained notices, including constituent font copyrights and reserved font names, are in [src/assets/fonts/OFL.txt](src/assets/fonts/OFL.txt). These fonts remain under SIL Open Font License 1.1, not GPL. Sources and archive hashes are recorded in [ASSET_SOURCES.md](ASSET_SOURCES.md).

## Images and symbols

- `src/assets/agents/hermes.webp`: derived from [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) revision `8aa219e`, `website/static/img/logo.png`. MIT, Copyright (c) 2025 Nous Research. Full text: [LICENSES/hermes-agent-MIT.txt](LICENSES/hermes-agent-MIT.txt). Transformation details: [SOURCES.md](src/assets/agents/SOURCES.md).
- `src/assets/warp-themes/` and thumbnails: ten photographs credited by the Warp themes project to Unsplash, plus Warp's generated Pride gradient. The photographs are used under the **Unsplash License**, not Apache-2.0 or GPL. The theme code and generated gradient retain Apache-2.0. Credit URLs, source revision and conditions are in [WALLPAPER_SOURCES.md](src/assets/WALLPAPER_SOURCES.md). Do not sell unmodified photographs or compile them into a competing image service.
- `src-tauri/icons/`: project-authored generic terminal artwork, maintained as part of mycmux. The file family was matched to the project's source history.
- `src/assets/pets/clawd/spritesheet.webp`: independent geometric character **Orbit**, generated for this public snapshot under the project license. `clawd` remains only as a compatibility ID and directory name; the original character image is not distributed. Reproduction: `scripts/generate_public_pet.py`.
- `src/components/icons/AgentIcons.tsx`: provider-facing entries use independent letter/rectangle badges instead of vendor artwork. Generic document/browser symbols remain part of the application code. Product names identify compatibility, not sponsorship or trademark permission.

## Unicode data

`src-tauri/src/agent_design/export_unicode.json` is a generated Unicode 15.0.0 normalization/case-fold table. It was reproduced byte-for-byte with Python 3.12.10's `unicodedata`; the generator is `scripts/generate_export_unicode.py`. Unicode data terms are retained in [LICENSES/Unicode-V3.txt](LICENSES/Unicode-V3.txt), and Python's license and included Unicode notice in [LICENSES/Python-3.12.10.txt](LICENSES/Python-3.12.10.txt).

## Demonstration data

The grouping scenario, savepoint bundle and Markdown rendering example are synthetic. They are not records of actual users, work or customer files. Public test fixtures are selected or regenerated for deterministic parser contracts and do not grant permission to publish users' real logs.

This notice documents the bundled sources and assets. It is not a guarantee of trademark clearance, a security certification, or a legal review of every transitive dependency. Apple/Microsoft SDKs, agent CLIs and service accounts are supplied separately by their respective providers.
