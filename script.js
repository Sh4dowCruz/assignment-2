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
        const newCell = newRow.insertCell(c);
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
            const newCell = newColumn.insertCell(r);
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
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}