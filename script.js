// select necessary elements
const inputForm = document.querySelector("#inputForm");
const sizeInput = document.querySelector("#sizeInput");
const playArea = document.querySelector("#playArea");
const clearForm = document.querySelector("#clearForm");
let coloredSquares = []; 

// make the grid when size is submitted
inputForm.addEventListener("submit", makeGrid);

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
    coloredSquares = document.querySelectorAll(".coloredSquares");
    coloredSquares.forEach(element => {
        element.addEventListener("mouseenter", changeColor);
    });
    coloredSquares.forEach(element => {
        element.addEventListener("mouseleave", fadeOut);
    });
    // also add for touchscreens
    coloredSquares.forEach(element => {
        element.addEventListener("touchstart", changeColor);
    });
    coloredSquares.forEach(element => {
        element.addEventListener("touchmove", touchColor);
    });
    
};

// change div background color
function changeColor(event) {
    let randomRed = Math.floor(Math.random() * 255);
    let randomGreen = Math.floor(Math.random() * 255);
    let randomBlue = Math.floor(Math.random() * 255);        
    event.target.style.background = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
};

// fade out background after mouse leaves
function fadeOut(event) {
    let opacity = 1;
    let timer = setInterval(function() {
        if (opacity <= 0.8) {
            clearInterval(timer);
        }
        event.target.style.opacity = opacity;
        opacity -= 0.05;
    }, 50)
};

// touch function
function touchColor(event) {
    let square = document.elementFromPoint(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
    if (square.className === "coloredSquares") {
        // set random color
        let randomRed = Math.floor(Math.random() * 255);
        let randomGreen = Math.floor(Math.random() * 255);
        let randomBlue = Math.floor(Math.random() * 255);        
        square.style.background = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
        // and fade
        let opacity = 1;
        let timer = setInterval(function() {
        if (opacity <= 0.8) {
            clearInterval(timer);
        }
        square.style.opacity = opacity;
        opacity -= 0.05;
    }, 50)
    };
};

// reset the grid colors when clear canvas button is pressed
clearForm.addEventListener("click", () => {
    if (coloredSquares.length === 0) {
        return;
    }
    coloredSquares.forEach(element => {
        element.style.background = "rgb(0, 0, 0)";
    })
})
