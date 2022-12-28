import { wrapping } from "../1";

test.each([
  [
    ["cat", "game", "socks"],
    [
      "*****\n*cat*\n*****",
      "******\n*game*\n******",
      "*******\n*socks*\n*******",
    ],
  ],
  [["midu"], ["******\n*midu*\n******"]],
  [["a"], ["***\n*a*\n***"]],
  [[], []],
])("Challenge #1 wrapping(%p) === %p", (gifts, solution) => {
  expect(wrapping(gifts)).toEqual(solution);
});
