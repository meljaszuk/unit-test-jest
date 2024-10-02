// __tests__/mathFunctions.test.js
const { add, mod } = require("../mathFunctions.js");

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("adds -5 + 5 to equal 0", () => {
  expect(add(-5, 5)).toBe(0);
});

test("check rest from division 10 by 4", () => {
  expect(mod(10, 4)).toBe(1);
});
