function carryGifts(gifts: string[], maxWeight: number): string[] {
  return gifts.reduce((sacks: string[], gift) => {
    if (sacks.length === 0 && gift.length > maxWeight) {
      return [];
    }
    const lastSack = sacks[sacks.length - 1];
    if (
      sacks.length === 0 ||
      lastSack.replace(/\s/, "").length + gift.length > maxWeight
    ) {
      sacks.push(gift);
    } else {
      sacks[sacks.length - 1] += ` ${gift}`;
    }
    return sacks;
  }, []);
}

export { carryGifts };
