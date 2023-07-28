function canExit(maze: string[][]): boolean {
  function findStart(maze: string[][]): [number, number] {
    for (let y = 0; y < maze.length; y++) {
      for (let x = 0; x < maze[y].length; x++) {
        if (maze[y][x] === "S") {
          return [x, y];
        }
      }
    }
    throw new Error("No start found");
  }

  function canExitFrom(maze: string[][], x: number, y: number): boolean {
    if (maze[y][x] === "E") {
      return true;
    }
    if (maze[y][x] === "W") {
      return false;
    }
    maze[y][x] = "W"; // draw walls behind us
    return (
      (x > 0 && canExitFrom(maze, x - 1, y)) ||
      (x < maze[y].length - 1 && canExitFrom(maze, x + 1, y)) ||
      (y > 0 && canExitFrom(maze, x, y - 1)) ||
      (y < maze.length - 1 && canExitFrom(maze, x, y + 1))
    );
  }

  const [startX, startY] = findStart(maze);
  return canExitFrom(maze, startX, startY);
}

export { canExit };
