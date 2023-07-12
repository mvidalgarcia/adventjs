function fixLetter(letter: string) {
  return letter
    .trim()
    .replace(/ +(?= )/g, "")
    .replace(/santa claus/gi, "Santa Claus")
    .replace(/ ([,|\.])/g, "$1")
    .replace(/([,|\.])(\w)/g, "$1 $2")
    .replace(/\s?\?+/g, "?")
    .replace(/([\.|\?|\!]) (\w)/g, (_, p1, p2) => `${p1} ${p2.toUpperCase()}`)
    .replace(/^\w/, (m) => m.toUpperCase())
    .replace(/([\w])$/, "$1.");
}

export { fixLetter };
