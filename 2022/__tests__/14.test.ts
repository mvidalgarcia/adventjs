import { getOptimalPath } from "../14";

test.each([[[[0], [7, 4], [2, 4, 6]], 8]])(
  "Challenge #14 getOptimalPath(%p,%p) === %p",
  (path, solution) => {
    expect(getOptimalPath(path)).toEqual(solution);
  }
);
