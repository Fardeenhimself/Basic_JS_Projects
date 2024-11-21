const textBox = document.getElementById("textBox");
const toFarenheit = document.getElementById("toFarenheit");
const toCelsius = document.getElementById("toCelsius");
const convert = document.getElementById("submit");
const showDisplay = document.getElementById("result");

let temp;

function tempConvert() {
  if (toFarenheit.checked) {
    temp = Number(textBox.value);
    temp = (temp * 9) / 5 + 32;
    showDisplay.textContent = temp.toFixed(1) + "°F";
  } else if (toCelsius.checked) {
    temp = Number(textBox.value);
    temp = ((temp - 32) * 5) / 9;
    showDisplay.textContent = temp.toFixed(1) + "°C";
  } else {
    showDisplay.textContent = "Please select a method!";
  }
}
