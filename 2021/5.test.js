function daysToXmas(date) {
  const xmasDate = new Date("Dec 25, 2021");
  const secondsDiff = (xmasDate - date) / 1000;
  const secondsPerDay = 24 * 60 * 60;
  const daysDiff = Math.ceil(secondsDiff / secondsPerDay);
  return daysDiff;
}

test.each([
  [new Date("Dec 1, 2021"), 24],
  [new Date("Dec 24, 2021 00:00:01"), 1],
  [new Date("Dec 24, 2021 23:59:59"), 1],
  [new Date("December 20, 2021 03:24:00"), 5],
  [new Date("Dec 25, 2021"), 0],
  [new Date("Dec 26, 2021"), -1],
  [new Date("Dec 31, 2021"), -6],
  [new Date("Jan 1, 2022 00:00:01"), -7],
  [new Date("Jan 1, 2022 23:59:59"), -7],
])("Challenge #5 daysToXmas(%p, %i)", (date, days) => {
  expect(daysToXmas(date)).toBe(days);
});
