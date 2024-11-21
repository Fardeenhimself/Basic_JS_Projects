const generateNumber = document.getElementById("generate");
const reset = document.getElementById("reset");
const showLabel = document.getElementById("randomNumber");

const max = 6;
const min = 1;
let number;

generateNumber.onclick = function () {
  number = Math.floor(Math.random() * max) + min;
  showLabel.textContent = number;
};

reset.onclick = function () {
  number = 0;
  showLabel.textContent = number;
};
