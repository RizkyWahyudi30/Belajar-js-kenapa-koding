/**
 * 
 * Object
 * 
 * Memiliki Elemen yang didalamnya terdapat key: value atau disebutnya juga properti
 * 
 * Object dibuat juga dengan kurung kurawal
 *
 */
 // syntax object dasar
 let examObj = {
   nama: "Rizky Wahyudi",
   umur: 17,
   status: "Pelajar SMK",
   isActive: true,
   "jurusan kesukaan": "Komputer", // ini contoh untuk bracket notation
 };
 // Cara aksss 
 console.log(examObj); // ini untuk memanggil semuanya
 console.log(examObj.nama); // ngambil value dari key->nama 
 // bisa juga dengan kurung bracket / notation bracket
 console.log(examObj["jurusan kesukaan"]);
 //-->Notation bracket berguna jika nama properti memgandung spasi atau kalimat khusus
 
 // Kita juga bisa membuatnya dengan Constructor -> new Object()
 let consObj = new Object();
 consObj.penulis = "Rizky Wahyudi";
 consObj.penerbit = "Kyuuru Devsio";
 consObj.tahunTerbit = 2008;
 console.log(consObj);
 
 // Menambah, memgganti ataupun menghapusnya
 // --> untuk menambah atau mengganti sama seperti diatas
 // menambah:
 consObj.jurusan = "Teknik Komputer dan Jaringan";
 // memgganti:
 consObj.tahunTerbit = 2021;
 // menghapus:
 delete consObj.penulis;
 
 console.log(consObj);
 
 //= Destructing Object 
 // fitur ES6 yang memungkinkan untuk untuk mengambil nilai dari object dan menempatkannya dalam variabel
 let dataSiswa = {
   nama: "Kiryuu Devisiox",
   umur: 17,
   status: "Siswa SMK",
   jurusan: "Teknik Komputer"
 };
 // Deztructing :
 let { nama, umur } = dataSiswa;
 
 console.log(nama);
 console.log(umur);
 
 //= Nested Object 
 let nestedObj = {
   username: "Kiryuu Devistix",
   hobby: {
     first: "Coding",
     Second: "Running",
     Third: "Armwrestling",
   },
 };
 console.log(nestedObj)