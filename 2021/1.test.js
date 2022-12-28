function contarOvejas(ovejas) {
  return ovejas.filter(
    (oveja) =>
      oveja.color === "rojo" &&
      oveja.name.toLowerCase().includes("n") &&
      oveja.name.toLowerCase().includes("a")
  );
}

test("Challenge #1", () => {
  const ovejas = [
    { name: "Noa", color: "azul" },
    { name: "Euge", color: "rojo" },
    { name: "Navidad", color: "rojo" },
    { name: "Ki Na Ma", color: "rojo" },
    { name: "AAAAAaaaaa", color: "rojo" },
    { name: "Nnnnnnnn", color: "rojo" },
  ];
  const result = [
    { name: "Navidad", color: "rojo" },
    { name: "Ki Na Ma", color: "rojo" },
  ];
  expect(contarOvejas(ovejas)).toEqual(result);
});
