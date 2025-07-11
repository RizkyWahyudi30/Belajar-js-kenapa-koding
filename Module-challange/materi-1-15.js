/**
 * 
 * Soal dari GPT 
 * 
 */
 
 // 1. Validasi Data Input Pengguna (String, Type Conversion, If-Else)
let nama = "Rizky Wahyudi";
let umur = "17"; // string
let email = "rizky@gmail.com";
// konversi umur ke number:
let convertUmur = parseInt(umur); 
console.log(convertUmur); // cek 
// pengkondisian :
// cek nama 
if (nama === ""){
  console.log("Isi nama kamu");
} else if (isNaN(convertUmur) || convertUmur < 17) { // memastikan bahwa umur >= 17
  console.log("Umur kamu dibawah 17");
} else if (!email.includes("@") || !email.includes(".")) {
  console.log("Email tidak valid");
} else {
  console.log("Valid");
}


// 2. Penghitungan Pajak Otomatis (Function, Operator, If-Else) 
// menggunakan arrow function 
const pajak = (gaji) => {
  if (gaji < 5000000) {
    return gaji * 0.05;
  } else if (gaji <= 10000000) {
    return gaji * 0.10;
  } else {
    return gaji * 0.15;
  }
}
console.log(pajak(60000000)); // 9.000.000


// 3. Format Data Tanggal Daftar (Date Object, String)
let date = new Date();
// setting
let setDay = date.getDate(); // 10 
let setMonth = date.toLocaleString('default', { month: 'long'}); // 
let setYear = date.getFullYear(); // 2025 
// console.log(setMonth);
let formatData = `User mendaftar pada ${setDay} ${setMonth} ${setYear}`;
console.log(formatData);

// 4. Dashboard Pesanan (Array, Object, Looping)
let pesanan = [
  { nama: "Buku", qty: 2, harga: 30000 },
  { nama: "Pulpen", qty: 5, harga: 5000 },
  { nama: "Penggaris", qty: 1, harga: 10000 },
];
// hitung semua harga pesanan 
pesanan.forEach(item => {
  console.log()
})