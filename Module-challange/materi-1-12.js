/**
 * 
 * Latihan materi 1 sampai 12
 * 
 * variable, tipe data, type conversion, operator, string, number, math object, date object, arrays, object dan if else statements
 * 
 */
 
 // 1. Variable dan Tipe data 
 let nama = "Kiryu divisix"; // string 
 let umur = 27; // number 
 let isStudent = false; // boolean
 
 // 2. Type Conversion 
 let tahunLahir = "2006";
// menggunakan Number():
let toNum1 = Number(tahunLahir);
console.log(toNum1);

// menggunakaan parseInt():
let toNum2 = parseInt(tahunLahir);
console.log(toNum2);

// kurangi tahun 
let tahunSekarang = 2025
let kurangTahun = tahunSekarang - tahunLahir;
console.log(kurangTahun);

// 3. Operator (Aritmatika, Perbandingan, Logika)
let nilaiUjian = 78;

if (nilaiUjian > 75) {
  console.log("Lulus");
} else {
  console.log("Tidak lulus"); // jika nilai 75, maka tidak akan lulus
}

// 4. String 
let fullName = "Rizky Wahyudi";
// soalnya :
console.log(fullName.length); // menghitung panjang nya 
console.log(fullName.slice(0, 5)); // mengambil nama Depan "Rizky"
console.log(fullName.slice(6, 13)); // mengambil nama belakang "Wahyudi"
console.log(fullName.toLowerCase()); // membuat kalimat nya menjadi kecil
console.log(fullName.toUpperCase()); // membuat kalimatnya menjadi besar

// 5. Number 
let angka1 = 10;
let angka2 = "5";

let ubahAngka = parseInt(angka2); // ubah ke tipe data number 
console.log(angka1 + ubahAngka); // 15

// 6. Math object
// membulatkan kebawah 
let bulatKebawah = 4.7;
console.log(Math.floor(bulatKebawah)); // 4

// maksa membulatkan keatas 
let bulatKeatas = 4.3; 
console.log(Math.ceil(bulatKeatas)); // 5

// memcari angka terbesar 
console.log(Math.max(12, 43, 3, 19, 100)); // 100

// menghasilkan angka random 1 - 10 
console.log(Math.round(Math.random() * 10)); // * 10 agar angka nya tidak melebihi dari batas 10 

// 7. Date Object 
let now = new Date();
console.log(now); // tanggal dan waktu saat ini 

// tahun sekarang 
let yearNow = now.getFullYear(); 
console.log(yearNow); // 2025

// bulan sekarang 
let month = now.getMonth();
console.log(month); // 6 

// hari 
let days = now.getDay();
console.log(days);

// 8. Array
let buah = ["apel", "jeruk", "mangga"];
// menambah elemen baru 
buah.push("pisang");
console.log(buah);

// hapus item pertama 
buah.shift(); 
console.log(buah);

// tampilkan jumlah iem 
console.log(buah.length); // 3 item 

// gabung semua item menjadi string, dan pisah dengan koma 
console.log(buah.join());

// 9. Object 
let siswa = {
  nama: "Nino",
  umur: 18,
  kelas: "10 - 2",
  isActive: true,
};
console.log(siswa.nama); // manggil value dari key nama 
console.log(siswa.kelas); // manggil value dari key kelas 

// 10. If-else statements 
let suhu = 32;

if (suhu >= 30) {
  console.log("Panas");
} else if (suhu >= 20) {
  console.log("Sejuk");
} else {
  console.log("Dingin");
}