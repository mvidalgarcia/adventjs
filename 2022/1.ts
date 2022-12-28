export function wrapping(gifts: string[]) {
  return gifts.map((gift) => {
    const wrappingLength = gift.length + 2;
    const wrapper = "*".repeat(wrappingLength);
    return `${wrapper}\n*${gift}*\n${wrapper}`;
  });
}
