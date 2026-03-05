// let player = document.querySelector('.player');
// let playerX = parseInt(player.getAttribute('x'));
// let playerY = parseInt(player.getAttribute('y'));
// let playerWidth = parseInt(player.getAttribute('width'));
// let playerHeight = parseInt(player.getAttribute('height'));
// let dist = 5;

// document.addEventListener('keydown', function(event) {
//     if(event.key === 'ArrowUp') {
//         if(playerY - dist < 0) {
//             playerY = 0;
//         } else {
//             playerY -= dist;
//         }
//         player.setAttribute('y', playerY);
//     } else if(event.key === 'ArrowDown') {
//         if(playerY + playerHeight + dist > 100){
//             playerY = 100 - playerHeight;
//         } else {
//             playerY += dist;
//         }
//         player.setAttribute('y', playerY);
//     } else if(event.key === 'ArrowLeft') {
//         if(playerX - dist < 75) {
//             playerX = 75;
//         } else {
//             playerX -= dist;
//         }
//         player.setAttribute('x', playerX);
//     } else if(event.key === 'ArrowRight') {
//         if(playerX + playerWidth + dist > 175) {
//             playerX = 175 - playerWidth;
//         } else {
//             playerX += dist;
//         }
//         player.setAttribute('x', playerX);
//     }

//     event.preventDefault();
// });

let player;
let playerBlock = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
playerBlock.setAttribute('class', 'player');
playerBlock.setAttribute('x', 80);
playerBlock.setAttribute('y', 5);
playerBlock.setAttribute('width', 5);
playerBlock.setAttribute('height ', 5);
playerBlock.setAttribute('fill', 'blue');

document.addEventListener('keydown', function(event) {
    let playerX = parseInt(playerBlock.getAttribute('x'));
    let playerY = parseInt(playerBlock.getAttribute('y'));
    let playerWidth = parseInt(playerBlock.getAttribute('width'));
    let playerHeight = parseInt(playerBlock.getAttribute('height'));
    let dist = 5;

    if(event.key === 'ArrowUp') {
        setTimeout(function(){
            if(playerY - dist < 0) {
                playerY = 0;
            } else {
                playerY -= dist;
            }
            playerBlock.setAttribute('y', playerY);
        },500);
    }
    if(event.key === 'ArrowDown') {
        setTimeout(function(){
            if(playerY + playerHeight + dist > 100){
                playerY = 100 - playerHeight;
            } else {
                playerY += dist;
            }
            playerBlock.setAttribute('y', playerY);
        },500);
    }
})
document.querySelector('svg').appendChild(playerBlock);

function makeGround() { //for svg we use NS to create elements
    const svgNS = 'http://www.w3.org/2000/svg';
    let svg = document.querySelector('svg');

    for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
            let block = document.createElementNS(svgNS, 'rect');
            block.setAttribute('id', `block`);
            block.setAttribute('x', 75 + (i * 5));
            block.setAttribute('y', j * 5);
            block.setAttribute('width', 5);
            block.setAttribute('height', 5);
            // alternate color like a chessboard
            if((i+j) % 2 === 0){
                color = 'lightgray';
            }
            else {
                color = 'gray';
            }
            block.setAttribute('fill', color);
            svg.appendChild(block);
        }
    }
}

makeGround();

// move player to front so it renders above the ground
const svgRoot = document.querySelector('svg');
const playerElem = document.querySelector('.player');
if (svgRoot && playerElem) {
    svgRoot.appendChild(playerElem);
}