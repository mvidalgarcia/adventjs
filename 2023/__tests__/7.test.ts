import { drawGift } from "../7";

test.each([
  [
    4,
    "+",
    `   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
`,
  ],
  [
    5,
    "*",
    `    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
`,
  ],
  [
    1,
    "^",
    `#
`,
  ],
])("Challenge #7 drawGift(%p, %p) === %p", (size, symbol, solution) => {
  expect(drawGift(size, symbol)).toEqual(solution);
});
