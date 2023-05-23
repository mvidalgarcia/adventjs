import { decorateTree } from "../15";

test.each([
  ["B P R P", ["R", "P B", "R B B", "B P R P"]],
  ["B B", ["B", "B B"]],
])("Challenge #15 decorateTree(%p) === %p", (base, solution) => {
  expect(decorateTree(base)).toEqual(solution);
});
