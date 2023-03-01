import { countTime } from "../9";

test.each([
  [[0, 1, 1, 0, 1], 7],
  [[0, 0, 0, 1], 21],
  [[0, 0, 1, 0, 0], 28],
])("Challenge #9 countTime(%p) === %p", (leds, solution) => {
  expect(countTime(leds)).toBe(solution);
});
