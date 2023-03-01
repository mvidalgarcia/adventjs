function countTime(leds: number[]): number {
  let times = 0;

  while (leds.some((el) => el === 0)) {
    const copyLeds = [...leds];
    for (let index = 0; index < leds.length; index++) {
      if (copyLeds[index] === 0) {
        leds[index] = copyLeds.at(index - 1) as number;
      }
    }
    times++;
  }
  return times * 7;
}

export { countTime };
