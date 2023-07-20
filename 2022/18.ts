// O(2n) solution
function dryNumber(dry: number, numbers: number): number[] {
  const allNumbers = Array.from({ length: numbers }, (_, i) => i + 1);
  const dryNumbers = allNumbers.filter((number) => {
    const numberString = number.toString();
    return numberString.includes(dry.toString());
  });
  return dryNumbers;
}

// More optimized O(n) solution
function dryNumberOptimized(dry: number, numbers: number): number[] {
  const dryNumbers: number[] = [];
  for (let number = 1; number <= numbers; number++) {
    if (number.toString().includes(dry.toString())) {
      dryNumbers.push(number);
    }
  }
  return dryNumbers;
}

export { dryNumber, dryNumberOptimized };
