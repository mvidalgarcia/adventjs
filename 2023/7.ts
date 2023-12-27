function drawGift(size: number, symbol: string): string {
  if (size === 1) return "#\n";
  const ceiling = `${" ".repeat(size - 1)}${"#".repeat(size)}`;
  const mid = `${"#".repeat(size)}${symbol.repeat(size - 2)}#`;
  const floor = `${"#".repeat(size)}`;

  const body: string[] = Array.from(
    { length: size - 2 },
    (_, index) =>
      `${" ".repeat(size - 2 - index)}#${symbol.repeat(
        size - 2
      )}#${symbol.repeat(index)}#`
  );

  return (
    [ceiling, ...body, mid, ...body.map((x) => x.trim()).reverse(), floor].join(
      "\n"
    ) + "\n"
  );
}

export { drawGift };
