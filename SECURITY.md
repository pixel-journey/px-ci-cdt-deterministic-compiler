# Security

- A pinned image is not a reproducible build until the digest (not only the tag) is what CI pulled. These files pin **tags**.
- `workflow_call` runs with the caller’s `GITHUB_TOKEN` and source. A public caller can be tricked into compiling untrusted C++. That is the caller’s problem; this lab does not sandbox the source.
- Do not treat an empty `contracts/src` plus exit 0 (the second workflow) as a successful compile.
- No deploy keys, no mainnet account, no wasm artifact in git.
