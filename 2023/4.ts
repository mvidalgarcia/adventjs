function decode(message: string) {
  const regex: RegExp = /\(([^()]*)\)/;
  let result = message;

  while (regex.test(result)) {
    result = result.replace(regex, (_, group) =>
      group.split("").reverse().join("")
    );
  }
  return result;
}

export { decode };
