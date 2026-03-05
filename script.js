let rect = document.querySelector('rect');
let rectX = parseInt(rect.getAttribute('x'));
let rectY = parseInt(rect.getAttribute('y'));
let rectWidth = parseInt(rect.getAttribute('width'));
let rectHeight = parseInt(rect.getAttribute('height'));
let dist = 10;

document.addEventListener('keydown', function(event) {
    if(event.key === 'ArrowUp') {
        if(rectY - dist < 0) {
            rectY = 0;
        } else {
            rectY -= dist;
        }
        rect.setAttribute('y', rectY);
    } else if(event.key === 'ArrowDown') {
        if(rectY + rectHeight + dist > 100){
            rectY = 100 - rectHeight;
        }
    } else if(event.key === 'ArrowLeft') {
        rectX -= dist;
        rect.setAttribute('x', rectX);
    } else if(event.key === 'ArrowRight') {
        rectX += dist;
        rect.setAttribute('x', rectX);
    }

    event.preventDefault();
});