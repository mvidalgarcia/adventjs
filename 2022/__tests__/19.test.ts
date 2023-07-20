import { sortToys } from "../19";

test.each([
  [
    ["ball", "doll", "car", "puzzle"],
    [2, 3, 1, 0],
    ["puzzle", "car", "ball", "doll"],
  ],
  [
    ["pc", "xbox", "ps4", "switch", "nintendo"],
    [8, 6, 5, 7, 9],
    ["ps4", "xbox", "switch", "pc", "nintendo"],
  ],
])("Challenge #19 sortToys(%p, %p) === %p", (toys, positions, solution) => {
  expect(sortToys(toys, positions)).toEqual(solution);
});
