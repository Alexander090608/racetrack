//creating the ground
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let cols = 20;
let rows = 20;
let cellSize = 25;
canvas.width = cols * cellSize;
canvas.height = rows * cellSize;

function drawGround() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

drawGround();