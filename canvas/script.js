// const canvas = document.querySelector('canvas');
// const context = canvas.getContext('2d');

// function circle(x, y) {
//   context.fillStyle = 'black';
//   context.beginPath();
//   context.arc(x, y, 50, 0, 2 * Math.PI)
//   context.fill();
// }

// canvas.onmousemove = function (event) {
  
//   circle(event.clientX, event.clientY)
// }

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

function circle(x, y) {
  context.fillStyle = 'black';
  context.beginPath();
  context.arc(x, y, 50, 0, 2 * Math.PI)
  context.fill();
}

canvas.onmousemove = function (event) {
  context.fillStyle = 'white';
  context.fillRect(0,0,canvas.width,canvas.height)
  circle(event.clientX, event.clientY)
}