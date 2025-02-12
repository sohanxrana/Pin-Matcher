// TODO: 1 - Generate 4 digit Pin - done
// TODO: 2 - Make the keypad functional
// TODO: 3 - Make SUBMIT Btn & notification work
// TODO: 4 - Make try out functional
// TODO: 5 - "<" onClick - remove single digit & "C" Clear whole input
// TODO: 6 - if try = 0 then all the button will be disable (generate)

//selectors
const generatePinBtn = document.querySelector(".generate-btn");
const generatedPinInput = document.querySelector(".generated-pin");

//Generate 4 digit PIN
function generatePin() {
  const pin = Math.floor(Math.random() * 9000) + 1000;
  generatedPinInput.value = pin;
}

generatePinBtn.addEventListener("click", generatePin);
