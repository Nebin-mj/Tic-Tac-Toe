//selectors
const cells = Array.from(document.querySelectorAll(".cell"));
let targetCell;
//event listners
cells.forEach((val) => {
  val.addEventListener("click", fun1);
});

//functions
function fun1(e) {
  targetCell = e.target;
  if (
    targetCell.parentElement.classList.contains("x") &&
    targetCell.classList == "cell"
  ) {
    targetCell.classList.add("o");
    targetCell.parentElement.classList.remove("x");
    targetCell.parentElement.classList.add("o");
  } else if (targetCell.classList == "cell") {
    targetCell.classList.add("x");
    targetCell.parentElement.classList.remove("o");
    targetCell.parentElement.classList.add("x");
  }
}
