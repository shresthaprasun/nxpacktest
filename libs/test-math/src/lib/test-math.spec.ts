import { calculate } from './test-math';

describe('calculate', () => {
  it('should work', () => {
    expect(calculate( "51 + 2 * 53 + 2 ^ 6")).toEqual(221);
  });
});
