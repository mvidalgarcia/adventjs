import { carryGifts } from "../17";

test.each([
  [["game", "bike", "book", "toy"], 10, ["game bike", "book toy"]],
  [["game", "bike", "book", "toy"], 7, ["game", "bike", "book toy"]],
  [["game", "bike", "book", "toy"], 4, ["game", "bike", "book", "toy"]],
  [["toy", "gamme", "toy", "bike"], 6, ["toy", "gamme", "toy", "bike"]],
  [["toy", "toy", "toy", "toy"], 2, []],
])("Challenge #17 carryGifts(%p, %p) === %p", (gifts, maxWeight, solution) => {
  expect(carryGifts(gifts, maxWeight)).toEqual(solution);
});
