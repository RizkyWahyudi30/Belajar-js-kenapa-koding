/**
 * 
 * Recursion 
 * 
 * 1. Base case 
 * 2. Recursive case 
 */
 // Ketika sebuah function memamggil diri nya sendiri secara langsung atau tidsk langsung untuk menyelesaikan masalah yang diberikan. 
 
 // Struktur Recursion 
 // 1. Base case: bagian dari function yang menghentikan recursion. Dimana masalah tidak lagi memerlukan panggilan function secara rekursif 
 // 2. Recursive case: bagian dari function yang memecah masalah menjadi sub-masalah yang lebih kecil dan memanggil diri nya sendiri 
 
 // Contoh nya adalah recursivev Faktorial n! 
 // Faktorial dari n ditulis sebagai n!. Jika n = 5, maka: 
 function faktorial(n) {
   // Base case 
   if (n === 0) {
     return 1; // dikali 1 
   }
   // recursive base 
   console.log(n)
   return n * faktorial(n-1); 
 }
 console.log(faktorial(5));
 
 // Jadi cara jalannya seperti ini :
 // 1. Kita memasukkan argumen = 5;
 // 2. Lalu, argumen masuk ke function parameter nya (n), di dalam function, lalu dieksekusi dengan recursive                         di recursive, n * faktorial -->  n = 5 lalu dikuranv 1 = 4     
 // 3. Setelah itu, cek ke base case, jika angka nya belum memenuhi kondisi di dalam if, maka akan lanjut lagi dsn terus mengulamg hingga n === 0 
 
 