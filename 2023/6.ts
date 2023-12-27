function maxDistance(movements: string): number {
  const counts = movements.split("").reduce(
    (acc, char) => {
      acc[char] = (acc[char] || 0) + 1;
      return acc;
    },
    { ">": 0, "<": 0, "*": 0 }
  );

  return Math.abs(counts[">"] - counts["<"]) + counts["*"];
}

export { maxDistance };
