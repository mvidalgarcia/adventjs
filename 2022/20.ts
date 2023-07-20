type Reindeer = {
  type: string;
  weightCapacity: number;
};

type Gift = {
  country: string;
  weight: number;
};

type ReindeerCount = {
  country: string;
  reindeers: {
    type: string;
    num: number;
  }[];
};

function howManyReindeers(
  reindeerTypes: Reindeer[],
  gifts: Gift[]
): ReindeerCount[] {
  // lowest weight capacity first to fullfill limitations
  reindeerTypes.sort((a, b) => a.weightCapacity - b.weightCapacity);

  // gifts per country
  return gifts.map((gift) => {
    const result: ReindeerCount["reindeers"] = [];
    let remainingWeight = gift.weight;
    while (remainingWeight > 0) {
      for (const reindeer of reindeerTypes) {
        const { weightCapacity, type } = reindeer;

        if (remainingWeight >= weightCapacity) {
          remainingWeight -= weightCapacity;
          const found = result.find((r) => r.type === type);
          if (found) {
            found.num += 1;
          } else {
            result.push({
              type,
              num: 1,
            });
          }
        }
      }
    }

    return {
      country: gift.country,
      reindeers: result.reverse(),
    };
  });
}

export { howManyReindeers };
