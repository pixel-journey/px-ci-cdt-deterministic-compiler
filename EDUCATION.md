# Education — two workflow files, zero recorded compiles

> **Rung:** workflow text only. No GitHub Actions run is recorded in this repo. No image pull is claimed. No wasm, abi, or manifest is a verified artifact.  
> **`tests/invariants.spec.ts` is a list of sentences. It does not assert them.**

Read [VERIFICATION-LOG.md](VERIFICATION-LOG.md) and [docs/WORKFLOW-CONTRACT.md](docs/WORKFLOW-CONTRACT.md) beside this file. If a sentence here disagrees with the log, the log wins.

## What you should be able to do

| Level | After this file |
| --- | --- |
| Beginner | Name the two workflow files and refuse to call them one pin |
| Intermediate | Read `cdt-deterministic.yml` as a `workflow_call` that has not been called |
| Masterclass | Say what would have to be true before anyone may write "wasm verified" |

---

## Beginner — the two files

| File | What the YAML says | What has been run |
| --- | --- | --- |
| `.github/workflows/cdt-deterministic.yml` | Reusable `workflow_call`. Image `waxteam/cdt:ce-v1.3.1wax01-v4.1.1wax01`. `docker run` on `ubuntu-latest`. Flags `-O3 -Werror -abigen`. Writes `build/<contract>.wasm`, `.abi`, and `build/manifest.sha256` | Nothing recorded |
| `.github/workflows/px-contract-build.yml` | Different file. Image `ghcr.io/antelopeio/cdt:4.1.0` as the job container. Flags include `-Wall -Wextra -Werror --abigen`. Manifest name `SHA256SUMS.txt`. Empty `contracts/src` is tooling-only | Nothing recorded |

**Two pins are not one pin.** The quest this repo owns, per the workflow contract, is `cdt-deterministic.yml`. The second file is a different contract. Do not answer "which image?" with a single tag.

### Words

| Word | Meaning here |
| --- | --- |
| Pin | The image string written in a file. Not a digest this repo has fetched |
| `workflow_call` | Another repo must call it. This file has no `push` trigger |
| Manifest | A hash file the YAML says it will write **if the job runs** |
| Verified | A recorded run id plus the artifact hashes. Not "the YAML looks right" |

### Predict, then look

There is no `npm test` rule to run for a compile. The spec file exports four hope-shaped strings:

| id | What it hopes | Does this repo's owned workflow match the sentence? |
| --- | --- | --- |
| `pinned-image` | `ghcr.io/antelopeio/cdt:4.1.0`, not apt-get on the host | That image is the **second** file. The owned workflow's image is `waxteam/cdt:…` |
| `warnings-are-failures` | `-Werror` is present | Both files contain a Werror flag. That is text, not a failed build |
| `tooling-only` | Empty `contracts/src` exits 0 | Described for the second file. Not demonstrated |
| `manifest` | `SHA256SUMS.txt` | The owned workflow's name in YAML is `manifest.sha256`. The second file's name is `SHA256SUMS.txt` |

Those rows are design notes. They are not proof.

---

## Intermediate — read the owned job as text

`cdt-deterministic.yml`:

1. Trigger is only `workflow_call`.
2. Inputs: `source` (path to a cpp **in the caller**) and `contract` (the `-contract` name and the output stem).
3. `actions/checkout@v4`, then `docker run --rm` with the waxteam image.
4. `cdt-cpp` gets `-o build/<contract>.wasm`, `-abigen`, `-O3`, `-Werror`, `-contract`.
5. `sha256sum` of the wasm and the abi is teed to `build/manifest.sha256`.
6. `actions/upload-artifact@v4` uploads those three paths under `wasm-abi-<contract>`.

This repository does not ship a default cpp for that job. A caller example lives in the workflow contract and points at `contracts/pxexample/pxexample.cpp` with contract name `pxexample`. That path is not in **this** repo. Calling the workflow without a real source file is a failed job, not a verified compiler.

The second workflow's empty-src exit 0 is a different idea: "tooling file present, nothing to compile, do not fail the branch." Do not describe the waxteam job that way. It always invokes `cdt-cpp` on `inputs.source`.

### What people mix up

| Mistake | What is actually written |
| --- | --- |
| "The image is ghcr.io/antelopeio/cdt:4.1.0" as the only pin | That is `px-contract-build.yml` |
| "The image is waxteam/cdt:…" as the only pin | That is `cdt-deterministic.yml` |
| "`-Werror` means this repo's build is clean" | No build has been recorded |
| "`invariants.spec.ts` passed" | It does not contain assertions |
| "A contract repo with this workflow copied in has wasm" | Copying YAML does not run it |

---

## Masterclass — the bar for the word verified

The verification log already states the flip. A compile claim becomes VERIFIED only when all three exist:

1. A recorded Actions run (URL or run id).
2. The artifact or a committed hash file from that run.
3. A sentence that names **which file** and **which image pin** produced it.

Until then, every course in the vault that says "uncompiled sketch" is following this repo. Pointing at `contracts/src/*.cpp` in a lab is not a substitute for step 2.

A later review uses the hash to show a deployed binary matches source **compiled with that pin**. Without the run, the hash does not exist, so the review cannot close. Do not invent a SHA-256.

Flags worth remembering once a run exists, still as text today:

- Owned job: `-O3 -Werror -abigen`. It does not say `-Wall -Wextra`.
- Second job: `-O3 -Wall -Wextra -Werror --abigen` (note the double dash on abigen). A warning-clean result on one flag set is not cleanliness on the other.

Host `apt-get install cdt` is what both files are trying to avoid. Neither file has been shown to pull its image from this repo's history.

### Exercise

1. Which image string is in `cdt-deterministic.yml`? (`waxteam/cdt:ce-v1.3.1wax01-v4.1.1wax01`. Read the file. Do not quote the spec row.)
2. Why is `tests/invariants.spec.ts` not a test? (It exports expectations. Nothing asserts them.)
3. What three things are missing before "wasm verified" is a true sentence? (Run id, hash artifact, and the file-plus-pin note. The log lists them.)

---

## What this course will not teach

- A wasm byte
- That the two workflows are interchangeable
- A docker pull that did not happen
