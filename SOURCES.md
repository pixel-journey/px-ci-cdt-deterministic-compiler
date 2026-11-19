# Sources

| Source | Why |
| --- | --- |
| [Antelope CDT](https://github.com/AntelopeIO/cdt) | Compiler the images wrap |
| [WAX CDT docker (waxteam)](https://hub.docker.com/u/waxteam) | Tag family used by the owned workflow and by production |
| [docs.wax.io build](https://docs.wax.io/build/) | How WAX documents contract builds |
| [wax-contract-compiler](https://github.com/pixel-journey/wax-contract-compiler) | Org pipeline that actually emits wasm |
| [VERIFICATION-LOG.md](VERIFICATION-LOG.md) | What this repo refuses to claim |

## Product facts locked by the docs (not by a green Actions run)

| File | Image pin (text only) |
| --- | --- |
| `cdt-deterministic.yml` (owned quest) | `waxteam/cdt:ce-v1.3.1wax01-v4.1.1wax01` |
| `px-contract-build.yml` | `ghcr.io/antelopeio/cdt:4.1.0` |

- **Two pins are not one pin.** Do not answer "which image?" with a single tag.
- Zero recorded compiles in this educational repo. YAML is not a wasm hash.
- `tests/invariants.spec.ts` exports hope-shaped strings. It does **not** assert them.
- Empty `contracts/src` exit 0 is tooling-only, not a successful compile.
- "Wasm verified" needs a run id, a hash artifact, and a sentence that names **which file** and **which pin**.

Production CDT pin used by [wax-contract-compiler](https://github.com/pixel-journey/wax-contract-compiler): `waxteam/cdt:v5.0.3wax02-v4.1.0` — a **third** string. Do not collapse it with either educational pin.

Truth ladder: [LEARNING-PATH](https://github.com/pixel-journey/px-contract-examples-vault/blob/main/docs/LEARNING-PATH.md).
