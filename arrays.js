function filter(arr, number) {
  return arr.filter((item) => typeof item === "number" && item > number);
}

function sortArray(arr) {
  return arr.sort((a, b) => a.localeCompare(b, "pl"));
}

function sumArray(arr) {
  return arr.reduce((acc, item) => acc + Number(item), 0);
}

module.exports = { filter, sortArray, sumArray };
