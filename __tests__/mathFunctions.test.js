// __tests__/mathFunctions.test.js
const { add, mod, getResult } = require("../mathFunctions.js");

test("function add: adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("function add: adds -5 + 5 to equal 0", () => {
  expect(add(-5, 5)).toBe(0);
});

test("function mod: check rest from division 10 by 4 to equal 2", () => {
  expect(mod(10, 4)).toBe(2);
});

test("function getResult(3, -1, 4, 7, 9, 1) [max^2 + min^3] to equal 80", () => {
  expect(getResult(3, -1, 4, 7, 9, 1)).toBe(80);
});


