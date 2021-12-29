// With `Array.prototype.forEach()`
function groupBy(collection, it) {
  const res = {};
  collection.forEach((item) => {
    const key = it instanceof Function ? it(item) : item[it];
    if (!res[key]) {
      res[key] = [];
    }
    res[key].push(item);
  });
  return res;
}

// With `Array.prototype.reduce()`
// function groupBy(collection, it) {
//   const reducer = (prev, curr) => {
//     const key = it instanceof Function ? it(curr) : curr[it];
//     if (!prev[key]) {
//       prev[key] = [];
//     }
//     prev[key].push(curr);
//     return prev;
//   };
//   return collection.reduce(reducer, {});
// }

test.each([
  [[6.1, 4.2, 6.3], Math.floor, { 6: [6.1, 6.3], 4: [4.2] }],
  [["one", "two", "three"], "length", { 3: ["one", "two"], 5: ["three"] }],
  [[{ age: 23 }, { age: 24 }], "age", { 23: [{ age: 23 }], 24: [{ age: 24 }] }],
  [
    [1397639141184, 1363223700000],
    (timestamp) => new Date(timestamp).getFullYear(),
    { 2013: [1363223700000], 2014: [1397639141184] },
  ],
  [
    [
      { title: "JavaScript: The Good Parts", rating: 8 },
      { title: "Aprendiendo Git", rating: 10 },
      { title: "Clean Code", rating: 9 },
    ],
    "rating",
    {
      8: [{ title: "JavaScript: The Good Parts", rating: 8 }],
      9: [{ title: "Clean Code", rating: 9 }],
      10: [{ title: "Aprendiendo Git", rating: 10 }],
    },
  ],
])("Challenge #9 groupBy(%p, %p) === %p", (collection, it, solution) => {
  expect(groupBy(collection, it)).toEqual(solution);
});
