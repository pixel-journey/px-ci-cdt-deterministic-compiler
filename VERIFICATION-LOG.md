# Verification Log

**Trust:** workflow-file-only  
**Updated:** 2026-10-29

| Claim | Status | Evidence |
| --- | --- | --- |
| `cdt-deterministic.yml` exists and is callable | **documented** | `.github/workflows/cdt-deterministic.yml` |
| Pin `waxteam/cdt:ce-v1.3.1wax01-v4.1.1wax01` written in owned workflow | **documented** | same file |
| Flags `-O3 -Werror -abigen` written | **documented** | same file |
| Workflow executed successfully | **not claimed** | no run recorded |
| Docker image pulled | **not claimed** | |
| wasm / abi produced | **not claimed** | |
| manifest.sha256 verified | **not claimed** | |
| Deployed contract matches manifest | **not claimed** | |
| Second workflow `px-contract-build.yml` uses different pin | **documented** | `ghcr.io/antelopeio/cdt:4.1.0` |
| Second workflow has been run here | **not claimed** | |

## Policy

Flip a compile claim to VERIFIED only after:

1. A recorded GitHub Actions run (link or run id)
2. Artifact or committed `manifest.sha256` / `SHA256SUMS.txt`
3. Explicit note of which workflow file and which image pin produced it
