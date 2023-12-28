import { organizeGifts } from "../8";

test.each([
  ["76a11b", "[a]{a}{a}(aaaaaa){b}(b)"],
  ["20a", "{a}{a}"],
])("Challenge #8 organizeGifts(%p) === %p", (gifts, solution) => {
  expect(organizeGifts(gifts)).toEqual(solution);
});
