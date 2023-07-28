import { canExit } from "../24";

test.each([
  [
    [
      [" ", " ", "W", " ", "S"],
      [" ", " ", " ", " ", " "],
      [" ", " ", " ", "W", " "],
      ["W", "W", " ", "W", "W"],
      [" ", " ", " ", " ", "E"],
    ],
    true,
    [
      [
        [" ", " ", "W", "W", "S"],
        [" ", " ", " ", "W", " "],
        [" ", " ", " ", "W", " "],
        ["W", "W", " ", "W", "W"],
        [" ", " ", " ", " ", "E"],
      ],
      false,
    ],
  ],
])("Challenge #24 canExit(%p) === %p", (maze, solution) => {
  expect(canExit(maze)).toEqual(solution);
});
