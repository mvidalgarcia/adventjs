function createCube(size: number) {
  const top = { left: "/\\", right: "_\\" };
  const bottom = { left: "\\/", right: "_/" };

  const topHalf = Array.from({ length: size }, (_, i) => i + 1).map((index) => {
    const spaces = " ".repeat(size - index);
    const cubeRow = top.left.repeat(index) + top.right.repeat(size);
    return spaces.concat(cubeRow);
  });

  const bottomHalf = Array.from({ length: size }, (_, i) => size - i).map(
    (index) => {
      const spaces = " ".repeat(size - index);
      const cubeRow = bottom.left.repeat(index) + bottom.right.repeat(size);
      return spaces.concat(cubeRow);
    }
  );

  return topHalf.concat(bottomHalf).join("\n");
}

export { createCube };
