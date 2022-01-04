const SYMBOL_MAP = {
  ".": 1,
  ",": 5,
  ":": 10,
  ";": 50,
  "!": 100,
};

/* With `for` loop */
// function decodeNumber(symbols) {
//   let res = SYMBOL_MAP[symbols[symbols.length - 1]];
//   for (let i = 0; i < symbols.length - 1; i++) {
//     const currValue = SYMBOL_MAP[symbols[i]];
//     res += currValue < SYMBOL_MAP[symbols[i + 1]] ? -currValue : currValue;
//   }
//   return res;
// }

/* With `Array.prototype.reduce` */
function decodeNumber(symbols) {
  return symbols.split("").reduce((acc, item, idx, array) => {
    const current = SYMBOL_MAP[item];
    const next = SYMBOL_MAP[array[idx + 1]];
    return acc + current * (current < next ? -1 : 1);
  }, 0);
}

test.each([
  ["...", 3],
  [".,", 4],
  [",.", 6],
  [",...", 8],
  [".........!", 107],
  [".;", 49],
  ["..,", 5],
  ["..,!", 95],
  [".;!", 49],
  ["!!!", 300],
  [";!", 50],
  [";.W", NaN],
])("Challenge #16 decodeNumbers(%p) === %p", (symbols, solution) => {
  expect(decodeNumber(symbols)).toBe(solution);
});
