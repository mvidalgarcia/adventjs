import { createCube } from "../6";

test.each([
  [
    1,
    String.raw`/\_\
\/_/`,
  ],
  [
    2,
    String.raw` /\_\_\
/\/\_\_\
\/\/_/_/
 \/_/_/`,
  ],
  [
    3,
    String.raw`  /\_\_\_\
 /\/\_\_\_\
/\/\/\_\_\_\
\/\/\/_/_/_/
 \/\/_/_/_/
  \/_/_/_/`,
  ],
])("Challenge #6 createCube(%p) === %p", (size, solution) => {
  expect(createCube(size)).toBe(solution);
});
