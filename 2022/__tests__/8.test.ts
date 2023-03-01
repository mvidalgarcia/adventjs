import { checkPart } from "../8";

test.each([
  ["uwu", true],
  ["miidim", true],
  ["midu", false],
  ["zzzoonzzz", true],
])("Challenge #8 checkPart(%p) === %p", (part, solution) => {
  expect(checkPart(part)).toBe(solution);
});
