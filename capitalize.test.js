const capitalize = require("./capitalize");
test("capitalize function works correctly", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("cabdifataax")).toBe("Cabdifataax");
  expect(capitalize("1234")).toBe("1234");
});
