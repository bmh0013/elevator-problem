const elevatorStates = [
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

const startingElevator = "A";
const finalDestination = "5-5";

function findElevatorPath(elevatorStates, startingElevator, finalDestination) {
  elevatorStates = formatStates(elevatorStates);
  return findPath(elevatorStates, startingElevator, finalDestination);
}

// removes white spaces and returns a string array of each elevator state
function formatStates(elevatorStates) {
  const formattedStates = [];

  for (const state of elevatorStates) {
    let string = "";
    for (const letter of state) {
      if (letter === " ") continue;
      string += letter;
    }
    formattedStates.push(string.split("\n"));
  }

  return formattedStates;
}

function findPath(elevatorStates, startingElevator, finalDestination) {
  let startingFloor = findFloor(elevatorStates[0], startingElevator);
  let numberOfFloors = elevatorStates[0].length;
  let targetedTime = finalDestination.split("-")[1];
  let elevatorPath;

  const recurse = (elevatorStates, currElevator, time, floor, path) => {
    if ( (numberOfFloors - +floor) + "-" + (time + 1) === finalDestination) {
      elevatorPath = path;
      return;
    }
    if (time === targetedTime - 1) return;

    time += 1;
    let currState = elevatorStates[time];
    floor = findFloor(currState, currElevator);

    const possiblePath = [];
    for (let i = 0; i < currState[floor].length; i++) {
      if (currState[floor][i] !== "x" && currState[floor][i] !== ".") {
        possiblePath.push(currState[floor][i]);
      }
    }

    possiblePath.forEach((letter) => {
      recurse(elevatorStates, letter, time, floor, path + letter);
    });
  };

  recurse(elevatorStates, startingElevator, 0, startingFloor, startingElevator);

  return elevatorPath;
}

function findFloor(elevatorState, startingElevator) {
  for (let i = 0; i < elevatorState.length; i++) {
    if (elevatorState[i].includes(startingElevator)) {
      return i;
    }
  }
}

console.log ( findElevatorPath(elevatorStates, startingElevator, finalDestination) ); // "AABDD"
