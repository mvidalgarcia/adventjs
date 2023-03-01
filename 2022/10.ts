function checkJump(heights: number[]): boolean {
  const maxIndex = heights.reduce(
    (idxMax, curr, idx, array) => (curr > array[idxMax] ? idx : idxMax),
    0
  );

  // ascending or keeping height
  const isAscending = (numbers: number[]): boolean => {
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < numbers[i - 1]) {
        return false;
      }
    }
    return true;
  };

  const wayUp = heights.slice(0, maxIndex);
  const wayDownReversed = heights.slice(maxIndex + 1).reverse();

  return (
    wayUp.length > 0 &&
    wayDownReversed.length > 0 &&
    isAscending(wayUp) &&
    isAscending(wayDownReversed)
  );
}

export { checkJump };
