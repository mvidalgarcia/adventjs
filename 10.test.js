function getCoins(change) {
  const coins = [50, 20, 10, 5, 2, 1];
  const res = new Array(coins.length);
  let remaining = change;
  coins.forEach((coin, i) => {
    res[i] = Math.floor(remaining / coin);
    remaining = remaining % coin;
  });
  return res.reverse();
}

test.each([
  [51, [1, 0, 0, 0, 0, 1]],
  [3, [1, 1, 0, 0, 0, 0]],
  [5, [0, 0, 1, 0, 0, 0]],
  [16, [1, 0, 1, 1, 0, 0]],
  [100, [0, 0, 0, 0, 0, 2]],
])("Challenge #10 getCoins(%p) === %p", (change, solution) => {
  expect(getCoins(change)).toEqual(solution);
});
