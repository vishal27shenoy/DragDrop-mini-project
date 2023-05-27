var currPeice;
var otherPeice;
let counter = 0;
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
    ++counter;
    let currImg = currPeice.src;
    let otherImg = otherPeice.src;
    currPeice.src = otherImg;
    otherPeice.src = currImg;
  }
  if (counter >= 9) {
    checkCompletion();
  }
}
function checkCompletion() {
  const img_blank = document.querySelectorAll(".blank_img");
  let check = 9;
  let isCorrect = true;
  let arr = [...img_blank];
  for (let i = 0; i < 8; i++) {
    if (!arr[i].src.includes(`${check - i}.jpg`)) {
      isCorrect = false;
      return;
    }
  }
  if (isCorrect) {
    Remove_gap.style.columnGap = "0px";
    Remove_gap.style.rowGap = "0px";
    alert.style.display = "flex";
  }
}
