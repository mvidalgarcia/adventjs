import { findNaughtyStep } from "../3";

test.each([
  ["abcd", "abcde", "e"],
  ["stepfor", "stepor", "f"],
  ["abcde", "abcde", ""],
])(
  "Challenge #3 findNaughtyStep(%p,%p) === %p",
  (original, modified, solution) => {
    expect(findNaughtyStep(original, modified)).toEqual(solution);
  }
);
