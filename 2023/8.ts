function organizeGifts(gifts: string): string {
  const BOX = 10;
  const PALLET = 5;

  const pattern = /(\d+)([a-zA-Z]+)/g;
  const matches = Array.from(gifts.matchAll(pattern), (match) => ({
    [match[2]]: parseInt(match[1], 10),
  }));
  const obj: Record<string, number> = Object.assign({}, ...matches);

  let solution = "";

  Object.entries(obj).forEach(([k, v]) => {
    if (v / (BOX * PALLET) >= 1) {
      solution += `[${k}]`.repeat(Math.floor(v / (BOX * PALLET)));
      v %= BOX * PALLET;
    }
    if (v / BOX >= 1) {
      solution += `{${k}}`.repeat(Math.floor(v / BOX));
      v %= BOX;
    }
    if (v >= 1) {
      solution += `(${k.repeat(v)})`;
    }
  });
  return solution;
}

export { organizeGifts };
