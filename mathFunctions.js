function add(a, b) {
  return a + b;
}

function mod(a, b) {
  return a % b;
}

function getResult(a, b, c, d, e, f) {
  const max = Math.max(a, b, c, d, e, f);
  const min = Math.min(a, b, c, d, e, f);
  return max ** 2 + min ** 3;
}

module.exports = { add, mod };
