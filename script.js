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
    // create divs
    for (i = 0, gridSize = gridWidth * gridWidth; i < gridSize; i++) {
        let div = document.createElement("div");
        // set basis of divs to have an even number per row
        divBasis = 100 / gridWidth;
        div.style.flexBasis = `${divBasis}%`;
        div.setAttribute("class", "coloredSquares");
        playArea.appendChild(div);
    }
    // add color changing to these new divs
    const coloredSquares = document.querySelectorAll(".coloredSquares");

    function changeColor(event) {
        let randomRed = Math.floor(Math.random() * 255);
        console.log(randomRed);
        let randomGreen = Math.floor(Math.random() * 255);
        console.log(randomGreen);
        let randomBlue = Math.floor(Math.random() * 255);
        console.log(randomBlue);
        event.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    };

    coloredSquares.forEach(element => {
        element.addEventListener("mouseenter", changeColor);
    });

    function fadeOut(event) {

    };

    coloredSquares.forEach(element => {
        element.addEventListener("mouseleave", fadeOut);
    });
    
};

inputForm.addEventListener("submit", makeGrid);


