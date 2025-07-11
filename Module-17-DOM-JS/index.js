// DOM
// DOM adalah representasi struktur dokumen HTML atau XML dalam bentuk tree yang memunngkinkan program untuk mengakses dan memanipulasi konten, struktur dan gaya halaman web secara dinamis

// di DOM ada dua penjelasan, yaitu:
// 1. Node: setiap elemen dalam tree DOM disebur node. Ada beberapa jenis node, ada elemen, teks, atribut
// 2. Root node: dokumen HTML dimulai dari Node akar(document), yang merupakan entry point untuk mengakses semua elemen lain di halaman
// ini contoh dasar nya aja
console.log(document.querySelectorAll("li"));
let listDoc = document.querySelectorAll("li");
listDoc[0].style.color = "blue";
listDoc[1].style.color = "red";
listDoc[2].style.color = "yellow";

// Mengakses DOM
// javascript menyediakan beberapa metode untuk mengakses elemen di DOM:
// 1. getElementById(): mengakses elemen berdasarkan ID
// 2. getElementsByClassName(): mengakses elemen berdasarkan class
// 3. getElementsByTagName(): mengakses elemen berdasarkan tag
// 4. querySelector(): mengakses elemen menggunakan selector css
// 5. querySelectorAll(): mengakses semua elemen yang sesuai dengan selector css

// contoh:
let titleKedua = document.getElementById("judul-kedua"); // menggunakan byId
console.log(titleKedua);

let paragrafPenjelasan = document.getElementsByClassName("penjelasan"); // byClass
console.log(paragrafPenjelasan);

let takeTag = document.getElementsByTagName("li"); // byTag
console.log(takeTag[3]); // ambil berdasarkan index nya

// query selector hanya mengambil satu saja -> mengambil yang paling awal saja
// queryAll mengambil semua nya
let byQuery = document.querySelectorAll("li.penjelasan"); // bisa diganti all atau tidak
let byQuery2 = document.querySelectorAll("li#contoh-aja");
// jika class dengan .
// jika id dengan #
console.log(byQuery);
console.log(byQuery2);

// perbedaannya dari
// getElementsByTagName -> apabila terjadi perubahan pada grup, akan langsung berubah juga -> tidak bisa ngeselect seperti query
// querySelectorAll -> ini static -> bisa nge select berdasarkan class atau id

// Memanipulasi Elemen
// Kita bisa mengubah konten, atribut, dan gaya elemen tersebut
// 1. Mengubah konten: element.textContent atau element.innerHTML
// 2. Mengubah atribute: element.setAttribute(attribute, value)
// 3. Mengubah gaya: element.style.property = value

// contohnya:
// --> pakai textContent dan innerHTML
let loremText = document.getElementById("text-lorem");
// console.log(loremText);
// kita bisa ngubah isi konten nya
loremText.textContent = "kalimat kalimat lorem sit dengan textContent";
loremText.innerHTML = "dengan inner HTML";

// jika kita mengambil yang ada anakannya atau yang ada di dalam div
// inner html
let textDiv = document.getElementById("wClass");
console.log(textDiv.innerHTML);
// jika dengan class, maka perlu ditambahkan index nya
let textDiv2 = document.getElementsByClassName("wClass2");
console.log(textDiv2[0].innerHTML);
// textcontent
console.log(textDiv.textContent); // jika pakai text content, maka tag tag nya akan hilang, jadi akan memunculkan value nya saja
// kalau kita ubah content nya, perbedaanya begini
let changeWInner = document.getElementById("wInner");
changeWInner.innerHTML = "<h2>Ini pakai Inner HTML untuk ngubahnya </h2>";
let changeWInner2 = document.getElementById("wText");
changeWInner2.innerHTML = "<h2>Ini pakai Text Content </h2>";
