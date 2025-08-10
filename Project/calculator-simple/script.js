function countNumber() {
  let firstNumber = Number(document.getElementById("numberOne").value);
  let secondNumber = Number(document.getElementById("numberTwo").value);
  let operator = document.getElementById("operator").value;
  let result;

  if (isNaN(firstNumber) || isNaN(secondNumber) || operator === "") {
    document.getElementById("result").innerText =
      "Tolong pilih angka dan operator yang valid!";
  } else if (operator === "+") {
    result = firstNumber + secondNumber;
    document.getElementById(
      "result"
    ).innerText = `Hasil angka pertama: ${firstNumber} dan angka kedua: ${secondNumber}. Ditambah = ${result}`;
  } else if (operator === "-") {
    result = firstNumber - secondNumber;
    document.getElementById(
      "result"
    ).innerText = `Hasil angka pertama: ${firstNumber} dan angka kedua: ${secondNumber}. Dikurang = ${result}`;
  } else if (operator === "*") {
    result = firstNumber * secondNumber;
    document.getElementById(
      "result"
    ).innerText = `Hasil angka pertama: ${firstNumber} dan angka kedua: ${secondNumber}. Dikali = ${result}`;
  } else if (operator === "/") {
    result = firstNumber / secondNumber;
    document.getElementById(
      "result"
    ).innerText = `Hasil angka pertama: ${firstNumber} dan angka kedua: ${secondNumber}. Dibagi = ${result}`;
  }
}

function resetCalc() {
  document.getElementById("numberOne").value = "";
  document.getElementById("numberTwo").value = "";
  document.getElementById("operator").selectedIndex = "0";
  document.getElementById("result").innerText = "";
}
