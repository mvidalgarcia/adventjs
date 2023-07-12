import { fixLetter } from "../16";

test.each([
  [
    ` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `,
    "Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.",
  ],
  [
    "  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?",
    "Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?",
  ],
  ["  hi,santa claus. are you there ?   ", "Hi, Santa Claus. Are you there?"],
])("Challenge #16 fixLetter(%p) === %p", (letter, solution) => {
  expect(fixLetter(letter)).toEqual(solution);
});
