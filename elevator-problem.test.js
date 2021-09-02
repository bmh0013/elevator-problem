const { findElevatorPath } = require("./elevator-problem.js");

let A1 = [
  // State @ t=1
  `xx.x.x.xDxx
   xx.x.x.x.xx
   xx.x.x.x.xx
   xx.xBx.x.xx
   xx.x.xCx.xx
   xxAx.x.x.xx`,
  // State @ t=2
  `xx.x.x.x.xx
   xx.x.x.x.xx
   xxAx.x.x.xx
   xx.xBx.x.xx
   xx.x.xCx.xx
   xx.x.x.xDxx`,
  // State @ t=3
  `xx.x.xCx.xx
   xx.x.x.x.xx
   xx.x.x.x.xx
   xxAxBx.x.xx
   xx.x.x.x.xx
   xx.x.x.xDxx`,
  // State @ t=4
  `xx.x.xCx.xx
   xx.x.x.x.xx
   xx.xBx.xDxx
   xx.x.x.x.xx
   xxAx.x.x.xx
   xx.x.x.x.xx`,
  // State @ t=5
  `xx.x.xCx.xx
   xx.x.x.xDxx
   xx.x.x.x.xx
   xx.x.x.x.xx
   xxAxBx.x.xx
   xx.x.x.x.xx`,
];
let B1 = "A";
let C1 = "5-5";

test("Path for example 1", () => {
  expect(findElevatorPath(A1, B1, C1)).toBe("AABDD");
});

let A2 = [
  // State @ t=1
  `xx.x.x.xDxx
   xx.x.x.x.xx
   xx.x.x.x.xx
   xx.xBx.x.xx
   xx.x.xCx.xx
   xxAx.x.x.xx`,
  // State @ t=2
  `xx.x.x.x.xx
   xx.x.x.x.xx
   xxAx.x.x.xx
   xx.xBx.x.xx
   xx.x.xCx.xx
   xx.x.x.xDxx`,
  // State @ t=3
  `xx.x.xCx.xx
   xx.x.x.x.xx
   xx.x.x.x.xx
   xxAxBx.x.xx
   xx.x.x.x.xx
   xx.x.x.xDxx`,
  // State @ t=4
  `xx.x.xCx.xx
   xx.x.x.x.xx
   xx.xBx.xDxx
   xx.x.x.x.xx
   xxAx.x.x.xx
   xx.x.x.x.xx`,
  // State @ t=5
  `xx.x.xCx.xx
   xx.x.x.xDxx
   xx.x.x.x.xx
   xxAx.x.x.xx
   xx.xBx.x.xx
   xx.x.x.x.xx`,
];
let B2 = "D";
let C2 = "2-5";

test("Path for example 2", () => {
  expect(findElevatorPath(A2, B2, C2)).toBe("DDDBB");
});

let A3 = [
  // State @ t=1
  `xx.x.x.xDxx
   xx.x.x.x.xx
   xx.x.x.x.xx
   xx.xBx.x.xx
   xx.x.xCx.xx
   xxAx.x.x.xx`,
  // State @ t=2
  `xx.x.x.x.xx
   xx.x.x.x.xx
   xxAx.x.x.xx
   xx.xBx.x.xx
   xx.x.xCx.xx
   xx.x.x.xDxx`,
  // State @ t=3
  `xx.x.xCx.xx
   xx.x.x.x.xx
   xx.x.x.x.xx
   xxAxBx.x.xx
   xx.x.x.x.xx
   xx.x.x.xDxx`,
  // State @ t=4
  `xx.x.xCx.xx
   xx.x.x.x.xx
   xx.xBx.xDxx
   xx.x.x.x.xx
   xxAx.x.x.xx
   xx.x.x.x.xx`,
  // State @ t=5
  `xx.x.xCx.xx
   xx.x.x.xDxx
   xx.x.x.x.xx
   xx.x.x.x.xx
   xxAxBx.x.xx
   xx.x.x.x.xx`,
];
let B3 = "C";
let C3 = "4-2";

test("Path for example 3", () => {
  expect(findElevatorPath(A3, B3, C3)).toBe("NO SUCCESSFUL ROUTE");
});

let A4 = [
  "xx.x.x.xDxx\nxx.x.x.x.xx\nxx.x.x.x.xx\nxx.xBx.x.xx\nxx.x.xCx.xx\nxxAx.x.x.xx",
  "xx.x.x.x.xx\nxx.x.x.x.xx\nxxAx.x.x.xx\nxx.xBx.x.xx\nxx.x.xCx.xx\nxx.x.x.xDxx",
  "xx.x.xCx.xx\nxx.x.x.x.xx\nxx.x.x.x.xx\nxxAxBx.x.xx\nxx.x.x.x.xx\nxx.x.x.xDxx",
  "xx.x.xCx.xx\nxx.x.x.x.xx\nxx.xBx.xDxx\nxx.x.x.x.xx\nxxAx.x.x.xx\nxx.x.x.x.xx",
  "xx.x.xCx.xx\nxx.x.x.xDxx\nxx.x.x.x.xx\nxx.x.x.x.xx\nxxAxBx.x.xx\nxx.x.x.x.xx",
];
let B4 = "C";
let C4 = "4-5";

test("Path for example 4", () => {
  expect(findElevatorPath(A4, B4, C4)).toBe("NO SUCCESSFUL ROUTE");
});

let A5 = [
  // State @ t=1
  `xx.x.x.x.xx
   xx.x.x.x.xx
   xx.x.x.x.xx
   xx.x.x.x.xx
   xx.x.x.x.xx
   xxAxBxCxDxx`,
  // State @ t=2
  `xx.x.x.x.xx
   xx.x.x.x.xx
   xxAx.x.x.xx
   xx.xBx.x.xx
   xx.x.xCx.xx
   xx.x.x.xDxx`,
  // State @ t=3
  `xx.x.x.x.xx
   xx.x.x.x.xx
   xxAxBxCx.xx
   xx.x.x.x.xx
   xx.x.x.x.xx
   xx.x.x.xDxx`,
  // State @ t=4
  `xx.x.xCx.xx
   xx.x.x.x.xx
   xx.xBx.x.xx
   xx.x.x.x.xx
   xxAx.x.x.xx
   xx.x.x.xDxx`,
  // State @ t=5
  `xxAx.xCx.xx
   xx.x.x.x.xx
   xx.x.x.x.xx
   xx.x.x.x.xx
   xx.xBx.x.xx
   xx.x.x.xDxx`,
];
let B5 = "D";
let C5 = "1-5";

test("Path for example 5", () => {
  expect(findElevatorPath(A5, B5, C5)).toBe("DDDDD");
});

let A6 = [
  // State @ t=1
  `xx.x.x.x.xx
   xx.x.x.x.xx
   xx.x.x.x.xx
   xx.x.x.x.xx
   xx.x.x.x.xx
   xxAxBxCxDxx`,
  // State @ t=2
  `xx.x.x.x.xx
   xx.x.x.x.xx
   xxAx.x.x.xx
   xx.xBx.x.xx
   xx.x.xCx.xx
   xx.x.x.xDxx`,
  // State @ t=3
  `xx.x.x.x.xx
   xx.x.x.x.xx
   xxAxBxCx.xx
   xx.x.x.x.xx
   xx.x.x.x.xx
   xx.x.x.xDxx`,
  // State @ t=4
  `xx.x.xCx.xx
   xx.x.x.x.xx
   xx.xBx.x.xx
   xx.x.x.x.xx
   xxAx.x.x.xx
   xx.x.x.xDxx`,
  // State @ t=5
  `xxAx.xCx.xx
   xx.x.x.x.xx
   xx.x.x.x.xx
   xx.x.x.x.xx
   xx.xBx.x.xx
   xx.x.x.xDxx`,
];
let B6 = "A";
let C6 = "6-5";

test("Path for example 6", () => {
  expect(findElevatorPath(A6, B6, C6)).toBe("AAAAA");
});