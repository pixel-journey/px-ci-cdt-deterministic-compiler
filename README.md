# px-ci-cdt-deterministic-compiler

Reusable workflow that compiles one Antelope contract with a pinned WAX CDT image and writes a SHA-256 manifest of the wasm and abi.

This file is the workflow. It has not been run. No wasm has been produced.

## What is pinned

- Image: `waxteam/cdt:ce-v1.3.1wax01-v4.1.1wax01`
- Compiler: `cdt-cpp`
- Flags: `-O3 -Werror -abigen`
- Output: SHA-256 manifest of the wasm and the abi

## Call

```yaml
jobs:
  compile:
    uses: pixel-journey/px-ci-cdt-deterministic-compiler/.github/workflows/cdt-deterministic.yml@main
    with:
      source: contracts/pxexample/pxexample.cpp
      contract: pxexample
```

`source` is a path inside the caller. `contract` is the `-contract` name and the output file stem.

## Dispatch

The workflow is `workflow_dispatch` only. It has not been triggered. Until it is run and a manifest is committed, there is no verified wasm.

A second workflow file uses a different pin. Two pins are not one pin. The workflow this repository owns is `cdt-deterministic.yml`.
