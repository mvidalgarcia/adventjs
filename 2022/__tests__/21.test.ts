import { printTable } from "../21";

test.each([
  [
    [
      { name: "Game", quantity: 2 },
      { name: "Bike", quantity: 1 },
      { name: "Book", quantity: 3 },
    ],
    `+++++++++++++++++++
| Gift | Quantity |
| ---- | -------- |
| Game | 2        |
| Bike | 1        |
| Book | 3        |
*******************`,
  ],
])("Challenge #21 printTable(%p) === %p", (gifts, solution) => {
  expect(printTable(gifts)).toEqual(solution);
});
