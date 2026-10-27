export const invariants = [
  {
    id: "pinned-image",
    expect: "The workflow container is ghcr.io/antelopeio/cdt:4.1.0 and not ubuntu-latest plus a package install.",
  },
  {
    id: "warnings-are-failures",
    expect: "-Werror is present. A warning fails the job.",
  },
  {
    id: "tooling-only",
    expect: "An empty contracts/src directory exits 0 instead of failing cdt-cpp.",
  },
  {
    id: "manifest",
    expect: "The job writes SHA256SUMS.txt for wasm and abi when those files exist.",
  },
];
