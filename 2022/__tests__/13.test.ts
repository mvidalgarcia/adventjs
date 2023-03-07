import { getFilesToBackup } from "../13";

test.each([
  [
    1546300800,
    [
      [3, 1546301100] as [number, number],
      [2, 1546300800] as [number, number],
      [1, 1546300800] as [number, number],
      [1, 1546300900] as [number, number],
      [1, 1546301000] as [number, number],
    ],
    [1, 3],
  ],
])(
  "Challenge #13 getFilesToBackup(%p,%p) === %p",
  (lastBackup, changes, solution) => {
    expect(getFilesToBackup(lastBackup, changes)).toEqual(solution);
  }
);
