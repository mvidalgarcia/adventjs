import { countHours } from "../2";

test.each([
  [2023, ["01/06", "04/01", "12/25"], 4],
  [2022, ["01/06", "04/01", "12/25"], 4],
  [
    1985,
    ["01/01", "01/06", "02/02", "02/17", "02/28", "06/03", "12/06", "12/25"],
    10,
  ],
  [2000, ["01/01"], 0],
])("Challenge #2 countHours(%p, %p) === %p", (year, holidays, solution) => {
  expect(countHours(year, holidays)).toEqual(solution);
});
