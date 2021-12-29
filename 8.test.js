function maxProfit(prices) {
  let res = -1;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const buyPrice = prices[i];
      const sellPrice = prices[j];
      if (sellPrice - buyPrice > res) {
        res = sellPrice - buyPrice;
      }
    }
  }
  return res > 0 ? res : -1;
}

test.each([
  [[39, 18, 29, 25, 34, 32, 5], 16],
  [[10, 20, 30, 40, 50, 60, 70], 60],
  [[18, 15, 12, 11, 9, 7], -1],
  [[3, 3, 3, 3, 3], -1],
])("Challenge #8 maxProfit(%p) === %p", (prices, solution) => {
  expect(maxProfit(prices)).toEqual(solution);
});
