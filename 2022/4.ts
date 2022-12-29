type Box = {
  l: number;
  w: number;
  h: number;
};

export function fitsInOneBoxV1(boxes: Box[]): boolean {
  const sortedBoxes = boxes.sort((a, b) => a.l - b.l);
  for (let index = 0; index < sortedBoxes.length - 1; index++) {
    const box = sortedBoxes[index];
    const nextBox = sortedBoxes[index + 1];
    if (box.l >= nextBox.l || box.w >= nextBox.w || box.h >= nextBox.h) {
      return false;
    }
  }
  return true;
}

export function fitsInOneBox(boxes: Box[]): boolean {
  const sortedBoxes = boxes.sort((a, b) => a.l - b.l);
  return sortedBoxes.every((box, i) => {
    if (i === 0) return true;
    const prev = sortedBoxes[i - 1];
    return prev.l < box.l && prev.w < box.w && prev.h < box.h;
  });
}
