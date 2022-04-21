// get grid size from input form
const sizeInput = document.querySelector("#sizeInput");
let gridSize;

console.log(sizeInput);

function makeGrid(event) {
    event.preventDefault();
    console.log(event);
};

sizeInput.addEventListener("submit", makeGrid);