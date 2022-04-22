// get grid size from input form
const inputForm = document.querySelector("#inputForm");
const sizeInput = document.querySelector("#sizeInput");
const playArea = document.querySelector("#playArea");

function makeGrid(event) {
    // stop form from refreshing the page
    event.preventDefault();
    // clear previous play area
    while (playArea.firstChild) {
        playArea.removeChild(playArea.firstChild);
    }
    // get grid size from form
    const gridWidth = sizeInput.value;
    const gridSize = gridWidth * gridWidth;
    // create divs
    for (i = 0; i < gridSize; i++) {
        let div = document.createElement("div");
        // set basis of divs to have an even number per row
        divBasis = 100 / gridWidth;
        div.style.flexBasis = `${divBasis}%`;
        playArea.appendChild(div);
    }
};

inputForm.addEventListener("submit", makeGrid);