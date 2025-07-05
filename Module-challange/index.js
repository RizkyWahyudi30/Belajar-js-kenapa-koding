/**
 * Module Challange
 * 
 */
 
 // Mengubah huruf pertama dalam string "javascript" menjadi huruf besar, dan huruf lainnya tetap kecil
 const stringAsli = "javascript";
// const stringBaru = stringAsli.replace("j", "J");
const stringBaru = stringAsli[0].toUpperCase() + stringAsli.slice(1).toLowerCase();
 console.log(stringBaru);
 
 // challange gpt
 // 1. Akses Karakter dan Panjang string
 let kalimat = "Belajar Javascript itu menyenangkan!";
 // akses Karakter
 let aksesKarakter = kalimat[8];
 console.log(aksesKarakter);
// cek panjang kalimat
let cekPanjang = kalimat.length;
console.log(cekPanjang);

// 2. Mengubah Format huruf
let nama = "WiNUrto";
let ubahNama = nama[0].toUpperCase() + nama.slice(1).toLowerCase();
console.log(ubahNama);

// Soal 3: Gabungkan string
let a = "Java";
let b = "Script";
// pakai concat
let wConcat = a.concat(" ", b);
console.log(wConcat);
// pakai plus
let wPls = a + " " + b;
console.log(wPls);
// pakai template literal
let wLiteral = `${a} ${b}`;
console.log(wLiteral);

// Soal 4: Manipulasi dan Potong string
let kalimat2 = "Aku sedang belajar JavaScript dasar";
// pakai slice
let wSlice = kalimat2.slice(11, 18);
console.log(wSlice);
// pakai substring
let wSub = kalimat2.substring(11, 18);
console.log(wSub);

// Soal 5: Pencarian dan Penggantian
let kalimat3 = "Saya suka buah apel, buah mangga, dan buah anggur.";
// Berapa index kemunculan pertama kata "buah"?
let cekIndex = kalimat3.indexOf("buah");
console.log(cekIndex);

// Apakah string "durian" ada dalam kalimat?
let cekInc = kalimat3.includes("durian");
console.log(cekInc);

// Ganti kata "anggur" menjadi "jeruk".
let ubahBuah = kalimat3.replace("anggur", "jeruk");
console.log(ubahBuah);

// soal 6: Title Case
let kalimat4 = "saya belajar JAVASCRIPT DI rumah";
let ubahKalimat = kalimat4.split(" ");

let hasil = ubahKalimat.map((ubahKalimat) => {
  return ubahKalimat[0].toUpperCase() + ubahKalimat.substring(1).toLowerCase();
}).join(" ");

console.log(hasil);

// soal 7 : Hitung jumlah kata
let kalimat5 = "Belajar JavaScript itu menyenangkan"
let hitungKata = kalimat5.split(" ").length;
console.log(hitungKata);

// soal 8: Potong dan Ganti
let teks = "Belajar string di JavaScript itu powerful";
// ambil kata
let ambilKata = teks.slice(17, 28);
console.log(ambilKata);
// ubahKata
let ubahKata2 = teks.replace("powerful", "menarik");
console.log(ubahKata2);

// soal 9: Cek dan Bersihkan Spasi
let kata = "     JavaScript     ";
// bersihkan Spasi
let delSpasi = kata.trim();
console.log(delSpasi);
// ubah huruf JavaScript
let ubahHuruf = kata.replace("j", "J");
console.log(ubahHuruf); // dari awal udah J besar

// soal 10: Gabungkan dan Ambil index 
let x = "Halo";
let y = "Dunia";
// Gabungkan
let wLiteral2 = `${x} ${y}`;
console.log(wLiteral2);
// cari index huruf "n"
let findIndex = wLiteral2.indexOf("n");
console.log(findIndex);