/**
 * 
 * Jenis jenis Number
 * 
 * Dan properti pada objek number
 */
 
 // Jenis number
 const bilanganBulat = 26;
 const bilanganPecahan = 28.4; // atau float 
 const bilanganNegatif = -78;
 const bilanganInfinity = Infinity; // bisa minus juga
 const notANumber = NaN; 
 
 // Properti pada objek number:
 // 1. Number.MAX_VALUE
 console.log(Number.MAX_VALUE);
 
 // 2. Number.MIN_VALUE
 console.log(Number.MIN_VALUE);
 
 // 3. Number.POSITIVE_INFINITY
 console.log(Number.POSITIVE_INFINITY);
 
 // 4. Number.NEGATIVE_INFINITY
 console.log(Number.NEGATIVE_INFINITY);
 
 // 5. Number.NaN
 console.log(Number.NaN);
 
 
 // == Metode Bawaan ==
 
 // 1. toString(): mengubah angka menjadi data String
 let num = 282.12;
 let toStr = num.toString();
 console.log(toStr, typeof toStr);
 
 // 2. toFixed(digits): mengubah angka menjadi string dengan jumlah digit desimal yang ditentukan
 let floating = 23.182838;
 let fixFloat = floating.toFixed(4); // angka dibelakang koma
 console.log(fixFloat, typeof fixFloat);
 
 // 3. toPrecision(digits): mengubah angka menjadi strring dengan panjang total yang ditentukan
 let digits = 2.137;
 let preDigits = digits.toPrecision(3); // menghitung seluruh angka, termasuk di depan koma
 
 // 4. parseInt() dan parseFloat(): mengubah string menjadi angka integer atau float 
 let numInt = "3728";
 let intToNum = parseInt(numInt);
 console.log(intToNum, typeof intToNum);
 
let numFloat = "56.2928";
let floToNum = parseFloat(numFloat);
console.log(floToNum, typeof floToNum);