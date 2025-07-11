// Soal dari GPT 

// Latihan 1: Prediksi Output (Konversi Otomatis) 
console.log('5' - 3); // hasilnya jadi 2 (number)
console.log('5' + 3); // hasilnya jadi 53 (string)
console.log('5' * '2'); // hasilnya jadi 10 (number) 
console.log('10' / '2');// hasilnya jadi 5 (number)
console.log('abc' * 2); // NaN  
console.log(true + 1); // hasilnya jadi 2 (number)
console.log(false + '5'); // hasilmya jadi false5 (string)

// Latihan 2: Manual Type Conversion 
let angka = "123";
let teks = 456;
let bool = 0;

// Ubah angka menjadi number
let hasil1 = Number(angka);

// Ubah teks menjadi string
let hasil2 = String(teks);

// Ubah bool menjadi boolean
let hasil3 = Boolean(bool);

console.log(hasil1); // 123
console.log(hasil2); // "456"
console.log(hasil3); // ==> jadi false 

// Latihan 3: Buat Fungsi Konversi 
function convertAll(input) {
  // Konversi ke Number, String, dan Boolean
  return {
    asNumber: Number(input),
    asString: String(input),
    asBoolean: Boolean(input)
  };
}

console.log(convertAll("0"));
// masuk ke asNumber = 0, masuk ke asBoolean = false 
console.log(convertAll(1));
// masuk ke asString = "1", masuk ke asBoolean = true
console.log(convertAll(""));
// masuk ke asBoolean = false 
console.log(convertAll(null));
// masuk ke asBoolean = false 

// Latihan 4: Truthy dan Falsy 
console.log(Boolean(0)); // hasilnya jadi false 
console.log(Boolean('')); //  false 
console.log(Boolean('false')); // true ==> karena string bernilai true 
console.log(Boolean([])); // true ==> truthy 
console.log(Boolean({})); // true ==> truthy 
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false 

// Latihan 5: Konversi dalam Operasi 
let x = "10";
let y = 2;

let hasil = x / y + true; // 6
console.log(hasil);




// MINI QUIZ 
// Soal 1: Konversi & Operasi Campuran 
let input1 = "7";
let input2 = true; 
// penyelesaian masalah 1 
console.log(input1 + input2); // "7true"
// penyelesaian masalah 2 
console.log(Number(input1) + Number(input2)); // 8 
// penyelesaian masalah 3 
console.log(Boolean(input2)); // true 

// Soal 2: Menebak Jenis dan Nilai Setelah Konversi 
let a = "";
let b = "false";
let c = [];
let d = {};
let e = null;
let f = undefined;

// nilai a 
let aKonversi = `Nilai a: 
Number: ${Number(a)}, 
Boolean: ${Boolean(a)},
Tipe Number: ${typeof Number(a)}
`;
console.log(aKonversi)

// nilai b
let bKonversi = `Nilai b: 
Number: ${Number(b)}, 
Boolean: ${Boolean(b)},
Tipe Number: ${typeof Number(b)}
`;
console.log(bKonversi) 

// nilai c 
let cKonversi = `Nilai c: 
Number: ${Number(c)}, 
Boolean: ${Boolean(c)},
Tipe Number: ${typeof Number(c)}
`;
console.log(cKonversi) 

// nilai d 
let dKonversi = `Nilai ald: 
Number: ${Number(d)}, 
Boolean: ${Boolean(d)},
Tipe Number: ${typeof Number(d)}
`;
console.log(dKonversi) 

// nilai e 
let eKonversi = `Nilai e: 
Number: ${Number(e)}, 
Boolean: ${Boolean(e)},
Tipe Number: ${typeof Number(e)}
`;
console.log(eKonversi) 

// nilai f
let fKonversi = `Nilai f: 
Number: ${Number(f)}, 
Boolean: ${Boolean(f)},
Tipe Number: ${typeof Number(f)}
`;
console.log(fKonversi)


// 3. Soal 3 (versi variabel baru): Operasi Campuran & Prediksi Nilai 
let xI = "10";
let yI = 2;
let zI = false;
let wI = null;
// soal nya 
let ans1 = xI + yI; // 102 (string)
console.log(ans1); // karena string ditambah dengan number
let ans2 = xI - yI; // 8 (number)
console.log(ans2); // karena string dikurang dengan number 
let ans3 = yI + zI; // 2 (number) 
console.log(ans3); // karena false = 0, jadi 2 - 0 = 2, tetap 
let ans4 = wI + xI; // null10 (string)
console.log(ans4); // karena string bertemu dengan null 
let ans5 = zI + wI; // 0 (number)
console.log(ans5); // karena false = 0


// Soal 4: Tebak Hasil dan Tipe Data 
// contoh 
let contoh = "5" * 2;
console.log(contoh, typeof contoh); // 10, number 

// soal 
let s1 = "5" * null;
console.log(s1, typeof s1); // 5 * 0 = 0 (number)
let s2 = "true" == true;
console.log(s2, typeof s2);
let s3 = "0" == false; // string true tidak sama dengan boolean true
console.log(s3, typeof s3);
let s4 = [] == false; // 
console.log(s4, typeof s4);
let s5 = {} + [];
console.log(s5, typeof s5);
let s6 = [] + {}; 
console.log(s6, typeof s6)