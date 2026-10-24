# Security policy

mycmux controls local terminals and can run programs with the current user's permissions. Treat its control API as privileged. Keep socket authentication enabled and do not expose control ports or tokens to untrusted users or networks. A workspace, web pane, saved session or test profile is not a sandbox for untrusted code.

## Reporting vulnerabilities

Use GitHub's **Security → Report a vulnerability** for [miyafcos/mycmux-oss](https://github.com/miyafcos/mycmux-oss/security/advisories/new). If private reporting is unavailable, ask the maintainer for a private contact route without including sensitive details in the public request.

Do not post credentials, real terminal output, customer data, unredacted screenshots or exploit details in public issues. Share the minimum synthetic reproduction through the private route.

## Scope

This is a source preview based on v0.88.6, not a new binary release or a security certification. Existing update endpoints and signing public keys remain unchanged. Use a separate application profile for development, and do not install over an existing application for testing. The limits of verification are recorded in [VALIDATION.md](VALIDATION.md).
