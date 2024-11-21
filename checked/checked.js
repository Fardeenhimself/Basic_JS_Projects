const myCheckBox = document.getElementById("myCheckBox");
const visa = document.getElementById("visa");
const mastercard = document.getElementById("masterCard");
const payPal = document.getElementById("payPal");
const submit = document.getElementById("button");

const subStat = document.getElementById("subStat");
const paymentStat = document.getElementById("paymentStat");

submit.onclick = function () {
  myCheckBox.checked
    ? (subStat.textContent = `Subscription is active`)
    : (subStat.textContent = `Subscription is inactive`);

  if (visa.checked) {
    paymentStat.textContent = `Visa is selected`;
  } else if (mastercard.checked) {
    paymentStat.textContent = `MasterCard is selected`;
  } else if (payPal.checked) {
    paymentStat.textContent = `Paypal Selected`;
  } else {
    paymentStat.textContent = `You didn't select a payment method`;
  }
};
