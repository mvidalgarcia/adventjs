function checkSledJump(heights) {
  let ascending = true;
  for (let i = 1; i < heights.length; i++) {
    if (heights[i] === heights[i - 1]) return false;
    if (ascending && heights[i - 1] > heights[i]) ascending = false;
    if (!ascending && heights[i - 1] < heights[i]) return false;
  }
  return !ascending;
}

test.each([
  [[1, 2, 3, 2, 1], true],
  [[0, 1, 0], true],
  [[0, 3, 2, 1], true],
  [[0, 1000, 1], true],
  [[2, 4, 4, 6, 2], false],
  [[1, 2, 3], false],
  [[1, 2, 3, 2, 1, 2, 3], false],
])("Challenge #15 checkSledJump(%p) === %p", (heights, solution) => {
  expect(checkSledJump(heights)).toBe(solution);
});
