const increaseButton = document.getElementById("increase");
const resetButton = document.getElementById("reset");
const decreaseButton = document.getElementById("decrease");
const countLabel = document.getElementById("countLabel");

let count = 0;

increaseButton.onclick = function () {
  count++;
  countLabel.textContent = count;
};

decreaseButton.onclick = function () {
  if (count > 0) {
    count--;
    countLabel.textContent = count;
  }
};

resetButton.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};
