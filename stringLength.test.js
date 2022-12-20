const stringLength = require('./stringLength');

test('reverseString function works correctly', () => {
  // Arrange
  const input = 'hello';
  const expectedResult = 5;

  // Act
  const result = stringLength(input);

  // Assert
  expect(result).toBe(expectedResult);
});
