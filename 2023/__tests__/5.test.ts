import { cyberReindeer } from "../5";

test.each([
  [
    "S..|...|..",
    10,
    [
      "S..|...|..", // estado inicial
      ".S.|...|..", // avanza el trineo la carretera
      "..S|...|..", // avanza el trineo la carretera
      "..S|...|..", // el trineo para en la barrera
      "..S|...|..", // el trineo para en la barrera
      "...S...*..", // se abre la barrera, el trineo avanza
      "...*S..*..", // avanza el trineo la carretera
      "...*.S.*..", // avanza el trineo la carretera
      "...*..S*..", // avanza el trineo la carretera
      "...*...S..", // avanza por la barrera abierta
    ],
  ],
])("Challenge #5 cyberReindeer(%p, %p) === %p", (road, time, solution) => {
  expect(cyberReindeer(road, time)).toEqual(solution);
});
