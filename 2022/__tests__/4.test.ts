import { fitsInOneBox } from "../4";

test.each([
  [
    [
      { l: 1, w: 1, h: 10 },
      { l: 3, w: 3, h: 12 },
      { l: 2, w: 2, h: 1 },
    ],
    false,
  ],
  [
    [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
    ],
    true,
  ],
  [
    [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 3, w: 1, h: 3 },
    ],
    false,
  ],
  [
    [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 2, w: 10, h: 2 },
    ],
    false,
  ],
  [
    [
      { l: 1, w: 1, h: 1 },
      { l: 3, w: 3, h: 3 },
      { l: 2, w: 2, h: 2 },
    ],
    true,
  ],
])("Challenge #4 fitsInOneBox(%p) === %p", (boxes, solution) => {
  expect(fitsInOneBox(boxes)).toEqual(solution);
});
