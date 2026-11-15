# Worked examples — pins, not binaries

Nothing here was compiled. The examples are the two workflow files and what a caller would pass.

## Owned workflow

File: `.github/workflows/cdt-deterministic.yml`

| Input | Example |
| --- | --- |
| Image | `waxteam/cdt:ce-v1.3.1wax01-v4.1.1wax01` |
| Flags | `-O3 -Werror -abigen` |
| `source` | path inside the **caller** repo, e.g. `contracts/pxexample/pxexample.cpp` |
| `contract` | output stem, e.g. `pxexample` |
| Claimed outputs | `build/<contract>.wasm`, `.abi`, `manifest.sha256` |

`spec.yaml` records `docker_pull: false` and `cdt_cpp: false`. Those booleans are the worked example: the pin is written down, the run is not.

## The other file in this repo

`.github/workflows/px-contract-build.yml` uses `ghcr.io/antelopeio/cdt:4.1.0`. Same repository, different image. Teaching point: do not quote “the pin” without naming the file.

## Production pin (not this repo)

`wax-contract-compiler` last recorded image: `waxteam/cdt:v5.0.3wax02-v4.1.0`. Wasm for `pxexample`, `pxguard`, `pxnotify`, and later contracts lives there. Copying a SHA from that repo into this README would be a false claim.

## Exercise

1. Name both images from the YAML, not from memory.
2. Say which file is `workflow_call` only.
3. Explain why a green `npm test` in this repo is not a wasm.
