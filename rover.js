
var maxWidth = 10;
var maxHeigth = 10;
var minWidth = 0;
var minHeigth = 0;


var myRover = {
  position: [0,0], // x, y
  direction: 'N'
};

function moveForward(rover) {
  rover.position[1]--;
  rover.direction = 'N';
}

function moveBackward(rover) {
  rover.position[1]++;
  rover.direction = 'S';
}

function moveRight(rover) {
  rover.position[0]++;
  rover.direction = 'E';
}

function moveLeft(rover) {
  rover.position[0]--;
  rover.direction = 'W';
}

function move(direction, rover) {
  switch(direction) {
    case 'f':
      if (rover.position[1] > minHeigth) {
        moveForward(rover);
      }
      break;
    case 'r':
      if (rover.position[0] < maxWidth) {
        moveRight(rover)
      }
      break;
    case 'b':
      if (rover.position[1] < maxHeigth) {
        moveBackward(rover)
      }
      break;
    case 'l':
      if (rover.position[0] > minWidth) {
        moveLeft(rover)
      }
      break;
  }
}

var secuence = "rrbbblfrrbbfl";

console.log("Rover Position: [" + myRover.position[0] + ", " + myRover.position[1] + "] - Direction: " + myRover.direction);

for(var i = 0; i < secuence.length; i++) {
  move(secuence[i], myRover);
  console.log("Rover Position: [" + myRover.position[0] + ", " + myRover.position[1] + "] - Direction: " + myRover.direction);
}
