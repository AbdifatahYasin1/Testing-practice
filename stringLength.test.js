const stringLength = require("./stringLength");

test("returns the length of a string with length greater than 1 and less than or equal to 10", () => {
  expect(stringLength("hello")).toBe(5);
});

test("throws an error for a string with length less than 1", () => {
  expect(() => stringLength("")).toThrow("invalid string");
});

test("throws an error for a string with length greater than 10", () => {
  expect(() => stringLength("hello, world!")).toThrow("invalid string");
});
