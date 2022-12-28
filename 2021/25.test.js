function canMouseEat(direction, game) {
  const move = {
    up: ([y, x]) => [y - 1, x],
    down: ([y, x]) => [y + 1, x],
    right: ([y, x]) => [y, x + 1],
    left: ([y, x]) => [y, x - 1],
  };

  const findMouse = (game) => {
    for (let y = 0; y < game.length; y++) {
      for (let x = 0; x < game[0].length; x++) {
        if (game[y][x] === "m") return [y, x];
      }
    }
  };

  const mousePos = findMouse(game);
  const [y, x] = move[direction](mousePos);
  return !!game[y] && game[y][x] === "*";
}

const room = [
  [" ", " ", " "],
  [" ", " ", "m"],
  [" ", " ", "*"],
];

const room2 = [
  ["*", " ", " ", " "],
  [" ", "m", "*", " "],
  [" ", " ", " ", " "],
  [" ", " ", " ", "*"],
];

const room3 = [
  [" ", " ", " "],
  [" ", "m", " "],
  [" ", " ", " "],
];

test.each([
  ["up", room, false],
  ["down", room, true],
  ["right", room, false],
  ["left", room, false],
  ["up", room2, false],
  ["down", room2, false],
  ["right", room2, true],
  ["left", room2, false],
  ["up", room3, false],
  ["down", room3, false],
  ["right", room3, false],
  ["left", room3, false],
])("Challenge #25 canMouseEat(%p, %p) === %p", (direction, game, solution) => {
  expect(canMouseEat(direction, game)).toBe(solution);
});
