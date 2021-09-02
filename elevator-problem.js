function findElevatorPath(elevatorStates, startingElevator, finalDestination) {
  elevatorStates = formatStates(elevatorStates);
  const result = findPath(elevatorStates, startingElevator, finalDestination);

  return !!result ? result : "NO SUCCESSFUL ROUTE";
}

// removes white spaces and returns a string array of each elevator state at a given time
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
    // multiple base cases for optimizing efficiency once we have found a working path
    if (elevatorPath) return;
    if (numberOfFloors - +floor + "-" + (time + 1) === finalDestination) {
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

    possiblePath.forEach((elevator) => {
      recurse(elevatorStates, elevator, time, floor, path + elevator);
    });
  };

  recurse(elevatorStates, startingElevator, 0, startingFloor, startingElevator);

  return elevatorPath;
}

// Finds what floor index we are on given the current elevator letter
function findFloor(elevatorState, startingElevator) {
  for (let i = 0; i < elevatorState.length; i++) {
    if (elevatorState[i].includes(startingElevator)) {
      return i;
    }
  }
}

module.exports = { findElevatorPath };
