/**
 * Materi: 
 * 
 * 1. Function Expression
 * 2. Arrow Functions 
 * 
 */

 // Function Expression 
 // Kita juga bisa membuat function ekspresi, dimana function disimpan dalam variable 
 let jumlah = function(a, b) {
   return a + b;
 }
 console.log(jumlah(5,7)); // 12
 
 // Arrow function 
 // dengan arrow function, kita bisa menyingkat kode diatas 
 let jumlah2 = (a, b) => {
   return a + b;
 }
 console.log(jumlah2(3,7)); // 10
 // jika statements nya hanya satu dan menggunakan return, kita bida memyingkat nya menjadi seperti ini; 
 let jumlah3 = (a, b) => a + b;
 console.log(jumlah3(2,3)); // 5