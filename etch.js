let colorToggle = true;
let greyScaleToggle = false;
const container = document.getElementById("container");
const clearButton = document.getElementById("clearGridButton");
const colorButton = document.getElementById("colorButton");
const greyScaleButton = document.getElementById("greyScaleButton");

clearButton.addEventListener("click", clearGrid);
colorButton.addEventListener("click", function () {
    colorToggle = !colorToggle;
    greyScaleToggle = !greyScaleToggle;
});
greyScaleButton.addEventListener("click", function () {
    colorToggle = !colorToggle;
    greyScaleToggle = !greyScaleToggle;
});

createGrid(15);

function createGrid(gridDimension) {
    // Set grid size
    const containerSize = 960;
    container.style.setProperty("width", containerSize + "px");
    container.style.setProperty("height", containerSize + "px");
    container.style.setProperty("display", "grid");
    container.style.setProperty("grid-template-columns", `repeat(${gridDimension}, 1fr)`);
    container.style.setProperty("grid-template-rows", `repeat(${gridDimension}, 1fr)`);


    // Populate grid with squares
    // double for loop, row (y) and column (x) dimensions
    let x;
    for (x = 1; x <= gridDimension; x++) {
        let y;
        for (y = 1; y <= gridDimension; y++) {
            // Position the square in the grid
            let square = document.createElement("div");
            square.style.setProperty("grid-column", `${x}`);
            square.style.setProperty("grid-row", `${y}`);
            square.style.setProperty("place-self", "center");
            square.style.setProperty("width", `${containerSize / gridDimension}` + "px");
            square.style.setProperty("height", `${containerSize / gridDimension}` + "px");
            square.style.setProperty("background-color", "rgb(255,255,255)");
            square.classList.toggle("square");

            // Add the hover effect to each square
            square.addEventListener("mouseenter", function (event) {
                // If colorToggle is active, make the boxes colorful
                if (colorToggle) {
                    let colors = randomColor();
                    square.style.setProperty("background-color", `rgb(${colors[0]},${colors[1]},
                        ${colors[2]})`);
                    square.classList.add("coloured");
                } // If the greyScale toggle is active, make the boxes grey/black
                else if (greyScaleToggle) {
                    let rgb = getComputedStyle(square).getPropertyValue("background-color");
                    rgb = rgb.replace(/[^\d,]/g, '').split(',');
                    // If the cell already had colour
                    let grey;
                    if (square.classList.contains("coloured")) {
                        grey = Number(rgb[0]);
                        square.classList.remove("coloured");
                    } else {
                        grey = Number(rgb[0]) - 100;
                    }
                    square.style.setProperty("background-color", `rgb(${grey},${grey},${grey})`);
                    console.log(getComputedStyle(square).getPropertyValue("background-color"));
                };
            });
            container.appendChild(square);
        }
    }
}

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    const userGridInput = prompt("Please enter a grid size up to 100: ");
    createGrid(userGridInput);
}

function randomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    console.log(red, green, blue);
    return [red, green, blue]
}