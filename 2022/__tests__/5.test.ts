import { getMaxGifts } from "../5";

test.each([
  [[12, 3, 11, 5, 7], 20, 3, 20],
  [[50], 15, 1, 0],
  [[50], 100, 1, 50],
  [[50, 70], 100, 1, 70],
  [[50, 70, 30], 100, 2, 100],
  [[50, 70, 30], 100, 3, 100],
  [[50, 70, 30], 100, 4, 100],
])(
  "Challenge #5 getMaxGifts(%p,%p,%p) === %p",
  (giftsCities, maxGifts, maxCities, solution) => {
    expect(getMaxGifts(giftsCities, maxGifts, maxCities)).toBe(solution);
  }
);
