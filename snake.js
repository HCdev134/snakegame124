import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 3;

const snakeBody = [{ x: 11, y: 11 }];

let newSegments = 0;

export function update() {
    addSegments()
    console.log("SNAKE CALLED:UPDATE");


    const inputDirection = getInputDirection();

    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    // snake movements (important)
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;

    // mobile movements 
    
}


export function draw(gameBoard) {

    // console.log("Draw from snake called");

    snakeBody.forEach(segment => {
        const snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add("snake");
        gameBoard.appendChild(snakeElement);
    });
    // snakeBody[0].style.color = "#000";
}

export function expandSnake(amount) {
    newSegments += amount;
}

// Will Return a True or False value based upon this condition
export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })

}

export function getSnakeHead() {
    return snakeBody[0]
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true })
}





function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }

    newSegments = 0;
}