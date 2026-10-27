# px-ci-cdt-deterministic-compiler

Reusable workflow that compiles one Antelope contract with a pinned WAX CDT image and writes a SHA-256 manifest of the wasm and abi.

Quest 183. This file is the workflow. It was not run. No wasm was produced.

## What is pinned

- Image: `waxteam/cdt:ce-v1.3.1wax01-v4.1.1wax01`
- That tag was present on Docker Hub when this file was written.
- Compiler: `cdt-cpp`
- Flags: `-O3 -Werror -abigen`
- The wax-docker notes say a from-source CDT image can be too large for a GitHub-hosted runner. If the pull fails, the workflow has not compiled anything.

## Call

```yaml
jobs:
  compile:
    uses: pixel-journey/px-ci-cdt-deterministic-compiler/.github/workflows/cdt-deterministic.yml@main
    with:
      source: contracts/pxexample/pxexample.cpp
      contract: pxexample
```

`source` is a path inside the caller. `contract` is the `-contract` name and the output file stem. The action body is not deployed.

## Second workflow

`.github/workflows/px-contract-build.yml` uses a different pin, `ghcr.io/antelopeio/cdt:4.1.0`, and compiles every `contracts/src/*.cpp` in the caller. It was not run either. Two pins are not one pin. The workflow this quest owns is `cdt-deterministic.yml`.

`client/wharfkit-demo.ts` only exports that second image name. It is not a client and it was not executed.
