function createXmasTree(height) {
  function buildLeaves(height, width) {
    let levels = [];
    for (let i = 0; i < height; i++) {
      const crown = i * 2 + 1;
      const air = width - crown;
      levels.push(
        `${"_".repeat(air / 2)}${"*".repeat(crown)}${"_".repeat(air / 2)}`
      );
    }
    return levels.join("\n");
  }

  function buildTrunk(width, height = 2) {
    let trunk = [];
    const sideAir = Math.floor(width / 2);
    for (let i = 0; i < height; i++) {
      trunk.push(`${"_".repeat(sideAir)}#${"_".repeat(sideAir)}`);
    }
    return trunk.join("\n");
  }

  let tree = "";
  const width = height * 2 - 1;
  tree += buildLeaves(height, width);
  tree += "\n";
  tree += buildTrunk(width);

  return tree;
}

test("Challenge #4", () => {
  const results = [
    [
      5,
      `____*____
___***___
__*****__
_*******_
*********
____#____
____#____`,
    ],
    [
      3,
      `__*__
_***_
*****
__#__
__#__`,
    ],
    [
      4,
      `___*___
__***__
_*****_
*******
___#___
___#___`,
    ],
  ];
  results.forEach(([height, tree]) => {
    expect(createXmasTree(height)).toBe(tree);
  });
});
