import { dryNumberOptimized as dryNumber } from "../18";

test.each([
  [1, 15, [1, 10, 11, 12, 13, 14, 15]],
  [2, 20, [2, 12, 20]],
])("Challenge #18 dryNumber(%p, %p) === %p", (dry, numbers, solution) => {
  expect(dryNumber(dry, numbers)).toEqual(solution);
});
