import { distributeGifts } from "../3";

test.each([
  [["book", "doll", "ball"], ["dasher", "dancer"], 2],
  [["a", "b", "c"], ["d", "e"], 1],
  [["videogames", "console"], ["midu"], 0],
  [
    ["game", "videoconsole", "computer"],
    [
      "midudev",
      "pheralb",
      "codingwithdani",
      "carlosble",
      "blasco",
      "facundocapua",
      "madeval",
      "memxd",
    ],
    5,
  ],
  [
    ["music"],
    [
      "midudev",
      "pheralb",
      "codingwithdani",
      "carlosble",
      "blasco",
      "facundocapua",
      "madeval",
      "memxd",
    ],
    26,
  ],
])(
  "Challenge #3 distributeGifts(%p, %p) === %p",
  (packOfGifts, reindeers, solution) => {
    expect(distributeGifts(packOfGifts, reindeers)).toEqual(solution);
  }
);
