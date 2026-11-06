/** Attack / honesty notes that match the workflow files. Not a compile claim. */
export const invariants = [
  {
    id: "owned-pinned-image",
    expect:
      "cdt-deterministic.yml pins waxteam/cdt:ce-v1.3.1wax01-v4.1.1wax01. That is the owned quest pin.",
  },
  {
    id: "secondary-pinned-image",
    expect:
      "px-contract-build.yml pins ghcr.io/antelopeio/cdt:4.1.0. Two pins are not one pin.",
  },
  {
    id: "warnings-are-failures",
    expect: "Owned workflow passes -Werror. A warning fails the job when it runs.",
  },
  {
    id: "tooling-only-secondary",
    expect:
      "Secondary workflow: empty contracts/src exits 0 instead of failing cdt-cpp.",
  },
  {
    id: "manifest",
    expect:
      "Owned workflow tees build/manifest.sha256 when wasm and abi exist. No manifest is claimed here until a run is recorded.",
  },
];
