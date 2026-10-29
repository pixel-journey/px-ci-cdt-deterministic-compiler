# Workflow Contract

**Repo:** `px-ci-cdt-deterministic-compiler`  
**Trust:** workflow-file-only — **not executed** in this repository

---

## Owned workflow: `cdt-deterministic.yml`

### Trigger

- `workflow_call` only (reusable)
- No `push` / `pull_request` on this file

### Inputs

| Input | Required | Meaning |
|-------|----------|---------|
| `source` | yes | Path to `.cpp` **inside the caller repo** |
| `contract` | yes | Value for `cdt-cpp -contract` and output file stem |

### Pinned environment (this workflow)

| Item | Value |
|------|--------|
| Image | `waxteam/cdt:ce-v1.3.1wax01-v4.1.1wax01` |
| Runner | `ubuntu-latest` + `docker run` |
| Compiler | `cdt-cpp` |
| Flags | `-O3 -Werror -abigen` |
| Outputs | `build/<contract>.wasm`, `build/<contract>.abi`, `build/manifest.sha256` |
| Artifact | `wasm-abi-<contract>` |

### Caller example

```yaml
jobs:
  compile:
    uses: pixel-journey/px-ci-cdt-deterministic-compiler/.github/workflows/cdt-deterministic.yml@main
    with:
      source: contracts/pxexample/pxexample.cpp
      contract: pxexample
```

The caller must contain the `source` path. This repository does **not** ship a sample contract to compile by default.

---

## Second file: `px-contract-build.yml`

A **different** pin and trigger model:

| Item | Value |
|------|--------|
| Image | `ghcr.io/antelopeio/cdt:4.1.0` (job `container:`) |
| Triggers | `push` / `pull_request` |
| Sources | `contracts/src/*.cpp` (empty → exit 0 tooling-only) |
| Flags | `-O3 -Wall -Wextra -Werror --abigen` |
| Manifest | `SHA256SUMS.txt` |

**Two pins are not one pin.** Documentation and `spec.yaml` treat **`cdt-deterministic.yml`** as the workflow this quest owns. Do not merge the two into a single “the image is…” claim.

`tests/invariants.spec.ts` currently describes expectations aligned with the **Antelope CDT container / contracts/src** style (second file). Treat those rows as **design notes**, not as proof that either workflow has run.

---

## What has not happened

- No successful `workflow_call` recorded here
- No docker pull claimed
- No wasm / abi / manifest committed as verified artifacts
- No deploy

Until a caller runs the workflow and records the manifest, there is **no verified wasm** from this system.

---

## Why determinism matters

A known-good SHA-256 of wasm + abi lets a later review confirm that a deployed binary matches reviewed source **compiled with the same pin**. Without an executed run, that confirmation does not exist.

---

*Pixel Journey — Pin the image; run the job; then claim the hash.*
