//creating the ground
let canvas;
let ctx;
let cols = 20;
let rows = 20;
let cellSize = 25;

//snake
let snakeBody = [];
let snakeX = cellSize * 2;
let snakeY = cellSize * 2;
let velocityX = 0;
let velocityY = 0;

//apple
let appleX = cellSize * 4;
let appleY = cellSize * 4;

//game over
let gameOver = false;
let messageElement = document.querySelector(".message");
let restartButton = document.querySelector(".restart");

window.onload = function() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    canvas.width = cols * cellSize;
    canvas.height = rows * cellSize;

    placeApple();
    document.addEventListener("keydown", moveSnake);
    setInterval(update, 100);
}

function update(){
    if (gameOver){
        messageElement.textContent = "Game Over!";
        messageElement.style.display = "block";
        restartButton.style.display = "block";
        return;
    }

    ctx.fillStyle = "black";
    ctx.fillRect(0 , 0 , canvas.width, canvas.height);

    ctx.fillStyle = "red";
    ctx.fillRect(appleX , appleY , cellSize, cellSize);

    if(snakeX === appleX && snakeY === appleY){
        snakeBody.push([snakeX, snakeY]);
        placeApple();
    }

    for(let i = snakeBody.length - 1; i > 0; i--){ //pervious block goes first, followed by the next block
        snakeBody[i] = snakeBody[i - 1];
    }
    if(snakeBody.length > 0){ //establishes the first block of the snake body
        snakeBody[0] = [snakeX, snakeY];
    }

    ctx.fillStyle = "green";
    snakeX += velocityX;
    snakeY += velocityY;
    ctx.fillRect(snakeX , snakeY , cellSize, cellSize);

    for(let i = 0; i < snakeBody.length; i++){ //draws the snake body
        ctx.fillRect(snakeBody[i][0] , snakeBody[i][1] , cellSize, cellSize); 
    }

    //check for collision with walls
    if(snakeX < 0 || snakeX >= canvas.width || snakeY < 0 || snakeY >= canvas.height){
        gameOver = true;
    }

    //check for collision with self
    for(let i = 0; i < snakeBody.length; i++){
        if(snakeX === snakeBody[i][0] && snakeY === snakeBody[i][1]){
            gameOver = true;
        }
    }
}

function placeApple(){
    appleX = Math.floor(Math.random() * cols) * cellSize;
    appleY = Math.floor(Math.random() * rows) * cellSize;
}

function moveSnake(event){
    if(event.key === "ArrowUp" && velocityY === 0){
        velocityX = 0;
        velocityY = -cellSize;
    }
    else if(event.key === "ArrowDown" && velocityY === 0){
        velocityX = 0;
        velocityY = cellSize;
    }
    else if(event.key === "ArrowLeft" && velocityX === 0){
        velocityX = -cellSize;
        velocityY = 0;
    }
    else if(event.key === "ArrowRight" && velocityX === 0){
        velocityX = cellSize;
        velocityY = 0;
    }
}

