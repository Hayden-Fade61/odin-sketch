const INITIAL_SIZE = 16;
const SIZE_LIMIT = 100;

document.addEventListener("DOMContentLoaded", () => {createGrid(INITIAL_SIZE)}) // This event fires when page is done loading
const resizeButton = document.querySelector("#resize");
const clearButton = document.querySelector("#clear");
resizeButton.addEventListener('click', function() {
  let size = prompt('Please enter grid size as a number:'); // Prompt returns null if you hit cancel
  if(size > 100){
    alert("Size is too large, creating largest grid of size 100");
    size = 100;
  }
  if (size != null && size > 0){
    destroyGrid();
    createGrid(size);
  }
});
clearButton.addEventListener('click', function() {
  const drawnCols = document.querySelectorAll(".drawn");
  drawnCols.forEach((col) => {
    col.classList.toggle("drawn");
  });
});

function createGrid(size){
  const sketchContainer = document.querySelector(".canvas");
  for (let i = 0; i<size; i++){
    sketchContainer.appendChild(createRow(size));
  }
}

function destroyGrid(){
  const cols = document.querySelectorAll(".col");
  const rows = document.querySelectorAll(".row");
  cols.forEach((col) => {
    col.remove();
  })   
  rows.forEach((row) => {
    row.remove();
  })
}

function createRow(col_count){
  const row = document.createElement("div");
  row.classList.toggle("row");
  for (let j = 0; j<col_count; j++){
    row.appendChild(createColumn());
  }
  return row;
}

function createColumn(){
  const column = document.createElement("div");
  column.classList.toggle("col");
  // These two events create a hover effect, see also mouseout vs mouseleave
  column.addEventListener("mouseover", () => {column.classList.toggle("drawn");});
  // column.addEventListener("mouseleave", () => {column.classList.toggle("drawn");});
  return column;
}
