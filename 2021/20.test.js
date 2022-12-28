function pangram(letter) {
  const normalizedLetter = letter.toLowerCase();
  const alphabet = [..."abcdefghijklmnñopqrstuvwxyz"];
  return alphabet.every((char) => normalizedLetter.includes(char));
}

test.each([
  ["Extraño pan de col y kiwi se quemó bajo fugaz vaho", true],
  ["Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!", true],
  [
    "Esto es una frase larga pero no tiene todas las letras del abecedario",
    false,
  ],
  ["De la a a la z, nos faltan letras", false],
])("Challenge #20 pangram(%p) === %p", (letter, solution) => {
  expect(pangram(letter)).toBe(solution);
});
