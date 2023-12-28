function adjustLights(lights: string[]) {
  const patternA = Array.from({ length: lights.length }, (_, i) =>
    i % 2 === 0 ? "🟢" : "🔴"
  );
  const patternB = Array.from({ length: lights.length }, (_, i) =>
    i % 2 === 0 ? "🔴" : "🟢"
  );

  const countDifferences = (pattern: string[]): number =>
    lights.reduce(
      (count, light, i) => (light !== pattern[i] ? count + 1 : count),
      0
    );

  const diffA = countDifferences(patternA);
  const diffB = countDifferences(patternB);
  return Math.min(diffA, diffB);
}

export { adjustLights };
