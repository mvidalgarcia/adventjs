function checkPart(part: string): boolean {
  const isPalindrome = (word) => word === [...word].reverse().join("");

  if (isPalindrome(part)) {
    return true;
  }

  return [...part].reduce((acc, _, i) => {
    const str = part.split("");
    str.splice(i, 1);
    return acc || isPalindrome(str.join(""));
  }, false);
}

export { checkPart };
