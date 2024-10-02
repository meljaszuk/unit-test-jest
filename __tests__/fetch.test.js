const { fetchData } = require("../fetch.js");

beforeEach(() => {
  fetch.resetMocks();
});

test("function fetchData should return correct data", async () => {
  fetch.mockResponseOnce(
    JSON.stringify([
      { id: 1, name: "Alice", age: 30 },
      { id: 2, name: "Bob", age: 25 },
      { id: 3, name: "Charlie", age: 35 },
    ])
  );

  const data = await fetchData("./data.json");
  expect(data).toStrictEqual([
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 35 },
  ]);
});

test("function fetchData should throw error on network failure", async () => {
  fetch.mockReject(new Error("Network response was not ok"));

  await expect(fetchData("./data.json")).rejects.toThrow(
    "Network response was not ok"
  );
});
