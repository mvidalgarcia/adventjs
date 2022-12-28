function wrapGifts(gifts) {
  if (!gifts.length) return [];
  const giftWidth = gifts[0].length + 2;
  return [
    "*".repeat(giftWidth),
    ...gifts.map((giftRow) => `*${giftRow}*`),
    "*".repeat(giftWidth),
  ];
}

test.each([
  [
    ["📷", "⚽️"],
    ["****", "*📷*", "*⚽️*", "****"],
  ],
  [
    ["🏈🎸", "🎮🧸"],
    ["******", "*🏈🎸*", "*🎮🧸*", "******"],
  ],
  [["📷"], ["****", "*📷*", "****"]],
])("Challenge #13 wrapGifts(%p) === %p", (gifts, solution) => {
  expect(wrapGifts(gifts)).toEqual(solution);
});
