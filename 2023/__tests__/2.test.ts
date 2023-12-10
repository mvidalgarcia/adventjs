import { manufacture } from "../2";

test.each([
  [["tren", "oso", "pelota"], "tronesa", ["tren", "oso"]],
  [["juego", "puzzle"], "jlepuz", ["puzzle"]],
  [["libro", "ps5"], "psli", []],
])("Challenge #2 manufacture(%p,%p) === %p", (gifts, materials, solution) => {
  expect(manufacture(gifts, materials)).toEqual(solution);
});
