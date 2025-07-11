// SOAL GPT 

// 1. Aritmatika dasar 
let a = 10;
let b = 3;
let hasil = a % b + a / b; 
// modulus 10 dan 3 = 1, ditambah 10 = 11, dibagi 3 = 4,3 
console.log(hasil);

// 2. Perbandingan Ketat vs Longgar 
let x = "5";
let y = 5;
// hanya membandingkan value nya 
console.log(x == y);   // true 
// membadingkan value dan tipe data nya 
console.log(x === y);  // false 

// 3. Logika kombinasi 
let nilai = 70;
let lulus = nilai >= 60; // nilai lebih besar dari 60 = true 
let hadir = true;
console.log(lulus && hadir); // true 

// 4. Ternary Operator 
// bentuk penyederhanaan if else statements 
let usia = 17;
let status = usia >= 18 ? "Dewasa" : "Anak-anak"; 
console.log(status); // anak anak, karena usia dibawah 18 

// 5. Penugasan bertingkat 
let nilaiA = 5;
nilaiA *= 2 + 3;
console.log(nilaiA); // 25, karena nilai A = 5, lalu dikali dengan 2 + 3 = 5

// 6. Operator Logika di dalam Ternary 
let isLogin = false;
let isAdmin = true;
let akses = isLogin && isAdmin ? "Full Akses" : "Tidak Diizinkan";
console.log(akses); // false, karena false, maka tidak diizinkan
// operator && true jika kedua nya true 

// 7. Kombinasi NOT dan Perbandingan
let umur = 20;
let bolehMasuk = !(umur < 18);
console.log(bolehMasuk); // true 
// awalnya umur < 18 = false, tapi diubah dengan operator NOT 

// 8. Prioritas Operator 
let result = 3 + 4 * 2 ** 2;
console.log(result); // 19 
// menjalankan pangkat, lalu kali dan terakhir baru ditambah 

// 9.  Soal Logika Kompleks 
let p = true;
let q = false;
let r = true;
console.log((p && q) || !r); // false 
// p && q = false, lalu false || false = false 

// 10. Ternary Bertingkat (Nested) 
let skor = 85;
let kategori = skor >= 90 ? "A" :
               skor >= 80 ? "B" :
               skor >= 70 ? "C" : "D";
console.log(kategori); // B 

// 11. Gabungan increment, logika, dan aritmatika 
let aX = 5;
let bX = aX++ * 2 + --aX;
console.log(bX); // 15 
// karena aX++ = 5 * 2 = 10, dan + --aX = 5, jadi 10 + 5 = 15 

// 12. Ternary bertingkat dengan kondisi logika kompleks 
let umur2 = 25;
let aktif2 = false;
let status2 = umur2 < 18 ? "Anak-anak" :
             umur2 < 30 && aktif2 ? "Dewasa Aktif" :
             "Dewasa Tidak Aktif";
console.log(status2); // "Dewasa Tidak Aktif"
// karena umur nya 25 dan tidak aktif = false 

// 13. Operator logika dengan string kosong dan array 
let x2 = "" || [] && "Halo";
console.log(x2); // "halo" (string)
// Karena .. 

// 14. Short-circuit dan efek samping 
let nilai2 = 0;
let log = nilai2++ || ++nilai2;
console.log(log); // 2 
// Karena .. 

// 15. Nested ternary + operator logika 
let x = 10;
let y = 20;
let hasil = x > y ? "X lebih besar" :
            x === y ? "Sama" :
            x < y && x > 5 ? "X lebih kecil dan lebih dari 5" :
            "Tidak memenuhi";
console.log(hasil); // "X lebih kecil dan lebih dari 5"
// Karena kondisi ke tiga sesuai 

