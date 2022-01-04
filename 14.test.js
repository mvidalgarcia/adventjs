function missingReindeer(ids) {
  const expectedReindeers = [...Array(ids.length).keys()];
  const missing = expectedReindeers.filter((x) => !ids.includes(x))[0];
  return missing === undefined ? ids.length : missing;
}

test.each([
  [[0, 2, 3], 1],
  [[0, 2, 3], 1],
  [[5, 6, 1, 2, 3, 7, 0], 4],
  [[0, 1], 2],
  [[3, 0, 1], 2],
  [[9, 2, 3, 5, 6, 4, 7, 0, 1], 8],
  [[0], 1],
  [[1], 0],
])("Challenge #14 missingReindeer(%p) === %p", (ids, solution) => {
  expect(missingReindeer(ids)).toBe(solution);
});
