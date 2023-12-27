import { maxDistance } from "../6";

test.each([
  [">>*<", 2],
  ["<<<>", 2],
  [">***>", 5],
])("Challenge #6 maxDistance(%p) === %p", (movements, solution) => {
  expect(maxDistance(movements)).toEqual(solution);
});
