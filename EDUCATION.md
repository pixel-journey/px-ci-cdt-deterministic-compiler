# Education

Quest 183. The reusable workflow that produces a deterministic wasm and abi.

## What is pinned

- Image: `waxteam/cdt:ce-v1.3.1wax01-v4.1.1wax01`
- Compiler: `cdt-cpp`
- Flags: `-O3 -Werror -abigen`
- Output: SHA-256 manifest of the wasm and the abi

## What has not happened

The workflow has not been run. No docker pull has occurred. No wasm has been produced.

A second workflow file uses a different pin. Two pins are not one pin. The workflow this quest owns is `cdt-deterministic.yml`.

## Why determinism matters

A known-good SHA-256 of the wasm and abi lets a later audit confirm that the deployed contract matches the reviewed source. Until the workflow has been executed, that confirmation does not exist.
