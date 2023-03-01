import { getCompleted } from "../11";

test.each([
  ["01:00:00", "03:00:00", "1/3"],
  ["02:00:00", "04:00:00", "1/2"],
  ["01:00:00", "01:00:00", "1/1"],
  ["00:10:00", "01:00:00", "1/6"],
  ["01:10:10", "03:30:30", "1/3"],
  ["03:30:30", "05:50:50", "3/5"],
])("Challenge #11 getCompleted(%p,%p) === %p", (part, total, solution) => {
  expect(getCompleted(part, total)).toBe(solution);
});
