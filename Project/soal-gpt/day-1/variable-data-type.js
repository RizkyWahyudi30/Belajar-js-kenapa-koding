let listHobbies = [];

function inputUser() {
  const name = document.getElementById("nameUser").value;
  const age = document.getElementById("ageUser").value;
  const hobbies = document.getElementById("hobbyUser").value;

  // for list of hobbies
  if (name === "" || age === "" || hobbies === "") {
    alert("Please fill in all fields");
  } else {
    if (hobbies.trim() !== "") {
      listHobbies.push(hobbies.trim());
      const li = document.createElement("li");
      li.innerText = hobbies.trim();
      document.getElementById("hobbyUser").value = "";
    }

    document.getElementById("resultUser").innerHTML = `
    Nama: ${name}, 
    Umur: ${age}, 
    Hobi: 
    ${listHobbies.map((h, i) => `${i + 1}. ${h}`).join("\n")}
    `;
  }
}

function clearResult() {
  document.getElementById("resultUser").innerText = "";
  document.getElementById("nameUser").value = "";
  document.getElementById("ageUser").value = "";
  document.getElementById("hobbyUser").value = "";
  listHobbies = [];
}
