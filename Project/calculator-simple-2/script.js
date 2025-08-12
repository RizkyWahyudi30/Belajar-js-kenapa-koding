let userInput = ""; // nyimpen input angka / operator

function funcCalc(value) {
  userInput += value;
  document.getElementById("resultCalc").innerText = userInput;
}

function calculate() {
  try {
    let result = eval(userInput);
    document.getElementById("resultCalc").innerText = result;
    userInput = result.toString();
  } catch (error) {
    document.getElementById("resultCalc").innerText = "Error";
    userInput = "";
  }
}

function clearCalc() {
  userInput = "";
  document.getElementById("resultCalc").innerText = "";
}
