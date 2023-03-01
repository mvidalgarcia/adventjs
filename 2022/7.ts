type Gifts = string[];

function getGiftsToRefill(a1: Gifts, a2: Gifts, a3: Gifts): Gifts {
  // remove duplicates
  const all = [...new Set(a1), ...new Set(a2), ...new Set(a3)];
  function fn(acc: string[], curr: string) {
    return all.filter((x) => x === curr).length == 1 ? [...acc, curr] : acc;
  }
  return all.reduce(fn, []);
}
export { getGiftsToRefill };
