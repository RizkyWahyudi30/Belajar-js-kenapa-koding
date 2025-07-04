// Kita bisa mengecek tipe data apa dengan typeof 
// =========================================== //

// Tipe data Primitif :

// String : text berada di dalam single quote atau double quote
let typeStr = "Ini adalah contoh tipe data String";
console.log(typeStr, typeof typeStr);


// Number : berupa angka, bisa angka bulat ataupun desimal
let typeNum1 = 17; // ini angka bulat
console.log(typeNum1, typeof typeNum1);
let typeNum2 = 6.82; // ini angka desimal
console.log(typeNum2, typeof typeNum2);

// Boolean : ada dua, yaitu true atau false
let typeBool1 = true; 
console.log(typeBool1, typeof typeBool1);
let typeBool2 = false;
console.log(typeBool2, typeof typeBool2);

// Undefined : tipe data yang belum didefinisikan
let typeUnd;
console.log(typeof typeUnd);
// jika ingin menggunakan tipe data undefined, maka variable nya jangan pakai const, karena tidak akan bisa

// Null : tipe data kosong
let typeNull = null; // ==> kalau dibuka di terminal atau cek di inspect website, maka akan berbentuk tipe data object, tapi sebenarnya itu adalah null (jika kita definisikan null)
console.log(typeNull);

// Symbol : tipe data yang tidak bisa diduplikasi
let typeSym1 = Symbol("id");
console.log(String(typeSym1), typeof typeSym1);
let typeSym2 = Symbol("id");
console.log(String(typeSym2), typeof typeSym2);

// kalo di vscode tidak perlu di convert ke string, ini emang masalah acodenya aja

// kita cek dengan strict equality operator (===)
console.log(typeSym1 === typeSym2); // karena dari javascript sendiri, setiap tipe data symbol memiliki ID yang berada

// bigInt : sebenarnya sama aja kayak number, cuman ini angkanya banyak
let typeBigInt = 273829384729389n;
console.log(typeBigInt, typeof typeBigInt);




// Tipe data reference ;

// Object : tipe data yang bisa memcakup tipe data primitif, tapi dibungkus oleh kurung kurawal {}
let typeObj = {
  nama: "Rizky Wahyudi",
  umur: 17,
  status: "pelajar",
  isActive: true
}; 
console.log(typeObj, typeof typeObj);

// Array : dibungkus dengan kurung kotak []
let typeArr = ["Kata satu", 13.4, true];
console.log(typeArr, typeof typeArr);

// function : tipe data seperti ini
function sayHello() {
  return "Halo ini wahyu";
}
console.log(sayHello, typeof sayHello); // tapi ini cuman untuk nunjukin tipe datanya

// kalau begini, nanti dia akan bertipe data string
console.log(sayHello(), typeof sayHello());

// ** Perbedaan tipe data primitif dan tipe data reference ** 

// tipe data Primitif
let a = 5;
let b = a;

// kita ganti nilai a 
a = 10;

console.log(b); // outputnya akan 5
// karena tipe data primitif itu hanya akan menyalin nilai dari variablenya

// tipe data reference
let obj1 = {
  nama: "wahyu",
  isActice: true,
};
let obj2 = obj1;
// kita ganti value dari nama 
obj1.nama = "rizky";

console.log(obj2); // nama nya akan berubah
// karena tipe data reference itu mengambil referensi dari variable nya, jadi jika key/value nya diubah, maka akan ikut berubah