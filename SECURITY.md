# Security — deterministic CDT compiler lab

## Closed in this repo

| Issue | Behavior |
| --- | --- |
| Wasm checked into git | not stored here |
| Deploy keys / mainnet account | none |
| Two workflow files, one pin | **two tag pins**, zero recorded runs claimed by the docs |
| Empty `contracts/src` plus exit 0 | **not** a successful compile |

## Not closed (production)

| Concern | Guidance |
| --- | --- |
| Image identity | Pin the **digest**, not only the tag `waxteam/cdt:v5.0.3wax02-v4.1.0` |
| `workflow_call` | Runs with the caller's `GITHUB_TOKEN` and source. A public caller can compile untrusted C++. This lab does not sandbox the source |
| Supply chain | Review what the caller checks out before the compile step |
| Artifact honesty | A green job with no `.wasm` is not "verified" |

## Attack angles

1. Treating a tag pin as a reproducible build after the tag moves.  
2. Calling YAML text a wasm SHA256.  
3. Publishing "compiled" from the empty-src workflow's exit 0.  
4. Letting an untrusted caller push a contract through this reusable workflow onto a funded account.

## Honesty limits

This repository documents the pin and the workflow shape. It does not store wasm and does not deploy. Production compiles, when they exist, live in [wax-contract-compiler](https://github.com/pixel-journey/wax-contract-compiler). Truth ladder: [LEARNING-PATH](https://github.com/pixel-journey/px-contract-examples-vault/blob/main/docs/LEARNING-PATH.md).
