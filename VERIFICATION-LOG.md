# Verification Log

**Trust:** workflow-file-only  
**Updated:** 2026-11-10

| Claim | Status | Evidence |
| --- | --- | --- |
| `cdt-deterministic.yml` exists and is callable | **documented** | `.github/workflows/cdt-deterministic.yml` |
| Pin `waxteam/cdt:ce-v1.3.1wax01-v4.1.1wax01` written in owned workflow | **documented** | same file; `invariants/pins.ts` + tests |
| Flags `-O3 -Werror -abigen` written | **documented** | same file; pin tests |
| Owned pin ≠ secondary pin | **tested** | `invariants/pins.test.ts` |
| Workflow executed successfully | **not claimed** | no run recorded in *this* repo |
| Docker image pulled | **not claimed** | |
| wasm / abi produced **by this educational workflow** | **not claimed** | |
| manifest.sha256 verified **here** | **not claimed** | |
| Deployed contract matches manifest | **not claimed** | |
| Second workflow `px-contract-build.yml` uses different pin | **documented** | `ghcr.io/antelopeio/cdt:4.1.0` |
| Second workflow has been run here | **not claimed** | |

## Org production wasm (different repo — do not conflate)

Verified builds live only under [wax-contract-compiler](https://github.com/pixel-journey/wax-contract-compiler) with pin `waxteam/cdt:v5.0.3wax02-v4.1.0`:

| Contract | Run | WASM SHA256 (prefix) |
| --- | --- | --- |
| `hello` | earlier | `462998c81dc0…` |
| `pxexample` | [22](https://github.com/pixel-journey/wax-contract-compiler/actions/runs/42819559097) | `dd1b7bf5526e…` |
| `pxguard` | [24](https://github.com/pixel-journey/wax-contract-compiler/actions/runs/42821960554) | `da54a7088823…` |
| `pxnotify` | [25](https://github.com/pixel-journey/wax-contract-compiler/actions/runs/42823050242) | `ab68a840ee26…` |

Those are **not** outputs of this educational `workflow_call`. Owned education pin stays distinct on purpose (see vault [FORWARD.md](https://github.com/pixel-journey/px-contract-examples-vault/blob/main/docs/FORWARD.md) pin policy).

## Policy

Flip a compile claim on **this** repo to VERIFIED only after:

1. A recorded GitHub Actions run of **this** owned workflow (link or run id)
2. Artifact or committed `manifest.sha256` / `SHA256SUMS.txt` from that run
3. Explicit note of which workflow file and which image pin produced it
