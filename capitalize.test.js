const capitalize = require('./capitalize');
test('capitalize function works correctly', () => {
  // Arrange
  const input = 'hello';
  const expectedResult = 'Hello';

  // Act
  const result = capitalize(input);

  // Assert
  expect(result).toBe(expectedResult);
});
