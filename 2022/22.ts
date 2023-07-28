function checkStepNumbers(
  systemNames: string[],
  stepNumbers: number[]
): boolean {
  const group: Record<string, number[]> = systemNames.reduce(
    (acc, curr, index) => {
      curr in acc
        ? acc[curr].push(stepNumbers[index])
        : (acc[curr] = [stepNumbers[index]]);
      return acc;
    },
    {}
  );

  return Object.values(group).every((arr) =>
    arr.every(
      (currentValue, index) => index === 0 || currentValue > arr[index - 1]
    )
  );
}

export { checkStepNumbers };
