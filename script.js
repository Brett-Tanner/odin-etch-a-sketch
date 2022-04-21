// get grid size from input form
const sizeInput = document.querySelector("#sizeInput");
let gridSize;

console.log(sizeInput.elements);

function makeGrid(event) {
    console.log(event);
};

sizeInput.elements.size.addEventListener("submit", makeGrid);