# Contributing to mycmux

mycmux is a GPL-3.0 fork of [cmux-for-linux / ptrcode](https://github.com/cai0baa/cmux-for-linux). Preserve upstream attribution and all component-specific notices.

## Development

Use Node.js 24, the committed npm/Cargo lockfiles, Rust stable and the Tauri 2 prerequisites for your OS. Inspect the two local patch scripts before running `npm ci`. Test in a dedicated checkout and launch the application with `--profile oss-preview`; a profile isolates application state, not shell credentials or OS permissions.

```sh
npx --no-install tsc --noEmit
npm run test:unit
npm run build
cargo check --locked --offline --manifest-path src-tauri/Cargo.toml --tests
```

The offline Cargo command requires dependencies already present in the local cache. Windows test execution also requires the Windows SDK manifest tool; inspect `scripts/run_windows_tests.py`. The included tests cover selected public contracts and synthetic fixtures, not the complete private development suite. See [VALIDATION.md](VALIDATION.md) for commands actually run and limitations.

## Change proposals

Include a concise reproduction, expected behavior and a synthetic test. Keep unrelated formatting out of the diff. Never submit personal paths, credentials, session transcripts or customer material. Explain the origin and license of new images, fonts, fixtures and vendored code.

Do not change stable app identifiers, update URLs or signing keys as routine cleanup. A separately distributed fork needs its own identity and update ownership; do not point it at a service you do not control. Report vulnerabilities through [SECURITY.md](SECURITY.md), not a public issue containing exploit details.

This repository starts with a history-free public snapshot. Do not push private development history into it. Tags, releases, signing and publication remain maintainer actions.
