# px-ci-cdt-deterministic-compiler

Quest 183. Tier A tooling quest. There is no contract here on purpose.

The artifact is [.github/workflows/px-contract-build.yml](.github/workflows/px-contract-build.yml):

- container `ghcr.io/antelopeio/cdt:4.1.0`
- `cdt-cpp -O3 -Wall -Wextra -Werror --abigen`
- `SHA256SUMS.txt` for the wasm and the abi
- `actions/upload-artifact@v4`

If `contracts/src/*.cpp` is empty the job exits 0. That is how this repository stays green. Contract quests copy the same workflow and fail the job when warnings or missing includes appear.

Do not `apt-get install` CDT on `ubuntu-latest`. Host packages drift. The image pin is the reproducible part.

A wasm built from the same sources, flags, and image should hash the same. If it does not, the image tag moved or a header was unpinned. Record both in the quest README before you call the build deterministic.

Private while the vector suite is open.
