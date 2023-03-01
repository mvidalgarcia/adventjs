import { checkJump } from "../10";

test.each([
  [[1, 3, 8, 5, 2], true],
  [[1, 7, 3, 5], false],
  [[1, 2, 2, 2, 1], true],
  [[1, 2, 3], false],
])("Challenge #10 checkJump(%p) === %p", (heights, solution) => {
  expect(checkJump(heights)).toBe(solution);
});
