const {
  len,
  countAs,
  starPad,
  reverseString,
  isPalindrome,
} = require("../strings.js");

test("function len: length of 'dwqqqrqqr' to equal 9", () => {
  expect(len("dwqqqrqqr")).toBe(9);
});

test("function countAs: capital and non-capital A in '35a24a11A61a6' to equal 4", () => {
  expect(countAs("35a24a11A61a6")).toBe(4);
});

test("function padStart('fe23r2') to equal '****fe23r2'", () => {
  expect(starPad("fe23r2")).toBe("****fe23r2");
});

test("function reverseString('12345') to equal '54321", () => {
  expect(reverseString("12345")).toBe("54321");
});

test("function isPalidrom('kajak') to equal true", () => {
  expect(isPalindrome("kajak")).toBe(true);
});

test("function isPalidrom('kajak') to equal false", () => {
  expect(isPalindrome("dom")).toBe(false);
});
