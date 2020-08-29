import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./gridpos.js";

let food = randomGridPosition()
const EXPANSION_RATE = 3;


// want to export other positions of food, moving food positions 


export function update() {
    // console.log("FOOD CALLED:UPDATE");

    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE);
        food = randomGridPosition()
    }

}
export function draw(gameBoard) {
    // console.log("TESTING: FOOD CALLED DRAW");

    // movingFood.forEach(foodpiece => {
    // wrap this logic in forEach() to move the food 
    // });
    const foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add("food");
    gameBoard.appendChild(foodElement);

}

function getRandomFoodPosition() {
    let newFoodPosition;
    console.log("FOOD: Position updated");
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return randomGridPosition()
}
