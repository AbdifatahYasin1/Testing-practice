const reverseString = require('./reverseString');
test('reverseString function works correctly', () => {
  // Arrange
  const input = 'hello';
  const expectedResult = 'olleh';

  // Act
  const result = reverseString(input);

  // Assert
  expect(result).toBe(expectedResult);
});
