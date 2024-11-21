const minNum = 1;
const maxNum = 10;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
const submit = document.getElementById("button");
let input = document.getElementById("userInput");

let attempts = 0;
let guess;

submit.onclick = function () {
  guess = parseInt(input.value);
  attempts++;

  if (isNaN(guess)) {
    document.getElementById(
      "value"
    ).textContent = `Please Enter a Valid Number`;
    return;
  }
  if (guess < minNum || guess > maxNum) {
    document.getElementById(
      "value"
    ).textContent = `Please Enter a Number between 1 and 10`;
    return;
  }
  if (guess < answer) {
    document.getElementById("value").textContent = `Too Low! Try Again`;
  } else if (guess > answer) {
    document.getElementById("value").textContent = `Too High! Try Again`;
  } else if (guess === answer) {
    document.getElementById(
      "value"
    ).textContent = `Congratulations! The answer was ${answer}. You took ${attempts} attempts.`;
  }
};
