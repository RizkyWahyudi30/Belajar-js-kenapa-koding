function randomNumber() {
  let inputUser = document.getElementById("numberUser").value;

  let random = Math.floor(Math.random() * 100);

  if (inputUser <= 0) {
    document.getElementById("resultNumber").innerHTML =
      "masukkan angka yang valid";
    return;
  } else if (inputUser === random) {
    document.getElementById(
      "resultNumber"
    ).innerHTML = `Angka kamu: ${inputUser} dan angka random: ${random}. Sama`;
  } else {
    document.getElementById(
      "resultNumber"
    ).innerHTML = `Angka kamu: ${inputUser} dan angka random: ${random}. Berbeda`;
  }
}
