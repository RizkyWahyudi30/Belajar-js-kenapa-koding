/**
 * Operator : 
 * 
 * 1. Operator Aritmatika
 * 2. Operator Assignment
 * 3. Operator Perbandingan
 * 4. Operator logika
 * 5. Operator Ternary
 * 
 */
 
 // Operator Aritmatika
let x = 5;
let y = 15;
 
 // Penjumlahan
 let sum = x + y;
 console.log(sum, typeof sum);
 
 // Pengurangan 
 let diff = x - y;
 console.log(diff, typeof diff);
 
 // Perkalian 
 let multi = x * y;
 console.log(multi, typeof multi);
 
 // Pembagian 
 let divi = x / y;
 console.log(divi, typeof divi);
 
 // Modulus
 let modul = x % y;
 console.log(modul, typeof modul);
 
 // Eksponen
 let expon = x ** y;
 console.log(expon, typeof expon);
 
 // Increment 
 let incre = x;
 incre++;
 console.log(incre);
 
 // Decrement
 let decre = y;
 decre--;
 console.log(decre);
 
 
 // Operator Assignment
 let a = 4;
 let b = 5;
 
 // Assigment dasar (=)
 let dasar = "Lilulu";
 console.log(dasar);
 
 // Assigment penjumlahan (+=)
 let jumlah = a;
 a += b;
 console.log(a);
 
 // Assigment pengurangan (-=)
 let kurang = a;
 a -= b;
 console.log(a);
 
 // Assigment perkalian (*=)
 let kali = a;
 a *= b;
 console.log(a);
 
 // Assigment pembagian (/=)
 let bagi = b;
 b /= a;
 console.log(b);
 
 // Assigment modulus (%=)
 let modulus = b;
 b %= a;
 console.log(b);
 
 
 
 // Operator Perbandingan (Comparison)
 
 // == (Sama dengan, mengcek nilai)
 let satu = 16;
 let cek1 = satu == "16";
 console.log(cek1); // output nya true, karena value / nilainya Sama
 
 // === (Sama dengan secara ketat, mengecek nilai dan tipe data)
 // pakai variable satu
 let cek2 = satu === "16";
 console.log(cek2); // false, karena, tipe data nya berbeda walaupun value nya Sama
 
 // != (Tidak sama dengan) 
 let cek3 = satu != "16";
 console.log(cek3); // false, karena, value nya sama walaupun tipe data nya berbeda
 
 // !== (Tidak samq dengan lebih ketat)
 let cek4 = satu !== "16";
 console.log(cek4); // true
 
 // > (lebih besar dari)
 let hasil1 = satu > 13;
 console.log(hasil1);
 
 // < (Lebih kecil dari)
 let hasil2 = satu < 12;
 console.log(hasil2);
 
 // >= (Lebih besar dari sama dengan)
 let hasil3 = satu >= 16;
 console.log(hasil3);
 
 // <= (Lebih kecim dari sama dengan)
 let hasil4 = satu <= 16;
 console.log(hasil4);
 
 // Bedanya yang ada sama dengannya dan yang engga ada itu, contoh nya ;
 let nEqual = 15 > 15;
 console.log(nEqual); // false, karena 15 tidak lebih besar dari 15
 // tapi jika dengan sama dengan :
 let wEqual = 15 >= 15;
 console.log(wEqual); // true, karna operator ini menghitung dari nilai yang sama nya
 
 
 
 
 // Operator logika
 
 // && (AND: Menghasilkan true jika kedua operand true)
 let and1 = true;
 let and2 = true;
 let resultAnd = and1 && and2; // keduanya harus true jika ingin outputnya true
 console.log(resultAnd); 
 
 // || (OR: Menghasilkan true jika salah satu operand true)
 let or1 = true;
 let or2 = false;
 let resultOr = or1 || or2; // hanya butuh satu operand untuk bernilai true;
 // tapi jika dua dua nya true, juga akan true
 console.log(resultOr);
 
 // ! (NOT: Membalikkan nilai boolean operand)
 let e = 6;
 let nResult = !e;
 console.log(nResult);
 
 
 // Operasi Ternary
 // simpelnya, penyederhanaan kode if else
 let age = 16;
 let checkAge = (age >= 15) ? "Remaja" : "Anak Anak";
 console.log(checkAge);