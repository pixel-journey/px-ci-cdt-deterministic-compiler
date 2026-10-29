# px-ci-cdt-deterministic-compiler

> **Trust:** `workflow-file-only`  
> **Verification:** [VERIFICATION-LOG.md](VERIFICATION-LOG.md)  
> **Status:** Reusable workflow defined — **not executed** — **no wasm produced**  
> **Vault:** [px-contract-examples-vault](https://github.com/pixel-journey/px-contract-examples-vault)

Reusable GitHub Actions workflow that compiles **one** Antelope contract with a **pinned** CDT image and writes a SHA-256 manifest of the wasm and abi.

**Core honesty rule:** This repository contains the workflow **file**. It has **not** been run successfully as a verified build in the documentation sense. **No wasm has been produced or verified here.**

---

## Deep educational documentation

| Guide | Purpose |
|-------|---------|
| [docs/WORKFLOW-CONTRACT.md](docs/WORKFLOW-CONTRACT.md) | Inputs, pins, caller contract, dual-workflow warning |
| [EDUCATION.md](EDUCATION.md) | Why determinism matters; classroom prompts |
| [VERIFICATION-LOG.md](VERIFICATION-LOG.md) | What is documented vs not claimed |
| [spec.yaml](spec.yaml) | Machine-readable trust + do-not-claim list |

---

## Owned pin (`cdt-deterministic.yml`)

| Item | Value |
|------|--------|
| Image | `waxteam/cdt:ce-v1.3.1wax01-v4.1.1wax01` |
| Compiler | `cdt-cpp` (via `docker run`) |
| Flags | `-O3 -Werror -abigen` |
| Outputs | `build/<contract>.wasm`, `.abi`, `manifest.sha256` |

### Call from another repo

```yaml
jobs:
  compile:
    uses: pixel-journey/px-ci-cdt-deterministic-compiler/.github/workflows/cdt-deterministic.yml@main
    with:
      source: contracts/pxexample/pxexample.cpp
      contract: pxexample
```

- `source` — path **inside the caller**
- `contract` — `-contract` name and output file stem

---

## Second workflow file (do not conflate)

`.github/workflows/px-contract-build.yml` uses **`ghcr.io/antelopeio/cdt:4.1.0`**, push/PR triggers, and `contracts/src/*.cpp` (empty → exit 0).

**Two pins are not one pin.** The workflow this repository **owns** for the quest narrative is `cdt-deterministic.yml`.

---

## Dispatch / execution status

- Owned workflow is designed for `workflow_call`
- **Not claimed:** successful run, docker pull, wasm, abi, manifest verification, deploy

Until a caller runs the workflow and a manifest is recorded, there is **no verified wasm** from this system.

---

## Related

- Template that may call compile on manual dispatch: `px-antelope-contract-template`
- Index: `px-contract-examples-vault`

## License

MIT — Pixel Journey

---

*Last updated: 2026-10-29 — Deep educational pass: WORKFLOW-CONTRACT, VERIFICATION-LOG, expanded EDUCATION/README; no compile claims added.*
