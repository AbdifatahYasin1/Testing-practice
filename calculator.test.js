const calculator = require('./calculator');
test('calculate the numbers using the AAA pattern', () => {
  // Arrange
  const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
  };

  //act
  const result1 = calculator.add(1, 1);
  const result2 = calculator.subtract(4, 1);
  const result3 = calculator.multiply(4, 4);
  const result4 = calculator.divide(4, 2);

  //assert
  expect(result1).toBe(2);
  expect(result2).toBe(3);
  expect(result3).toBe(16);
  expect(result4).toBe(2);
});
