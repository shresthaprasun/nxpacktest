import { multiplier } from "@org/multiplier";

export function powerRaiser(m: number, n: number): number {
  let result = 1;
  for (let i = 0; i < n; ++i) {
    result = multiplier(result, m);
  }
  return result;
}
