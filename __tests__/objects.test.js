const {
  getKeys,
  getValues,
  mergeObjects,
  hasKey,
  filterByValue,
} = require("../objects"); 

test("function getKeys({ a: 1, b: 2 }) to equal ['a', 'b']", () => {
  expect(getKeys({ a: 1, b: 2 })).toStrictEqual(["a", "b"]);
});

test("function getValues({ a: 1, b: 2 }) to equal [1, 2]", () => {
  expect(getValues({ a: 1, b: 2 })).toStrictEqual([1, 2]);
});

test("function mergeObjects({ a: 1 }, { b: 2 }) to equal { a: 1, b: 2 }", () => {
  expect(mergeObjects({ a: 1 }, { b: 2 })).toStrictEqual({ a: 1, b: 2 });
});

test("function hasKey({ a: 1 }, 'a') to equal true", () => {
  expect(hasKey({ a: 1 }, "a")).toBe(true);
});

test("function filterByValue({ a: 1, b: 5, c: 3 }, 2) to equal { b: 5, c: 3 }", () => {
  expect(filterByValue({ a: 1, b: 5, c: 3 }, 2)).toStrictEqual({ b: 5, c: 3 });
});
