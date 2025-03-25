// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
   const table = document.getElementById("grid");
    // Add first column if its 0, since a row needs a column
    if(numCols == 0){
        numCols = 1;
    }

    // Create a new row
    const newRow = table.insertRow(numRows);
    for(let c = 0; c < numCols; c++){
        const newCell = newRow.insertCell();
        newCell.onclick = function(){
            newCell.style.backgroundColor = colorSelected;
        }
    }

    numRows++;
}

// Add a column
function addC() {
   const table = document.getElementById("grid");
    // Add first row if its 0, since a clumn needs a row
    if(numRows == 0){
        addR();
    }
    else{
        //Create a new column
        for(let r = 0; r < numRows; r++){
            const newColumn = table.rows[r];
            const newCell = newColumn.insertCell();
            newCell.onclick = function(){
                newCell.style.backgroundColor = colorSelected;
            }
        }

        numCols++;
    }
}

// Remove a row
function removeR() {
    const table = document.getElementById("grid");
    //This is to remove the last row
    if(numRows > 0){
        table.deleteRow(numRows - 1);
        numRows--;
    }

    //If this is last row, remove the column
    if(numRows == 0){
        numCols = 0;
    }
}

// Remove a column
function removeC() {
    const table = document.getElementById("grid");
    //This is to remove the last column
    if(numCols > 0){
        for(let r = 0; r < numRows; r++){
            const delColumn = table.rows[r];
            delColumn.deleteCell(numCols - 1);
        }
        numCols--;
    }

    //If this is last column, remove the row
    if(numCols == 0){
        while(numRows > 0){
            table.deleteRow(numRows - 1);
            numRows--;
        }
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
   const table = document.getElementById("grid");
   for (let r = 0; r< numRows; r++){
    for (let c = 0;c< numCols; c++){
        const cell = table.rows[r].cells[c];
        //Check if cell is not colored or its color is white then change to selected color
        if (!cell.style.backgroundColor || cell.style.backgroundColor === "white") {
            cell.style.backgroundColor = colorSelected;
        }
    }
   }
}

// Fill all cells
function fillAll(){
    const table = document.getElementById("grid");
    //Color all cellsd with selected color
    for (let r = 0; r< numRows; r++){
        for (let c = 0;c< numCols; c++){
            const cell = table.rows[r].cells[c];
            cell.style.backgroundColor = colorSelected;
        }
    }
}

// Clear all cells
function clearAll(){
    const table = document.getElementById("grid");
    //Undo the color of all cells to white
    for (let r = 0; r< numRows; r++){
        for (let c = 0;c< numCols; c++){
            const cell = table.rows[r].cells[c];
            cell.style.backgroundColor = "white";
        }
    }
}