function manufacture(gifts: string[], materials: string) {
  function isSubsetOf(masterSet: Set<string>, otherSet: Set<string>) {
    for (let value of masterSet) {
      if (!otherSet.has(value)) {
        return false;
      }
    }
    return true;
  }

  return gifts.filter((gift) => {
    const giftMaterialsSet = new Set(gift.split(""));
    const materialsSet = new Set(materials.split(""));
    return isSubsetOf(giftMaterialsSet, materialsSet);
  });
}

export { manufacture };
