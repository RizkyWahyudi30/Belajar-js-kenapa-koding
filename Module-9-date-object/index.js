/**
 * 
 * Date object 
 */
 
 // Membuat date object
 // Bulan dimulai dari 0
 // hari dimulai dari 1 hari senin, dan hari mimggu adalah 0
 
 // Tanggal dan waktu saat ini:
 let now = new Date();
 console.log(now); // 2025-07-06T02:48:25.963Z --> buka nya di termux, di console acode engga bisa
 
 // Menggunakan string 
 // bisa juga dibuat spesific
 let spesificDate = new Date("November 28, 2007, 14:22:17");
 console.log(spesificDate); // 2007-11-28T07:22:17.000Z
 
 // Memggunakan parameter (tahun, bulan, hari, jam, menit, detik, milidetik)
 let customDate = new Date(2021, 3, 30, 10,30);
 console.log(customDate); // 2021-04-30T03:30:00.000Z
 
 // Memgambil informasi tanggal dan waktu 
 // menggunakan beberapa method
 let today = new Date();
 // method untuk mendapatkan tahun sekarang
 console.log(today.getFullYear());
 // method untuk mendapatkan bulan sekarang
 console.log(today.getMonth());
 // untuk mendapatkan tanggal sekarang
 console.log(today.getDate());
 // untuk mendapatkan hari ini
 console.log(today.getDay());
 // method untuk memdapatkan jam 
 console.log(today.getHours());
 // method untuk mendapatkan menit
 console.log(today.getMinutes());
 // method untuk medapatkan detik
 console.log(today.getSeconds())
 // method untuk mendapatkan milidetik
 console.log(today.getMilliseconds());
 // mendapatkan jam tapi dalam berbentuk milidetik  
 console.log(today.getTime());
 
 // Mengatur tanggal dan waktu
 // kita bisa nengatur method method diatas dengan method dibawah ini:
 let Iday = new Date();
 // mengatur tahun
 Iday.setFullYear(2025);
 
 // nengatur bulan
 Iday.setMonth(3);
 
 // mengatur tanggal 
 Iday.setDate(13);
 console.log(Iday);
 
// Perhitungan Waktu 
// kita bisa nenghitung waktu lewat cara seperti ini:
let startDate = new Date(2025, 3, 15, 10, 33);
let endDate = new Date(2025, 10, 9, 10, 33);

// cata 1 
let calcDate1 = endDate - startDate;
console.log(calcDate1); // cara diatas akan menampilkan  waktu dalam bentuk milidetik

// cara 2
let calcDate2 = calcDate1 / (1000 * 3600 * 24);
console.log(calcDate2);