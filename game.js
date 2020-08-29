// import {update as updateSnake, draw as drawSnake, SNAKE_SPEED} from "./snake.js";
// import {update as updateFood, draw as drawFood } from "./food.js";
import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './gridpos.js'

let lastRenderTime = 0;
const gameBoard = document.getElementById("snakegame"); 
let gameOver = false; 
let gameOverEdge = false; 

function main(currentTime) {
    if (gameOver) {
        if (confirm('You lost. Press ok to restart.')) {
          window.location = '/'
        }
        return
      }
      if (gameOverEdge) {
        if (confirm('You lost. Press ok to restart.')) {
          window.location = '/'
        }
        return
      }
    window.requestAnimationFrame(main);
   
    // console.log("test", currentTime); 
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return 

    // console.log("TEST: render");
    // calls main function

    lastRenderTime = currentTime;

    // console.log(secondsSinceLastRender);

    update()
    draw()
}

window.requestAnimationFrame(main);


// semantics of updateSnake() and drawSnake() are in the import statement 

// Game Loop Pattern: Main Functions
function update(){
    updateSnake()
    updateFood()
    checkLossCondition()

}
function draw(){
    gameBoard.innerHTML = ''; 
    drawSnake(gameBoard);
    drawFood(gameBoard)
}


function checkLoss(){
    let boardPosition = document.getElementById("snakegame"); 
    let snakeBlocks = document.querySelector("#snakegame > div.snake"); 


}
function checkLossCondition() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
  
}
