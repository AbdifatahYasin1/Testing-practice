const calculator = require("./calculator");

test("calculate the numbers", () => {
  expect(calculator.add(1, 1)).toBe(2);
  expect(calculator.subtract(5, 2)).toBe(3);
  expect(calculator.multiply(4, 4)).toBe(16);
  expect(calculator.divide(4, 4)).toBe(1);
});
