function countPackages(carriers, carrierID) {
  const [_, packages, subordinates] = carriers.find(([id]) => id === carrierID);
  return subordinates.reduce(
    (total, subordinate) => total + countPackages(carriers, subordinate),
    packages
  );
}

test.each([
  [
    [
      ["dapelu", 5, ["midu", "jelowing"]],
      ["midu", 2, []],
      ["jelowing", 2, []],
    ],
    "dapelu",
    9,
  ],
  [
    [
      ["lolivier", 8, ["camila", "jesuspoleo"]],
      ["camila", 5, ["sergiomartinez", "conchaasensio"]],
      ["jesuspoleo", 4, []],
      ["sergiomartinez", 4, []],
      ["conchaasensio", 3, ["facundocapua", "faviola"]],
      ["facundocapua", 2, []],
      ["faviola", 1, []],
    ],
    "camila",
    15,
  ],
])(
  "Challenge #17 countPackages(%p, %p) === %p",
  (carriers, carrierID, solution) => {
    expect(countPackages(carriers, carrierID)).toEqual(solution);
  }
);
