import { decode } from "../4";

test.each([
  ["hola (odnum)", "hola mundo"],
  ["(olleh) (dlrow)!", "hello world!"],
  ["sa(u(cla)atn)s", "santaclaus"],
  ["((nta)(sa))", "santa"],
])("Challenge #4 decode(%p) === %p", (message, solution) => {
  expect(decode(message)).toEqual(solution);
});
