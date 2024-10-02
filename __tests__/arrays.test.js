const { filter, sortArray, sumArray } = require("../arrays.js");
test("function filter([1,3,6,7,8,9,4],4) to equal [6,7,8,9]", () => {
  expect(filter([1, 3, 6, 7, 8, 9, 4], 4)).toStrictEqual([6, 7, 8, 9]);
});

test("function filter([1,3,6,7,'8',9,4],4) to equal [6,7,9]", () => {
  expect(filter([1, 3, 6, 7, "8", 9, 4], 4)).toStrictEqual([6, 7, 9]);
});

test("function sortArray(['e', 'b', 'z', 't']) to equal ['b', 'e', 't', 'z']", () => {
  expect(sortArray(["e", "b", "z", "t"])).toStrictEqual(["b", "e", "t", "z"]);
});

test("function sumArray([1, 3, 6, 7, '8', 9, 4]) to equal 38", () => {
  expect(sumArray([1, 3, 6, 7, "8", 9, 4])).toBe(38);
});
