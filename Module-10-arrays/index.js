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