/**
 * This quest has no on-chain action. The client artifact is the workflow
 * that every other quest copies. See .github/workflows/px-contract-build.yml.
 */
export const cdtImage = "ghcr.io/antelopeio/cdt:4.1.0";
export const flags = ["-O3", "-Wall", "-Wextra", "-Werror", "--abigen"];
