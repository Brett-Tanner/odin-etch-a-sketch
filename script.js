// get grid size from input form
// select elements
const inputForm = document.querySelector("#inputForm");
const sizeInput = document.querySelector("#sizeInput");
const playArea = document.querySelector("#playArea");

function makeGrid(event) {
    event.preventDefault();
    let gridSize = sizeInput.value;
    divBasis = 100 / Math.sqrt(gridSize);
    for (i = 0; i < gridSize; i++) {
        let div = document.createElement("div");
        div.style.flexBasis = `${divBasis}%`;
        playArea.appendChild(div);
    }
};

inputForm.addEventListener("submit", makeGrid);