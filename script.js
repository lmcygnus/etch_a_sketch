const barra = document.querySelector("#barra");
const value = document.querySelector("#value");
const container = document.querySelector(".box")
const color = document.querySelector(".color")

function createGrids() {
  let size = barra.value;
  let gridWidth = (500 / size)+ "px";
  container.style.gridTemplateColumns = `repeat(${size}, ${gridWidth})`;
  container.style.gridTemplateRows = `repeat(${size}, ${gridWidth})`;
  for (let i=0; i<(size**2); i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square)
  }
}

function deleteGrids() {
  const grids = container.querySelectorAll(".square")
  grids.forEach(square => square.remove())
}

value.textContent = barra.value;

barra.addEventListener("input", (event) => {
  value.textContent = event.target.value;
  deleteGrids()
  createGrids()
})

