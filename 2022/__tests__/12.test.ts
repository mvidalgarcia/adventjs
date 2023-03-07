import { selectSleigh } from "../12";

test.each([
  [
    30,
    [
      { name: "Dasher", consumption: 0.3 },
      { name: "Dancer", consumption: 0.5 },
      { name: "Rudolph", consumption: 0.7 },
      { name: "Midu", consumption: 1 },
    ],
    "Dancer",
  ],
])(
  "Challenge #12 selectSleigh(%p,%p) === %p",
  (distance, sleighs, solution) => {
    expect(selectSleigh(distance, sleighs)).toBe(solution);
  }
);
