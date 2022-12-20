const reverseString = require("./reverseString");

test("reverseString function works correctly", () => {
  // Test that the function returns the expected output for a variety of input values
  expect(reverseString("nimco")).toBe("ocmin");
  expect(reverseString("abcde")).toBe("edcba");
  expect(reverseString("12345")).toBe("54321");
});
