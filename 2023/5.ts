function cyberReindeer(road: string, time: number): string[] {
  const result: string[] = [road];
  let myRoad = road;

  for (let t = 1; t < time; t++) {
    let i = myRoad.indexOf("S");

    if (myRoad[i + 1] !== "|") {
      const state = myRoad.split("");
      state[i] = i === 0 ? "." : road[i];
      i++;
      state[i] = "S";
      myRoad = state.join("");
    }

    result.push(myRoad);

    if (t >= 4) {
      myRoad = myRoad.replace(/\|/g, "*");
      road = road.replace(/\|/g, "*");
    }
  }

  return result;
}

export { cyberReindeer };
