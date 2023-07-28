import { checkStepNumbers } from "../22";

test.each([
  [
    ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"],
    [1, 33, 10, 2, 44, 20],
    true,
  ],
  [["tree_1", "tree_1", "house"], [2, 1, 10], false],
  [["tree_1", "tree_1", "house"], [1, 2, 10], true],
  [["tree_1", "tree_1", "house", "house"], [1, 2, 10, 10], false],
])(
  "Challenge #22 checkStepNumbers(%p, %p) === %p",
  (systemNames, stepNumbers, solution) => {
    expect(checkStepNumbers(systemNames, stepNumbers)).toEqual(solution);
  }
);
