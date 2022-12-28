function listGifts(letter) {
  const gifts = {};
  const cleanLetter = letter
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter((item) => !item.startsWith("_"))
    .forEach((item) => {
      gifts[item] = (gifts[item] || 0) + 1;
    });
  return gifts;
}

test("Challenge #2", () => {
  const carta = "bici coche balón _playstation bici coche peluche";
  const result = {
    bici: 2,
    coche: 2,
    balón: 1,
    peluche: 1,
  };

  expect(listGifts(carta)).toEqual(result);
});
