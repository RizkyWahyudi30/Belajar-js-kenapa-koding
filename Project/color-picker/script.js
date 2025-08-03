document
  .getElementById("colorInput")
  .addEventListener("input", function (event) {
    // get color from input
    let selectedColor = event.target.value;

    // update color text
    document.getElementById("colorCode").textContent = selectedColor;

    // update background color of the colorDisplay
    document.getElementById("colorDisplay").style.backgroundColor =
      selectedColor;
  });
