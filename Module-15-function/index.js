/**
 * 
 * Function: membagi beberapa code agar lebih mudah
 * 
 */
 // syntax dasar Function
 function sayHello() {
   console.log("Hello world");
 }
 sayHello(); // hello world 
 
 // kita juga bisa ngasih paramater dan argumen
 // contoh 1: 
 function sayName(nama){ // nama = parameter
    console.log(`Hello saya, ${nama}`);
 }
 sayName("wahyu"); // wahyu = argumen 
 // contoh 2: 
 function countNum(num){
   console.log(num * num);
 }
 countNum(3); // 9
 // juga bisa ngasih lebih dari 1 parameter 
 function counting(num1, num2){
   console.log(num1 + num2);
 }
 counting(2, 4); // 6
 
 
 // Selain itu, kita bisa menggunakan return
 // tapi jika function menggunakan return, kode setelah nya tidsj akan dijalankan
 function text(name){
   return `hello, im ${name}`;
   console.log("kiryy"); // tidak akan tereksekusi
 }
 console.log(text("wahyu")); 
 
 
 