# Education

Quest-style topic: the **reusable workflow** that is intended to produce a deterministic wasm and abi.

This repository currently holds **workflow files and documentation**. Compilation has **not** been demonstrated here.

---

## What is pinned (owned workflow)

File: `.github/workflows/cdt-deterministic.yml`

- Image: `waxteam/cdt:ce-v1.3.1wax01-v4.1.1wax01`
- Compiler: `cdt-cpp` via `docker run`
- Flags: `-O3 -Werror -abigen`
- Output: SHA-256 manifest of the wasm and the abi (`build/manifest.sha256`)

---

## What has not happened

- The owned workflow has **not** been successfully run from a recorded caller in this documentation
- No docker pull is claimed
- No wasm has been produced or verified

A second workflow file (`px-contract-build.yml`) uses a **different** pin (`ghcr.io/antelopeio/cdt:4.1.0`) and different triggers. **Two pins are not one pin.** The workflow this quest owns is `cdt-deterministic.yml`.

See [docs/WORKFLOW-CONTRACT.md](docs/WORKFLOW-CONTRACT.md).

---

## Why determinism matters

A known-good SHA-256 of the wasm and abi lets a later audit confirm that a deployed contract matches reviewed source **compiled with the same image and flags**. Until the workflow has been executed and the manifest recorded, that confirmation does not exist.

---

## Classroom prompts

1. Why is installing CDT on the runner host weaker than a pinned container image?
2. What goes wrong if two repos document “the CDT pin” but actually use different images?
3. What evidence would you require before writing “wasm verified” in a Tier B contract README?

---

## Related

- Vault: `px-contract-examples-vault`
- Scaffold: `px-antelope-contract-template` (calls compile only on manual dispatch; not claimed run)
- [VERIFICATION-LOG.md](VERIFICATION-LOG.md)
