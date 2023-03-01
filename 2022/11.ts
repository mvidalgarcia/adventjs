function getCompleted(part: string, total: string): string {
  // greatest common divisor
  const findGCD = (a: number, b: number): number => {
    if (b === 0) {
      return a;
    }
    return findGCD(b, a % b);
  };

  const [partH, partM, partS] = part.split(":").map((x) => Number(x));
  const [totalH, totalM, totalS] = total.split(":").map((x) => Number(x));
  const allPartSec = partH * 60 ** 2 + partM * 60 + partS;
  const allTotalSec = totalH * 60 ** 2 + totalM * 60 + totalS;
  const gcd = findGCD(allPartSec, allTotalSec);
  return `${allPartSec / gcd}/${allTotalSec / gcd}`;
}

export { getCompleted };
