var currPeice;
var otherPeice;
let win = new Array(9);
win.fill(0, 0, 9);
const alert = document.querySelector("#alert");
var Remove_gap = document.querySelector(".game_board");
window.onload = function () {
  console.log("hello");
  const img_blank = document.querySelectorAll(".blank_img");
  const img_peice = document.querySelectorAll(".game_img_pieces");
  img_blank.forEach((elem) => {
    elem.addEventListener("dragstart", dragStart);
    elem.addEventListener("dragover", dragOver);
    elem.addEventListener("dragenter", dragEnter);
    elem.addEventListener("dragleave", dragLeave);
    elem.addEventListener("drop", dragDrop);
    elem.addEventListener("dragend", dragEnd);
  });
  img_peice.forEach((elem) => {
    elem.addEventListener("dragstart", dragStart);
    elem.addEventListener("dragover", dragOver);
    elem.addEventListener("dragenter", dragEnter);
    elem.addEventListener("dragleave", dragLeave);
    elem.addEventListener("drop", dragDrop);
    elem.addEventListener("dragend", dragEnd);
  });
};
function dragStart() {
  currPeice = this; //this refers to image that was clicked on for dragging
  //   console.log("DragedImg", currPeice);
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave() {}

function dragDrop() {
  otherPeice = this; //this refers to image that is being dropped on
  //   console.log("onDragedImg", otherPeice);
}

function dragEnd() {
  if (currPeice.src.includes("blank")) return;
  else {
    let temp = currPeice.src;
    currPeice.src = otherPeice.src;
    otherPeice.src = temp;
    win[parseInt(currPeice.attributes[3].value) - 1] = parseInt(
      currPeice.attributes[3].value
    );
    checkCompletion();
  }
}
function checkCompletion() {
  for (let i = 0; i < win.length - 1; i++) {
    if (win[i] > win[i + 1] || win[i] == 0) {
      return;
    }
  }
  console.log("win");
  Remove_gap.style.columnGap = "0px";
  Remove_gap.style.rowGap = "0px";
  alert.style.display = "flex";
}
