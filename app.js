//selectors
const container = document.querySelector(".container");
const cells = Array.from(document.querySelectorAll(".cell"));
const result = document.querySelector(".result");
const xwin = document.querySelector(".xwin");
const owin = document.querySelector(".owin");
const draw = document.querySelector(".draw");
const reset = document.querySelector(".reset");
let targetCell;

//event listners
cells.forEach((val) => {
  val.addEventListener("click", fun1);
});
reset.addEventListener("click", fun2);

//functions
function fun1(e) {
  targetCell = e.target;
  if (targetCell.classList == "cell") {
    if (targetCell.parentElement.classList.contains("x")) {
      targetCell.classList.add("o");
      targetCell.parentElement.classList.remove("x");
      targetCell.parentElement.classList.add("o");
    } else {
      targetCell.classList.add("x");
      targetCell.parentElement.classList.remove("o");
      targetCell.parentElement.classList.add("x");
    }
    let flag = check();
    if (flag == "x") {
      container.classList.toggle("hidden");
      result.classList.toggle("hidden");
      xwin.classList.toggle("hidden");
    } else if (flag == "o") {
      container.classList.toggle("hidden");
      result.classList.toggle("hidden");
      owin.classList.toggle("hidden");
    } else if (flag == "d") {
      container.classList.toggle("hidden");
      result.classList.toggle("hidden");
      draw.classList.toggle("hidden");
    }
  }
}

function fun2() {
  cells.forEach((val) => {
    val.classList = "cell";
  });
  container.classList = "container";
  let item = Array.from(result.children);
  item.forEach((val) => {
    if (!val.classList.contains("hidden") && val.classList != "reset") {
      val.classList.toggle("hidden");
    }
  });
  result.classList.toggle("hidden");
}

function check() {
  if (
    checkVertical() == "x" ||
    checkHorizontal() == "x" ||
    checkDiagonal() == "x"
  ) {
    return "x";
  } else if (
    checkVertical() == "o" ||
    checkHorizontal() == "o" ||
    checkDiagonal() == "o"
  ) {
    return "o";
  }
  let flag = true;
  for (i = 0; i < 9; i++) {
    if (cells[i].classList == "cell") {
      flag = false;
      break;
    }
  }
  if (flag) {
    return "d";
  }
}

function checkVertical() {
  let flagx = true;
  let flago = true;
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      if (!cells[3 * j + i].classList.contains("x")) {
        flagx = false;
      }
      if (!cells[3 * j + i].classList.contains("o")) {
        flago = false;
      }
    }
    if (flagx) {
      return "x";
    } else if (flago) {
      return "o";
    }
    flagx = flago = true;
  }
}

function checkHorizontal() {
  let flagx = true;
  let flago = true;
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      if (!cells[3 * i + j].classList.contains("x")) {
        flagx = false;
      }
      if (!cells[3 * i + j].classList.contains("o")) {
        flago = false;
      }
    }
    if (flagx) {
      return "x";
    } else if (flago) {
      return "o";
    }
    flagx = flago = true;
  }
}

function checkDiagonal() {
  if (
    (cells[0].classList.contains("x") == true &&
      cells[4].classList.contains("x") == true &&
      cells[8].classList.contains("x") == true) ||
    (cells[2].classList.contains("x") == true &&
      cells[4].classList.contains("x") == true &&
      cells[6].classList.contains("x") == true)
  ) {
    return "x";
  }
  if (
    (cells[0].classList.contains("o") == true &&
      cells[4].classList.contains("o") == true &&
      cells[8].classList.contains("o") == true) ||
    (cells[2].classList.contains("o") == true &&
      cells[4].classList.contains("o") == true &&
      cells[6].classList.contains("o") == true)
  ) {
    return "o";
  }
}
