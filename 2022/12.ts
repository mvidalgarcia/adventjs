type Sleighs = Sleigh[];
type Sleigh = {
  name: string;
  consumption: number;
};

function selectSleigh(distance: number, sleighs: Sleighs): string | null {
  const BATTERY = 20;
  // start from behind to be more optimal (sorted worst to best by default)
  for (let index = sleighs.length - 1; index >= 0; index--) {
    const { name, consumption } = sleighs[index];
    if (consumption * distance <= BATTERY) {
      return name;
    }
  }
  return null;
}

export { selectSleigh };
