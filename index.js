// Your code here
const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  };
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });


function moveDodgerRight() {
    const number = dodger.style.left.replace(`px`, ``);
    const rightNumber = parseInt(number, 10);

    if (rightNumber < 360) {
    dodger.style.left = `${rightNumber + 1}px`;}
}
document.addEventListener(`keydown`, function(event) {
    if (event.key === `ArrowRight`) {
        moveDodgerRight();
    }
});