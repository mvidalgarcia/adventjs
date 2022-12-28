function isValid(letter) {
  function removeParenthesis(gift) {
    const match = gift.match(/\((.*)\)/);
    if (match) {
      return removeParenthesis(match[1]);
    } else {
      return gift;
    }
  }

  let valid = true;
  letter.split(" ").forEach((gift) => {
    if (gift.startsWith("(") && !gift.endsWith(")")) {
      valid = false;
    } else {
      const trimmedGift = removeParenthesis(gift);
      if (trimmedGift.match(/[\(\)]/)) {
        valid = false;
      }
      valid = valid && !!trimmedGift;
    }
  });

  return valid;
}

test("Challenge #3", () => {
  expect(isValid("bici coche (balón) bici coche peluche")).toBe(true);
});
