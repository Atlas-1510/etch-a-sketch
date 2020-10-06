const container = document.getElementById("container");
const button = document.getElementById("clearGridButton");
button.addEventListener("click", clearGrid);
createGrid(100);

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
            // square.textContent = `(${x}, ${y})`;
            square.classList.toggle("square");

            // Add the hover effect to each square
            square.addEventListener("mouseenter", function (event) {
                let colors = randomColor();
                square.style.setProperty("background-color", `rgb(${colors[0]},${colors[1]},
                    ${colors[2]})`);
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

function randomColor(item) {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    console.log(red, green, blue);
    return [red, green, blue]
}