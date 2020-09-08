const func = require('../../../helpers/function');

describe('Function Factorial', () => {
  it('should factorial(5) return 120', (done) => {
    const result = func.factorial(5);
    expect(result).toBe(120);
    done();
  });

  it('should factorial(0) return 1', (done) => {
    const result = func.factorial(0);
    expect(result).toBe(1);
    done();
  });

  it('should should throw an error factorial(-1)', (done) => {
    expect(() => func.factorial(-1)).toThrow();
    done();
  })
})