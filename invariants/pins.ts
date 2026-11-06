/**
 * Documented pins for this workflow-file-only lab.
 * These strings must match the YAML files. Matching them is not a successful compile.
 */

/** Owned callable workflow: cdt-deterministic.yml */
export const OWNED_IMAGE = "waxteam/cdt:ce-v1.3.1wax01-v4.1.1wax01";
export const OWNED_FLAGS = ["-O3", "-Werror", "-abigen"] as const;
export const OWNED_WORKFLOW = "cdt-deterministic.yml";

/** Secondary workflow (do not conflate): px-contract-build.yml */
export const SECONDARY_IMAGE = "ghcr.io/antelopeio/cdt:4.1.0";
export const SECONDARY_WORKFLOW = "px-contract-build.yml";

export function assertDistinctPins(
  owned: string,
  secondary: string
): void {
  if (owned === secondary) {
    throw new Error("owned and secondary pins must differ");
  }
}

/** True when text documents the owned image pin. */
export function documentsOwnedPin(workflowText: string): boolean {
  return workflowText.includes(OWNED_IMAGE);
}

/** True when text documents -Werror. */
export function documentsWerror(workflowText: string): boolean {
  return workflowText.includes("-Werror");
}

/** True when text documents the secondary image pin. */
export function documentsSecondaryPin(workflowText: string): boolean {
  return workflowText.includes(SECONDARY_IMAGE);
}
