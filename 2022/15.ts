function decorateTree(base: string): string[] {
  const splitBase = base.split(" ");

  if (splitBase.length === 2) {
    return [equivalent(splitBase[0], splitBase[1]), base];
  }

  const row = splitBase
    .reduce((acc, curr, i) => {
      if (i < splitBase.length - 1) {
        acc.push(equivalent(curr, splitBase[i + 1]));
      }
      return acc;
    }, [] as string[])
    .join(" ");

  return [...decorateTree(row), base];
}

function equivalent(a: string, b: string): string {
  if (a === b) {
    return a;
  }
  if (`${a} ${b}` === "B P" || `${a} ${b}` === "P B") {
    return "R";
  }
  if (`${a} ${b}` === "R P" || `${a} ${b}` === "P R") {
    return "B";
  }
  if (`${a} ${b}` === "R B" || `${a} ${b}` === "B R") {
    return "P";
  }
  return "wat";
}

export { decorateTree };
