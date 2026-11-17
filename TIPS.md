# Tips — educational CDT workflows (no recorded compile)

## Two files, two pins

| File | Image pin (text only) |
| --- | --- |
| `cdt-deterministic.yml` | `waxteam/cdt:ce-v1.3.1wax01-v4.1.1wax01` |
| `px-contract-build.yml` | `ghcr.io/antelopeio/cdt:4.1.0` |

Do not answer "which image?" with a single tag. The quest this repo owns is the **first** file (`workflow_call`). The second is a different contract.

## Do

- Say **workflow file** until a run URL and a manifest exist.
- Let the **caller** repo own the C++ path. This repo does not vendor `pxexample.cpp` as the thing being compiled.
- Keep day-to-day builds on [wax-contract-compiler](https://github.com/pixel-journey/wax-contract-compiler).
- Treat `-Werror` as intentional: a warning fails the build once a job actually runs.

## Don't

- Claim "wasm verified" from YAML text alone.
- Treat `tests/invariants.spec.ts` as an asserting test (it exports hope-shaped strings).
- Mix flag sets: owned job uses `-O3 -Werror -abigen`; the second job also has `-Wall -Wextra` and `--abigen`.
- Install CDT with host `apt-get` and call it the same pin.

## Common mistakes

1. Pasting the first Docker line you see and assuming both workflows share it.
2. Copying the workflow into a lab and reporting wasm without a run id.
3. Quoting the `ghcr.io` image as the owned pin.
4. Using `SHA256SUMS.txt` and `manifest.sha256` as if they were the same artifact name.

## Bar for "verified"

1. Recorded Actions run (URL or id).
2. Artifact or committed hash from that run.
3. Sentence that names **which file** and **which image pin** produced it.

Until then, every vault course that says "uncompiled sketch" is correct.

Related: [EDUCATION.md](EDUCATION.md) · [VERIFICATION-LOG.md](VERIFICATION-LOG.md) · [wax-contract-compiler](https://github.com/pixel-journey/wax-contract-compiler) · [template](https://github.com/pixel-journey/px-antelope-contract-template)
