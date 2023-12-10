import { findFirstRepeated } from "../1";

test.each([
  [[2, 1, 3, 5, 3, 2], 3],
  [[1, 2, 3, 4], -1],
  [[5, 1, 5, 1], 5],
])("Challenge #1 findFirstRepeated(%p) === %p", (gifts, solution) => {
  expect(findFirstRepeated(gifts)).toEqual(solution);
});
