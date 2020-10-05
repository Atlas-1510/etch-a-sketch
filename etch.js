createGrid(16);

function createGrid(gridDimension) {
    // Set grid size
    let container = document.getElementById("container");
    container.style.width = "960px";


    // Populate grid with squares
    let i;
    for (i = 0; i < gridDimension; i++) {
        let newRow = document.createElement("div");
        container.appendChild(newRow);
        let j;
        for (j = 0; j < gridDimension; j++) {
            let newDiv = document.createElement("div");
            newDiv.style.display = 'inline';
            newDiv.textContent = 'test';
            newDiv.classList.toggle("square");
            newDiv.style.setProperty("border", "solid");
            newDiv.style.setProperty("border-width", "1px");
            newDiv.style.setProperty("border-color", "black");
            newRow.appendChild(newDiv);


            // .square {
            //     border: solid;
            //     border - width: 1px;
            //     border - color: grey;
            // }
        }
    }

}