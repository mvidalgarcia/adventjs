export function distributeGifts(
  packOfGifts: string[],
  reindeers: string[]
): number {
  const REINDEER_CAPACITY_FACTOR = 2;
  function getCapacity(items, factor = 1) {
    return items.reduce((acc, current) => acc + current.length * factor, 0);
  }
  const giftsWeight = getCapacity(packOfGifts);
  const reindeersCapacity = getCapacity(reindeers, REINDEER_CAPACITY_FACTOR);
  return Math.floor(reindeersCapacity / giftsWeight);
}
