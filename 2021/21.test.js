// for ... of
// function canCarry(capacity, trip) {
//   let prevDelivery = Number.MAX_SAFE_INTEGER;
//   let accCount = 0;
//   let prevCount = 0;
//   for (const [count, pickUp, delivery] of trip) {
//     if (prevDelivery <= pickUp) {
//       accCount -= prevCount;
//     }
//     accCount += count;
//     if (accCount > capacity) return false;
//     prevDelivery = delivery;
//     prevCount = count;
//   }
//   return true;
// }

// for
function canCarry(capacity, trip) {
  let accCount = 0;
  for (let i = 0; i < trip.length; i++) {
    const [count, pickUp, _] = trip[i];
    if (i !== 0) {
      const [prevCount, _, prevDelivery] = trip[i - 1];
      if (prevDelivery <= pickUp) {
        accCount -= prevCount;
      }
    }
    accCount += count;
    if (accCount > capacity) return false;
  }
  return true;
}

test.each([
  [
    4,
    [
      [2, 5, 8],
      [3, 6, 10],
    ],
    false,
  ],
  [
    3,
    [
      [1, 1, 5],
      [2, 2, 10],
    ],
    true,
  ],
  [
    3,
    [
      [2, 1, 5],
      [3, 5, 7],
    ],
    true,
  ],
  [
    4,
    [
      [2, 3, 8],
      [2, 5, 7],
    ],
    true,
  ],
  [1, [[2, 3, 8]], false],
  [
    2,
    [
      [1, 2, 4],
      [2, 3, 8],
    ],
    false,
  ],
  [
    2,
    [
      [1, 2, 4],
      [2, 3, 8],
      [2, 7, 9],
    ],
    false,
  ],
  [
    4,
    [
      [4, 2, 4],
      [4, 4, 5],
      [4, 5, 8],
      [4, 7, 10],
    ],
    false,
  ],
])("Challenge #21 canCarry(%p, %p) === %p", (capacity, trip, solution) => {
  expect(canCarry(capacity, trip)).toBe(solution);
});
