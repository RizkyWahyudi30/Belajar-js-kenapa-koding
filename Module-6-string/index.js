/**
 * String
 * 
 * 
 */
 
 // Ada tiga tipe String :
 // 1. Dengan single quote
 let str1 = 'Ini single quote';
 console.log(str1);
 // 2. Dengan double quote
 let str2 = "Ini double quote";
 console.log(str2);
 // 3. Dengan backtic
 let str3 = `Ini backtic`;
 console.log(str3);
 
 // Kita juga bisa mengakses kata di string kalimat dengan seperti Ini
 let str4 = "Ini Javascript"; // index dimulai dari 0
 console.log(str4[4]); // "J"
 console.log(str4[7]); // "a"
 
 // == Property dan Method di string ==
 // 1. Length: menghitung panjang String
 let examStr = "Javascript is Fun";
 console.log(examStr.length);
 
 // 2. toUpperCase: menjadikan huruf besar
 console.log(examStr.toUpperCase());
 
 // 3. toLowerCase: menjadikan huruf kecil
 console.log(examStr.toLowerCase());
 
 // 4. trim: menghapus spasi di dalam String
 let testTrim = "Javascript       s       ";
 let fixWTrim = testTrim.trim();
 console.log(fixWTrim); // bagian antara Javascript dan s tidak akan dihapus, karena itu dibaca merupakan bagian dari javascript
 
 
 
 // == Manipulasi string ==
 
 // Menggabungkan string, dengan cara :
 // 1. Menggunakan method concat()
 let vStr1 = "Hello";
 let vStr2 = "World";
 let wCon = vStr1.concat(vStr2);
 console.log(wCon); 
 
 // 2. Memggunakan tanda + dan string kosong
 let wPls = vStr1 + " " + vStr2;
 console.log(wPls);
 
 // 3. Dengan template literal
 let wLiteral = `${vStr1} ${vStr2}`;
 console.log(wLiteral);
 
 
 // == Mengambil bagian dari string berdasarkan indeks ==
 let testStr = "Hello everyone, im Kiru";
 // 1. Menggunakan slice()
 let wSlice = testStr.slice(4, 7);
 console.log(wSlice);
 
 // 2. Menggunakan subString()
 let wSubStr = testStr.substring(6, 8);
 console.log(wSubStr);
 
 
 // == Mengganti bagian string dengan string baru ==
 let conStr = testStr.replace("Kiru", "Yuuta");
 console.log(conStr);
 
 
 // == Membagi sebuah string menjadi array berdasarkan separator yang diberikan ==
 let conSplit = testStr.split(" ");
 console.log(conSplit);
 // kita juga bisa atur limit array nya
 let conSplitLimit = testStr.split(" ", 3);
 console.log(conSplitLimit);
 
 // Menggabungkan semua elemen dalam array menjadi sebuah string
 let arrJoin = ["Banana", "Pineaplle", "Star Fruit", "Apel"];
 let conJoin = arrJoin.join();
 console.log(conJoin);
 
 
 // == Pencarian dalam String ==
 // 1. indexOf(): memgembalikkan index dari kemunculan pertama substring dalam string, atau -1 jika tidak ditemukan
 let testStr2 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus similique facere ea temporibus iusto dolorum perferendis, repudiandae suscipit eligendi. Ratione?";
 let cekIndex = testStr2.indexOf("dolor");
 console.log(cekIndex); // 
 // jika tidak ada, maka akan -1 :
 let cekIndex2 = testStr2.indexOf("Dolor"); // huruf D nya besar
 console.log(cekIndex2); // maka akan -1
 
 // 2. lastIndexOf(): memgembalikkan index dari kemunculan terakhir substring dalam string
 let testLastIndex = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus similique facere ea temporibus iusto dolorum perferendis, repudiandae suscipit eligendi. Ratione?"
 let lastIndex = testLastIndex.lastIndexOf("dolor");
 console.log(lastIndex);
 
 // 3. includes(): mengecek apakah ada substring tersebut dalam string dan akan mengembalikkan nilai true or false
 let cekInc = testLastIndex.includes("dolor");
 console.log(cekInc);