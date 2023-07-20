function sortToys(toys: string[], positions: number[]): string[] {
  const toysWithPositions = toys.map((toy, index) => ({
    toy,
    position: positions[index],
  }));
  const sortedToys = toysWithPositions.sort((a, b) => a.position - b.position);
  return sortedToys.map((toy) => toy.toy);
}

export { sortToys };
