function contains(store, product) {
  for (const v of Object.values(store)) {
    if (v === product) return true;
    if (v instanceof Object) {
      const found = contains(v, product);
      if (found) return found;
    }
  }
  return false;
}

test.each([
  [
    {
      estanteria1: {
        cajon1: {
          producto1: "coca-cola",
          producto2: "fanta",
          producto3: "sprite",
        },
      },
      estanteria2: {
        cajon1: "vacio",
        cajon2: {
          producto1: "pantalones",
          producto2: "camiseta",
        },
      },
    },
    "camiseta",
    true,
  ],
  [
    {
      baul: {
        fondo: {
          objeto: "cd-rom",
          "otro-objeto": "disquette",
          "otra-cosa": "mando",
        },
      },
    },
    "gameboy",
    false,
  ],
])("Challenge #7 contains(%p, %p) is %p", (store, product, solution) => {
  expect(contains(store, product)).toBe(solution);
});
