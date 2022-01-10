function learn(time, courses) {
  let res = null;
  let max = 0;
  for (let i = 0; i < courses.length; i++) {
    for (let j = 0; j < courses.length && i !== j; j++) {
      const coursesTime = courses[i] + courses[j];
      if (coursesTime <= time && coursesTime > max) {
        max = coursesTime;
        res = [j, i];
      }
    }
  }
  return res;
}

test.each([
  [10, [2, 3, 8, 1, 4], [0, 2]],
  [15, [2, 10, 4, 1], [1, 2]],
  [25, [10, 15, 20, 5], [0, 1]],
  [8, [8, 2, 1], [1, 2]],
  [8, [8, 2, 1, 4, 3], [3, 4]],
  [4, [10, 14, 20], null],
  [5, [5, 5, 5], null],
])("Challenge #19 learn(%p, %p) === %p", (time, courses, solution) => {
  expect(learn(time, courses)).toEqual(solution);
});
