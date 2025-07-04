/** 
 *  Type Conversion
 * mengubah tipe data menjadi tipe data lain.
 * 
 * Ada dua jenis type nya : implicit (coersion) dan explicit
 * 
 * implicit : dilakukan langsung oleh javascript
 * explicit : kita sebagai developer yang mengubahnha
 */
 
 // Type: implicit
 
 let add = "10" + 3; // jika operator +, maka js akan menggabungkan nya, dan menjadi string
 console.log(add, typeof add);
 // bagaimana jika operator yang lain? Tidak bisa, string nya akan di konversi menjadi number. contoh :
 let subtract = "6" - 7;
 console.log(subtract, typeof subtract); // -1, number
 
 let multiply = "3" * 4;
 console.log(multiply, typeof multiply); // 12, number
 
 let divide = "10" / 2;
 console.log(divide, typeof divide); // 5, number
 
 
 // Type: explicit 
 
 let num = 123;
 let str = "458";
 let float = "382.88"
 
 // conversi ke string, 2 cara :
 let numToStr1 = String(num); // cara 1
 console.log(numToStr1, typeof numToStr1);
 let numToStr2 = num.toString(); // cara 2
 console.log(numToStr2, typeof numToStr2);
 
 // conversi ke number :
 let strToInt = parseInt(str); // jika number bulat
 console.log(strToInt, typeof strToInt);
 let strToFloat = parseFloat(float); // jika number desimal
 console.log(strToFloat, typeof strToFloat);
 
 