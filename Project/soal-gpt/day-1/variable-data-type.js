function inputUser() {
  const name = document.getElementById("nameUser").value;
  const age = document.getElementById("ageUser").value;
  const hobbies = document.getElementById("hobbyUser").value;

  // for list of hobbies
  if (name === "" || age === "" || hobbies === "") {
    alert("Please fill in all fields");
  } else {
    if (hobbies) {
      const li = document.createElement("li");
      li.innerText = hobbies;
      document.getElementById("hobbyList").appendChild(li);
    }

    document.getElementById("resultUser").innerText = `
    Nama: ${name}, 
    Umur: ${age}, 
    Hobbies:
    `;
  }
}

function clearResult() {
  document.getElementById("resultUser").innerText = "";
  document.getElementById("nameUser").value = "";
  document.getElementById("ageUser").value = "";
  document.getElementById("hobbyUser").value = "";
  document.getElementById("hobbyList").innerText = "";
}

// ================================================================================== //

let price = [];

function dataPrice() {
  const changeType = document.getElementById("priceData").value;
  // validasi if input empty
  if (changeType === "") {
    alert("Please input a price");
    return;
  }

  const data = Number(changeType);

  if (isNaN(data)) {
    alert("Please enter a valid number");
  } else {
    if (price.length === 1 && price[0] === 0) {
      price = [];
    }

    price.push(data);
    document.getElementById("resultPrice").innerText = `Data price ${price.join(
      ", "
    )}`;

    const total = price.reduce((acc, curr) => acc + curr, 0);
    const average = total / price.length;

    // with spread operator
    const priceMax = Math.max(...price);
    const priceMin = Math.min(...price);

    document.getElementById("resultPrice").innerText += `
    Total: ${total},
    Average: ${average},
    Price Max: ${priceMax},
    Price Min: ${priceMin}
    `;
  }
}

function resetData() {
  document.getElementById("resultPrice").innerText = "";
  document.getElementById("priceData").value = "";
  price = [];
}
