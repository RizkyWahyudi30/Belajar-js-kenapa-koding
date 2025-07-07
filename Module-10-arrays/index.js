/**
 * Array 
 * 
 */
 
 //= Cara membuat Array
 // 1. Dengan notasi array literal atau kurunh bracket
 const examArr1 = ["Pisang", "Apel", "Durian", "Semangka"];
 console.log(examArr1);
 
 // 2. Dengan method new Array()
 const examArr2 = new Array("Labu", "Seledri", "Wortel", "Bawang");
 console.log(examArr2);
 
 // Kita juga bisa mengakses elemen array dengan memanggil indeks array nya
 console.log(examArr1[2]); // indeks dimulai dari 0
 console.log(examArr2[3]);
 
 // Kita juga bisa mengubah ataupun menambahkan array nya
 examArr1[1] = "Kelengkeng"; // mengganti indeks array "Apel"
 console.log(examArr1);
 
 examArr2[4] = "Kacang"; // menambah array kacang 
 console.log(examArr2);
 
 //= Manipulasi Javascript
 // javascript menyediakan method bawaan untuk Manipulasi
 let manipArr = new Array("Kucing", "Pisang", "Tirex", "Gunung");
 
 // 1. .push(): menambah elemen ke akhir array
 manipArr.push("Kacang Ijo");
 console.log(manipArr); // tambah kacang ijo
 
 // 2. .pop(): menghapus elemen terakhir array 
 manipArr.pop();
 console.log(manipArr); // memghapus kacang ijo
 
 // 3. .unshift(): menambah elemen ke awal array
 manipArr.unshift("Jus mangga");
 console.log(manipArr); // menambah jus mangga
 
 // 4. .shift(): menghapus elemen di awal array
 manipArr.shift();
 console.log(manipArr); // menghapus jus mangga
 
 // 5. .length: menghitung panjang (jumlah elemen) array
 // length ini bukan method, mama tidak perlu kurung
 let calcArr = manipArr.length;
 console.log(calcArr); // ini menghitung elemen nya
 
 // 6. .concat(): menggabungkan 2 atau lebih array
 // menggabungkan 2 array
 let wTwoArr = examArr1.concat(examArr2);
 console.log(wTwoArr);
 // lebih daei 2 array
 let examArr3 = ["Cengkeh", "Kemiri", "Jahe"];
 let moreThan = examArr1.concat(examArr2, examArr3);
 console.log(moreThan);
 
 // 7. .slice(): mengambil bagian tertentu dari array
 // kita bisa menggunakan method ini dengan 2 cara, start dan end
 // dengan .slice(start) -> include end
 let arrAnimals = ["Kucing", "Gajah", "Keledai", "Singa", "Harimau", "Banteng", "Kudanil", "Koala"];
 console.log(arrAnimals.slice(2)); // dimulai dari keledai hingga harimau 
 // dengan .slice(start, end) -> end nya bisa diatur
 console.log(arrAnimals.slice(3, 7));  // mulai dari singa hingga kudanil 
 // --> bisa juga dengan minus 
 console.log(arrAnimals.slice(-3));
 console.log(arrAnimals.slice(2, -1));
 
 // 8. .includes(): mengecek apakah elemen ada di dalam suatu array
 // menghasilkan true or false
 console.log(arrAnimals.includes("Kudanil")); // true
 // -> bagaimana jika kita menulis K nya dengan huruf kecil? hasiknya akan false
 console.log(arrAnimals.includes("kudanil"));
 
 // 9. .splice(): menambahkan atau menghapus elemen dari array 
 let negara = ["Indonesia", "Malaysia", "Singapura", "China", "Korea", "Rusia", "Arab", "Jepang"];
 // --> ada beberapa syntax dasar dari penggunaan method slice
 /**
  * 
  * splice(start); // 1
  * splice(start, deleteCount); // 2
  * splice(start, deleteCount, item1); // 3
  * splice(start, deleteCount, item1, item2); // 4
  * splice(start, deleteCount, item1, item2, ...., itemN); // 5
  * 
  */
  // Menghapus:
 negara.splice(1, 1);
 console.log(negara);
 // Menambahkan: 
 negara.splice(1, 0, "India"); // ini jiha bisa lebih dari 1 elemen, bisa 2, 3 atau seterusnya.. seperti diatas
 console.log(negara);
 // Mengganti dan menghapus:
 negara.splice(5, 2, "Palestina", "Iran"); // --> mulai dari indeks 5, nenghapus 2 item, dan sebagai gantinya 2 item
 console.log(negara);

// 10. .indexOf(): mencari indeks dari elemen tertentu 
let junkfood = ["mie goreng", "mie ayam", "nasi goreng", "burger", "hotdog", "pizza", "kebab"];
console.log(junkfood.indexOf("nasi goreng")); // indeks ke 2


//= Kita juga bisa membuat Multidimensional Array atau lebih sering dikenal Nested Array 
let num = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
console.log(num);