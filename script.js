const barra = document.querySelector("#barra")
const value = document.querySelector("#value")
const container = document.querySelector(".box")

function createGrids() {
  let size = barra.value;
  let gridWidth = (500 / size)+ "px";
  container.style.gridTemplateColumns = `repeat(${size}, ${gridWidth})`;
  container.style.gridTemplateRows = `repeat(${size}, ${gridWidth})`;

  for (let i=0; i<(size**2); i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.onmouseover = () => square.style.backgroundColor=`${color.value}`

    const color = document.querySelector("#color")
      color.addEventListener("click", () => {
        square.onmouseover = () => square.style.backgroundColor=`${color.value}`
      })

    const randomColor = document.querySelector(".rainbow")
      randomColor.addEventListener("click", () => { 
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        square.onmouseover = ()=> square.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
      })

    const eraser = document.getElementById("eraser")
      eraser.addEventListener("click", () => {
        const deleteColor = "#ffffff";
        square.onmouseover = ()=> square.style.backgroundColor = `${deleteColor}`
      })

    container.appendChild(square)
    }
  }

createGrids()

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

const deleteAll = document.querySelector(".deleteAll") 
deleteAll.addEventListener("click", () => {
    deleteGrids()
    createGrids()
})