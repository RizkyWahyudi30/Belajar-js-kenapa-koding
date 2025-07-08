/**
 * 
 * if-else statement
 * 
 * 
 */

 let nilai = 79;
 // contoh syntax dasar
 if (nilai >= 90){
   console.log("Nilai kamu diatas 90");
 } else {
   console.log("Nilai kamu dibawah 90");
 }; 
 
 // --> jika ingin membuat kondisi lain, bisa memakai if else-if atau memeriksa beberapa kondisi secara berurutan 
 if (nilai >= 90){
   console.log("Kamu mendapat Grade A!");
 } else if (nilai >= 80){
   console.log("Kamu mendapat Grade B!");
 } else if (nilai >= 70){
   console.log("Kamu mendapat Grade C!");
 } else if (nilai >= 60){
   console.log("Kamu mendapat Grade D!");
 } else if (nilai >= 50){
   console.log("Kamu mendapat Grade E!");
 } else {
   console.log("Nilai kamu kecil banget deh");
 }
 
 //= kita juga bisa membuat nwsted if else:
 if(nilai > 0){
   // ini akan running ketika kondisi if diatas benar, jika tidsk maka akan langsung kebawah
   if(nilai % 2 == 0){
     console.log("Nilai mu, memiliki angka positif dan genap");
   } else {
     console.log("Nilai mu, memiliki angka positif dan ganjil");
   }
 // kesini
 } else {
   console.log("Angka mu negatif");
 }
 
 