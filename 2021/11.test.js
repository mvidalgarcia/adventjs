const TICKET_PRICE = 12;
const FIDELITY_PRICE = 250;
const FIDELITY_DISCOUNT = 0.75;

function shouldBuyFidelity(times) {
  const exponents = Array.from({ length: times }, (_, i) => i + 1);
  const fidelityPrice = exponents.reduce(
    (prev, curr) => prev + TICKET_PRICE * FIDELITY_DISCOUNT ** curr,
    FIDELITY_PRICE
  );
  const normalPrice = TICKET_PRICE * times;
  return fidelityPrice < normalPrice;
}

test.each([
  [1, false],
  [100, true],
])("Challenge #11 shouldBuyFidelity(%p) === %p", (times, solution) => {
  expect(shouldBuyFidelity(times)).toBe(solution);
});
