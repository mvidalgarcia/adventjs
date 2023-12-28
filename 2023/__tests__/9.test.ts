import { adjustLights } from "../9";

test.each([
  [["🟢", "🔴", "🟢", "🟢", "🟢"], 1],
  [["🔴", "🔴", "🟢", "🔴", "🟢"], 1],
  [["🔴", "🔴", "🟢", "🟢", "🔴"], 2],
  [["🟢", "🔴", "🟢", "🔴", "🟢"], 0],
  [["🔴", "🔴", "🔴"], 1],
])("Challenge #9 adjustLights(%p) === %p", (lights, solution) => {
  expect(adjustLights(lights)).toEqual(solution);
});
