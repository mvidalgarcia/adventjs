function checkIsSameTree(treeA, treeB) {
  if (treeA === null && treeB === null) return true;
  if (treeA?.value !== treeB?.value) return false;
  return (
    checkIsSameTree(treeA.left, treeB.left) &&
    checkIsSameTree(treeA.right, treeB.right)
  );
}

const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null },
};

const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } },
};

test.each([
  [tree, tree, true],
  [tree, tree2, false],
  [tree2, tree2, true],
])("Challenge #24 checkIsSameTree(%p, %p) === %p", (treeA, treeB, solution) => {
  expect(checkIsSameTree(treeA, treeB)).toBe(solution);
});
