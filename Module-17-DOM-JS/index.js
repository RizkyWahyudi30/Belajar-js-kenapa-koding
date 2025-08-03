// DOM
// DOM adalah representasi struktur dokumen HTML atau XML dalam bentuk tree yang memunngkinkan program untuk mengakses dan memanipulasi konten, struktur dan gaya halaman web secara dinamis

// --> MATERI DOM STRUCTURE
// ============================================================
// di DOM ada dua penjelasan, yaitu:
// 1. Node: setiap elemen dalam tree DOM disebur node. Ada beberapa jenis node, ada elemen, teks, atribut
// 2. Root node: dokumen HTML dimulai dari Node akar(document), yang merupakan entry point untuk mengakses semua elemen lain di halaman
// ini contoh dasar nya aja
// console.log(document.querySelectorAll("li"));
// let listDoc = document.querySelectorAll("li");
// listDoc[0].style.color = "blue";
// listDoc[1].style.color = "red";
// listDoc[2].style.color = "yellow";

// -> DOM ACCESS
// ============================================================
// Mengakses DOM
// javascript menyediakan beberapa metode untuk mengakses elemen di DOM:
// 1. getElementById(): mengakses elemen berdasarkan ID
// 2. getElementsByClassName(): mengakses elemen berdasarkan class
// 3. getElementsByTagName(): mengakses elemen berdasarkan tag
// 4. querySelector(): mengakses elemen menggunakan selector css
// 5. querySelectorAll(): mengakses semua elemen yang sesuai dengan selector css

// contoh:
// let titleKedua = document.getElementById("judul-kedua"); // menggunakan byId
// console.log(titleKedua);

// let paragrafPenjelasan = document.getElementsByClassName("penjelasan"); // byClass
// console.log(paragrafPenjelasan);

// let takeTag = document.getElementsByTagName("li"); // byTag
// console.log(takeTag[3]); // ambil berdasarkan index nya

// query selector hanya mengambil satu saja -> mengambil yang paling awal saja
// queryAll mengambil semua nya
// let byQuery = document.querySelectorAll("li.penjelasan"); // bisa diganti all atau tidak
// let byQuery2 = document.querySelectorAll("li#contoh-aja");
// // jika class dengan .
// // jika id dengan #
// console.log(byQuery);
// console.log(byQuery2);

// perbedaannya dari
// getElementsByTagName -> apabila terjadi perubahan pada grup, akan langsung berubah juga -> tidak bisa ngeselect seperti query
// querySelectorAll -> ini static -> bisa nge select berdasarkan class atau id

// --> DOM MANIPULATION ELEMENT
// ============================================================
// Memanipulasi Elemen
// Kita bisa mengubah konten, atribut, dan gaya elemen tersebut
// 1. Mengubah konten: element.textContent atau element.innerHTML
// 2. Mengubah atribute: element.setAttribute(attribute, value)
// 3. Mengubah gaya: element.style.property = value

// contohnya:
// --> Mengubah konten: pakai textContent dan innerHTML
// let loremText = document.getElementById("text-lorem");
// console.log(loremText);
// kita bisa ngubah isi konten nya
// loremText.textContent = "kalimat kalimat lorem sit dengan textContent";
// loremText.innerHTML = "dengan inner HTML";
//

// jika kita mengambil yang ada anakannya atau yang ada di dalam div
// inner html
// let textDiv = document.getElementById("wClass");
// console.log(textDiv.innerHTML);
// jika dengan class, maka perlu ditambahkan index nya
// let textDiv2 = document.getElementsByClassName("wClass2");
// console.log(textDiv2[0].innerHTML);
// textcontent
// console.log(textDiv.textContent); // jika pakai text content, maka tag tag nya akan hilang, jadi akan memunculkan value nya saja
// kalau kita ubah content nya, perbedaanya begini
// let changeWInner = document.getElementById("wInner");
// changeWInner.innerHTML = "<h2>Ini pakai Inner HTML untuk ngubahnya </h2>";
// let changeWInner2 = document.getElementById("wText");
// changeWInner2.innerHTML = "<h2>Ini pakai Text Content </h2>";

// --> Mengubah attribute: pakai setAttribute
// let setAtt = document.getElementById("textSet");
// setAtt.setAttribute("class", "setAtt"); // jadi menambahkannya lewat js nya

// --> Mengubah style:
// let setStyle = document.querySelectorAll("li");
// console.log(setStyle);
// setStyle[2].style.backgroundColor = "red";

// --> ADD / DELETE ELEMENT
// ============================================================
// Menambahkan dan Menghapus Elemen DOM:
// untuk menambahkan elemen baru ke DOM, bisa menggunakan:
// 1. createElement(tagName): membuat elemen baru
// 2. appendChild(childNode): menambahkan elemen sebagai anak dari elemen lain
// 3. insertBefore(newNode, referenceNode): menyisipkan elemen sebelum elemen referensi

// untuk menghapus elemen dari DOM, gunakan:
// 1. removeChild(childNode): menghapus elemen anak
// 2. remove(): menghapus elemen secara langsung

// menambah elemen
// let newDiv = document.createElement("div");
// newDiv.textContent = "Ini latihannya"; // ini script nya
// // kita ingin insert dia sebagai anak, jadi akan dibawah tag h1 nya
// document.body.appendChild(newDiv); // ini muncul dibawahnya
// // kita bisa append sebelum title
// let title = document.getElementById("title");
// document.body.insertBefore(newDiv, title);
// // nyoba insertBefore (jadi tidak hanya bisa di body saja)
// let newLi = document.createElement("li");
// newLi.textContent = "item dari script li";
// let parents = document.getElementById("listUl");
// let itemDua = document.getElementById("item2");
// // parents.appendChild(newLi);
// parents.insertBefore(newLi, itemDua);

// menghapus elemen
// ini dengan removeChild()
// let hapusItem = document.getElementById("test");
// document.body.removeChild(hapusItem);
// // bisa juga menghapus elemen di li
// parents.removeChild(itemDua);
// // dengan remove()
// title.remove(); // bisa menghapusnya secara langsung
// jika ingin menghapus body nya :v
// document.body.remove();

// --> DOM TRAVERSAL
// ============================================================
// DOM Traversal
// proses menjelajahi node di DOM tree untuk menemukan elemen tertenu. Anda dapat berpindah ke elemen anak, orang tua, atau saudara menggunakan prperti dan metode

// Properti DOM Traversal :
// 1. parentNode: mendapatkan elemen orang tua
// 2. childNodes: mendapatkan nodelist dari semua anak elemen
// 3. firstChild/lastChild: mendapatkan anak pertama/terakhir
// 4. nextSibling/previousSibling: mendapatkan elemen saudara berikutnya/sebelemnya

// cari tau asal elemen li dengan id pen1
// let listItemPenjelasan = document.getElementById("pen1");
// let item2 = document.getElementById("pen2");
// console.log(listItemPenjelasan.parentNode);
// console.log(listItemPenjelasan.parentElement);
// // cari tau children dari list item
// let listItem = document.getElementById("list-pen");
// console.log(listItem.childNodes); // tidak disarankan
// console.log(listItem.children);
// kenapa ada output text? -> output text itu bis diartikan sebagai spasi, makanya dihitung juga

// kita juga bisa dapetin anakan pertama/terakhirnya
// console.log(listItem.firstChild); // ini outputnya akan text
// console.log(listItem.firstElementChild); // akan mengarah langsung ke item nya
// console.log(listItem.lastChild);
// console.log(listItem.lastElementChild);
// dan ada juga next elemen, kurang lebih sama sistem nya kayak diatas
// console.log(listItem.nextSibling); // text
// console.log(listItem.nextElementSibling);
// // sebelumnya
// console.log(item2.previousSibling);
// console.log(item2.previousElementSibling);

// --> EVENT HANDLING
// ============================================================
// EVENT HANDLING
// yaitu konsep untuk menangkap dan merespons interaksi pengguna

// selanjutnya ada yang namanya :

// Event Listener: untuk menangkap event dan menjalankan fungsi tertentu ketika event tersebut terjadi
// cara menambahkannya :
// 1. {/* <button onClick="alert {'Button clicked'}""></button> */} --> ini inline event handling
// 2. const button = document.querySelector("button"); --> javascript
// button.addEventListener("click", () => {
//   alert("Button clicked");
// });

// Jenis jenis Event yaang umum digunakan:
// Mouse Events:
// 1. click: ketika elemen diklik
// 2. dblclick: ketika elemen diklik dua kali
// 3. mouseover: ketika kursor mouse berada di atas elemen
// 4. mouseout: ketika mouse meninggalkan elemen
// ---------------------------------------------------------
// Keyboard Events:
// 1. keydown: ketika tombol ditekan
// 2. keyup: ketika tombol dilepaskan
// 3. keypress: ketika tombol ditekan dan dilepaskan
// ---------------------------------------------------------
// Form Events:
// 1. submit: ketika form disubmit
// 2. change: ketika nilai input berubah
// 3. focus: ketika elemen form mendapatkan fokus
// 4. blur: ketika elemen input kehilangan fokus
// ---------------------------------------------------------
// Window Events:
// 1. load: ketika halaman selesai dim
// 2. resize: ketika ukuran jendela diubah
// 3. scroll: ketika halaman di-scroll

// praktek:
const button = document.getElementById("button-submit");
button.addEventListener("click", () => {
  alert("Button submit");
});

const textEv = document.getElementById("text-event");
function getClick() {
  textEv.style.backgroundColor = "red";
}
textEv.addEventListener("mouseover", () => {
  textEv.style.color = "yellow";
});

textEv.addEventListener("mouseout", () => {
  textEv.style.color = "blue";
});

function toUpSize() {
  textEv.style.fontSize = "30px";
}

function returnSize() {
  textEv.style.fontSize = "16px";
}
