const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let size = 30;
let x = 30;
let y = 30;
let isPress = false;

canvas.addEventListener("mousedown", (e) => {
  isPress = true;
});
canvas.addEventListener("mouseup", (e) => {
  isPress = false;
});

canvas.addEventListener("mousemove", (event) => {
  if (isPress) {
    const x = event.offsetX;
    const y = event.offsetY;
    drawCircle(x, y);
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = "black";
  ctx.fill();
}

drawCircle(30, 30);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCircle(x++, y);
  requestAnimationFrame(draw);
}
