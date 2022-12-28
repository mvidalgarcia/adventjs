function getMinJump(obstacles) {
  let jump = 2;
  while (obstacles.some((obs) => obs % jump === 0)) jump++;
  return jump;
}

test.each([
  [[5, 3, 6, 7, 9], 4],
  [[2, 4, 6, 8, 10], 7],
  [[1, 2, 3, 5], 4],
  [[3, 7, 5], 2],
  [[9, 5, 1], 2],
])("Challenge #12 getMinJump(%p) === %p", (obstacles, solution) => {
  expect(getMinJump(obstacles)).toBe(solution);
});
