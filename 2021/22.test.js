function countDecorations(bigTree) {
  if (bigTree) {
    return (
      bigTree.value +
      countDecorations(bigTree.left) +
      countDecorations(bigTree.right)
    );
  }
  return 0;
}

test.each([
  [
    {
      value: 1,
      left: {
        value: 2,
        left: null,
        right: null,
      },
      right: {
        value: 3,
        left: null,
        right: null,
      },
    },
    6,
  ],
])("Challenge #22 countDecorations(%p) === %p", (bigTree, solution) => {
  expect(countDecorations(bigTree)).toBe(solution);
});
