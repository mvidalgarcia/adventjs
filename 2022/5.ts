function getMaxGifts(
  giftsCities: number[],
  maxGifts: number,
  maxCities: number
): number {
  const giftsBT = (
    giftsCities: number[],
    gifts: number,
    cities: number,
    i: number
  ) => {
    if (cities > maxCities || gifts > maxGifts) return 0;
    if (i === giftsCities.length) return gifts;

    const res1 = giftsBT(
      giftsCities,
      gifts + giftsCities[i],
      cities + 1,
      i + 1
    );
    const res2 = giftsBT(giftsCities, gifts, cities, i + 1);

    return Math.max(res1, res2);
  };

  return giftsBT(giftsCities, 0, 0, 0);
}

export { getMaxGifts };
