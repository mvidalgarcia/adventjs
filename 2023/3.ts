function findNaughtyStep(original: string, modified: string) {
  const [a, b] =
    original.length > modified.length
      ? [original.split(""), modified.split("")]
      : [modified.split(""), original.split("")];

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return a[i];
    }
  }
  return "";
}

export { findNaughtyStep };
