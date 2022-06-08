import { adder } from "@org/adder";

export function multiplier(a: number, b: number): number {
  let result = 0;
  for (let i = 0; i < b; ++i) {
    result = adder(result, a);
  }
  return result;
}
