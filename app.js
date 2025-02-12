// TODO: 1 - Generate 4 digit Pin - done
// TODO: 2 - Make the keypad functional - done
// TODO: 3 - Make SUBMIT Btn & notification work -done
// TODO: 4 - Make try out functional - done
// TODO: 5 - "<" onClick - remove single digit & "C" Clear whole input -done
// TODO: 6 - if try = 0 then all the button will be disable (generate)

//selectors
const generatePinBtn = document.querySelector(".generate-btn");
const generatedPinInput = document.querySelector(".generated-pin");
const keypadValue = document.querySelector(".show-value");
const wrongPin = document.querySelector(".wrong-pin");
const correctPin = document.querySelector(".correct-pin");
const submitBtn = document.querySelector(".submit-btn");
const tryLeft = document.getElementById("tryLeft");

//Hide notification
hidenotification();

//Generate 4 digit PIN
function generatePin() {
  const pin = Math.floor(Math.random() * 9000) + 1000;
  generatedPinInput.value = pin;
}

generatePinBtn.addEventListener("click", generatePin);

//Generate value from keypad
function keypad(number = 10) {
  if (generatedPinInput.value == "") {
    alert("Generate a pin first! 😡");
  } else {
    keypadValue.value += number;
  }
  if (number == "C") {
    keypadValue.value = "";
  }
}

//Remove a single digit from the keypad
function removeSingleDigit() {
  let currentValue = keypadValue.value;
  if (generatedPinInput.value == "") {
    alert("Generate a pin first! 😡");
  }
  if (currentValue === "") {
    alert("Nothing to remove");
  }
  keypadValue.value = currentValue.slice(0, -1);
}

function hidenotification() {
  correctPin.style.display = "none";
  wrongPin.style.display = "none";
}

function checkPin() {
  hidenotification();
  if (generatedPinInput.value === keypadValue.value) {
    correctPin.style.display = "block";
    submitBtn.style.backgroundColor = "green";
    submitBtn.disabled = true;
    generatePinBtn.disabled = true;
    generatePinBtn.style.backgroundColor = "green";
  } else {
    wrongPin.style.display = "block";
    submitBtn.style.backgroundColor = "red";
    handleTryLeft();
  }
}

function handleTryLeft() {
  let value = parseInt(tryLeft.innerText);
  console.log(value);
  if (0 < value) {
    tryLeft.innerText = value - 1;
  } else {
    alert("You have 0 try left! Please try again!");
    submitBtn.disabled = true;
    generatePinBtn.style.backgroundColor = "red";
  }
}

submitBtn.addEventListener("click", checkPin);
