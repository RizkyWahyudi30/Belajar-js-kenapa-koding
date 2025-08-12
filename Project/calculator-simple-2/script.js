let userInput = ""; // nyimpen input angka / operator

function funcCalc(value) {
  // konversi jika user memilih ^ menjadi **
  if (value === "^") {
    userInput += "**";
  } else {
    userInput += value;
  }
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

function deleteLast() {
  userInput = userInput.slice(0, -1);
  document.getElementById("resultCalc").innerText = userInput;
}
