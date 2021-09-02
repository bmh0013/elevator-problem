# elevator-problem

The following diagram (​given as a multi-line string​) is an elevator state – the state of an elevator system at a given point in time. Dots represent an elevator shaft. Letters (specifically A-Z) represent an elevator – for example, elevator A is on the 1st floor (1-indexed), and the following elevator state has 6 floors:
  xx.x.x.xDxx<br/>
  xx.x.x.x.xx<br/>
  xx.x.x.x.xx<br/>
  xx.xBx.x.xx<br/>
  xx.x.xCx.xx<br/>
  xxAx.x.x.xx<br/>
  
Goal: Take as input a series of elevator states from an array, representing successive states of the elevator system from time ​t​​ = {1,2,3...}. Valid elevators are specified by the characters A-Z. Write a function that takes an array of elevator states, the starting elevator, and the final destination (floor) desired by the user.

Sample Input​:
elevatorStates = [<br/>
  // State @ t=1<br/>
  `xx.x.x.xDxx
   xx.x.x.x.xx
   xx.x.x.x.xx
   xx.xBx.x.xx
   xx.x.xCx.xxv
   xxAx.x.x.xx`,<br/>
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
]
startingElevator = "A"
finalDestination = "5-5"
Sample Output​: "AABDD"

## Setup
To run this file, download it locally using git:
```
git clone https://github.com/bmh0013/elevator-problem.git
```

This file comes with Jest tests that can be ran using these commands after navigating into the project folder via terminal:
```
npm install
npm test
```

Copy elevator-problem.js to your project folder and import the findElevatorPath function into your file.
