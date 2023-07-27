type Gift = {
  name: string;
  quantity: number;
};

function printTable(gifts: Gift[]): string {
  const giftHeader = "Gift";
  const quantityHeader = "Quantity";
  const giftWidth = Math.max(
    ...gifts.map((gift) => gift.name.length),
    giftHeader.length
  );
  const quantityWidth = Math.max(
    ...gifts.map((gift) => gift.quantity.toString().length),
    quantityHeader.length
  );
  const ceiling = `+${"+".repeat(giftWidth + 2)}+${"+".repeat(
    quantityWidth + 2
  )}+`;
  const header = `| ${"Gift".padEnd(giftWidth)} | ${"Quantity".padEnd(
    quantityWidth
  )} |`;
  const divider = `| ${"-".repeat(giftWidth)} | ${"-".repeat(quantityWidth)} |`;
  const rows = gifts.map(
    (gift) =>
      `| ${gift.name.padEnd(giftWidth)} | ${gift.quantity
        .toString()
        .padEnd(quantityWidth)} |`
  );
  const footer = `*${"*".repeat(giftWidth + 2)}*${"*".repeat(
    quantityWidth + 2
  )}*`;

  return [ceiling, header, divider, ...rows, footer].join("\n");
}

export { printTable };
