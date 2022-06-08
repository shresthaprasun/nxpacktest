import { powerRaiser } from './power-raiser';

describe('powerRaiser', () => {
  it('should work', () => {
    expect(powerRaiser(5, 6)).toEqual(15625);
  });
});
