function canReconfigure(from, to) {
  if (from.length !== to.length) return false;

  const used = {};
  for (let i = 0; i < from.length; i++) {
    const charFrom = from.charAt(i);
    const charTo = to.charAt(i);
    if (
      (used[charFrom] && used[charFrom] !== charTo) ||
      (used[charTo] && used[charTo] !== charFrom)
    ) {
      return false;
    }
    used[charFrom] = charTo;
    used[charTo] = charFrom;
  }
  return true;
}

test.each([
  ["BAL", "LIB", true],
  ["CON", "JUU", false],
  ["XBOX", "XXBO", false],
  ["XBOX", "XOBX", true],
  ["MMM", "MID", false],
  ["AA", "MID", false],
  ["ABCDDEFG", "ZYXWVUUT", false],
])("Challenge #23 canReconfigure((%s, %s)", (from, to, result) => {
  expect(canReconfigure(from, to)).toBe(result);
});
