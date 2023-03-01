import { getGiftsToRefill } from "../7";

test.each([
  [
    ["bici", "coche", "bici", "bici"],
    ["coche", "bici", "muñeca", "coche"],
    ["bici", "pc", "pc"],
    ["muñeca", "pc"],
  ],
])("Challenge #7 getGiftsToRefill(%p,%p,%p) === %p", (a1, a2, a3, solution) => {
  expect(getGiftsToRefill(a1, a2, a3)).toEqual(solution);
});
