# Validation

Checked on 2026-10-25 against this public source preview. This is not a new binary release or a full security certification.

## Completed

- The installed versions of all **158 Windows/x64 npm dependency packages** required by the lockfile were checked before reusing an existing dependency tree in a separate verification copy. No dependency installation was performed.
- `tsc --noEmit`: passed.
- `vitest run`: **108 tests passed** across three selected public test files.
- `vite build`: passed; 2,361 modules transformed. This compiles the frontend, not an installable desktop application.
- `cargo check --locked --offline --tests --features e2e -j 2 --manifest-path src-tauri/Cargo.toml`: passed with Rust/Cargo 1.98.0 on Windows. This checks Rust application and test targets without executing tests or creating a product installer.
- The standalone project-attribution module: **3 Rust tests passed**. The rule no longer recognizes only the author's home directory.
- The unmodified production path-key functions and their pure tests were extracted into a local test harness: **11 tests passed**. Filesystem-dependent tests were not included in this small harness. Artificial path changes were checked against an independent JavaScript hash calculation; the changed hash length expectation was corrected before the final pass.
- The CLI installer/startup/pack-rules modules were copied unchanged into a lightweight Cargo test harness with the same locked dependency versions: **24 tests passed**. Two Windows tests with explicit file deletion or symlink creation were excluded; the Unix-only symlink test was not compiled on Windows. This includes empty-pack standalone installation, legacy skill-only installation records, startup ownership, known-version replacement, malformed markers, local changes and byte-preserving backups. Tauri UI entrypoints were not part of this harness.
- Unicode 15.0.0 table: exact regeneration with Python 3.12.10. Four WOFF fonts: source TTF table equivalence, preserving timestamps. App icon family: 50 source-history matches. Wallpaper originals/credits: 11 matches. Orbit sprite: exact regeneration.
- Literal Rust include paths were checked, followed by Cargo's actual compile-time check, including concatenated fixture paths. The required artificial fixtures are included.

## Privacy and scanner results

Private history, captured conversations, internal documents and private skill packs are not included. Gitleaks reports six matches in synthetic authentication/parser tests: five detections concern unsigned `alg=none` example JWTs and one concerns a repeated hexadecimal document ID. Each was inspected; none is a live credential. No scanner suppression was added. Header-only PEM/canary strings remain in redaction tests, not as usable private keys.

Stable app identifiers, authorized author attribution, generic file conventions and reserved-domain examples remain intentionally. Secret-scanner counts alone are not the basis of the public-source decision; asset provenance, parser data and source references were also checked.

## Warnings and limits

The complete distinct warnings from the recorded Cargo check and Vite build are listed in [BUILD_WARNINGS.json](BUILD_WARNINGS.json). They include unused code/imports, visibility and style warnings, shared static/dynamic import chunks and bundle-size advisories. These were not silently fixed during publication preparation.

Full Rust test execution, desktop GUI launch, a fresh npm install, all-OS application builds, Linux, live agent/service integrations, account switching, production updating, packaging and signing were **not performed**. A requested isolated Mac Rust run was blocked by the transfer safeguard detecting PEM header strings in test sources; the safeguard was not disabled or bypassed. Low available Windows memory prevented a full native test link in this run.

The source was not installed over an existing application. Existing update URLs and stable identifiers are retained for compatibility, so development must use an explicit separate profile or OS user as described in the README. A profile is not an OS security sandbox.
