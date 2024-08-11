/* Create grid */
const ROW_COUNT = 4;
const COLUMN_COUNT = 4;
document.addEventListener("DOMContentLoaded", () => {
  const sketchContainer = document.querySelector(".canvas");
  for (let i = 0; i<ROW_COUNT; i++){
    sketchContainer.appendChild(createRow());
  }
})

function createColumn(){
  const column = document.createElement("div");
  column.classList.toggle("col");
  column.addEventListener("mouseover", () =>{
    column.style.backgroundColor = "lightpink";
  })
  column.addEventListener("mouseleave", () =>{
    column.style.backgroundColor = '';
  })
  return column;
}

function createRow(){
  const row = document.createElement("div");
  row.classList.toggle("row");
  for (let j = 0; j<COLUMN_COUNT; j++){
    row.appendChild(createColumn());
  }
  return row;
}