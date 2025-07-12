// SOAL GPT

// 1. Buatlah variabel berisi nama lengkapmu, lalu tampilkan:
let nama = "Senia Nokushe";
console.log(nama.length); // 13

// 2. Dari string "Javascript", tampilkan:
let jsText = "Javascript";
// console.log(jsText.length);
console.log(jsText[0]); // huruf pertama -> "J"
console.log(jsText[9]); // huruf terakhir -> "t"

// 3. Ubah string "belajar javascript" menjadi huruf besar semua, dan tampilkan hasilnya.
let kalimatJs = "belajar javascript";
console.log(kalimatJs.toUpperCase()); // BELAJAR JAVASCRIPT

// 4. Gabungkan dua string "Rizky" dan "Wahyudi" menjadi satu string "Rizky Wahyudi", lalu tampilkan hasilnya.
let kataPertama = "Rizky";
let kataKedua = "Wahyudi";
// pakai template literal
console.log(`${kataPertama} ${kataKedua}`);
// pakai method concat
console.log(kataPertama.concat(" ", kataKedua));

// 5. Buat string dengan spasi di awal dan akhir, misalnya " halo dunia ", lalu tampilkan:
let textHello = " halo dunia ";
console.log(textHello.trim());

// 6. Periksa apakah string "Saya sedang belajar JavaScript" mengandung kata "belajar", lalu tampilkan hasilnya sebagai nilai true atau false.
let cekStr = "Saya sedang belajar JavaScript";
console.log(cekStr.includes("belajar")); // true

// 7. Dari string "Pemrograman JavaScript", ambil substring dari indeks ke-2 sampai ke-10, dan tampilkan hasilnya.
let kalimatStr = "Pemrograman JavaScript";
// pakai slice
console.log(kalimatStr.slice(2, 10));
// substring
console.log(kalimatStr.substring(2, 10));

// 8. Ganti kata "buruk" dalam string "Cuacanya buruk sekali" menjadi "baik", lalu tampilkan hasilnya.
let strCuaca = "Cuacanya buruk sekali";
console.log(strCuaca.replace("buruk", "baik"));

// 9. Ubah kalimat "Saya sedang belajar JavaScript" menjadi array kata-kata, lalu tampilkan kata ketiga dari array tersebut.
let arrKalimat = "Saya sedang belajar JavaScript";
console.log(arrKalimat.split(" "));

// 10. Gabungkan array ["HTML", "CSS", "JavaScript"] menjadi satu string, pisahkan dengan tanda koma dan spasi. Hasil akhirnya: "HTML, CSS, JavaScript"
let arrLanguange = ["HTML", "CSS", "JavaScript"];
console.log(arrLanguange.join(", "));

// tahap lanjut

// 11. Buat fungsi yang menerima satu string, dan mengembalikan jumlah huruf vokal dalam string tersebut.
let hurufVokal = "aiueoAIUEO";
// function
function hitungVokal(str) {
  // inisialisasi untuk menghitung huruf vokalnya
  let count = 0;

  // kondisinya
  for (let letter of str) {
    if (hurufVokal.includes(letter)) {
      count++;
    }
  }

  return count;
}
let textHW = hitungVokal("Halo Dunia"); // halo dunia akan masuk ke parameter str
console.log(textHW);

// 12. Buat fungsi yang menerima string dan mengembalikan string yang dibalik.
function balikTeks(str) {
  return str.split("").reverse().join("");
}
let balik = balikTeks("Belajar");
console.log(balik);

// 13. Diberikan string acak, buat logika untuk mengecek apakah string itu palindrom (dibaca dari depan dan belakang tetap sama).
// pakai function dengan arrow function
let stringAcak = (str) => {
  let tesPalindrom = str.split("").reverse().join("");

  // cek kondisinya
  if (str === tesPalindrom) {
    return true;
  } else {
    return false;
  }
};
console.log(stringAcak("katak")); // true
console.log(stringAcak("mobil")); // false

// 14. Dari string "Javascript itu menyenangkan", ambil semua kata yang memiliki jumlah huruf lebih dari 5, dan masukkan ke dalam array.
let kataStr = "Javascript itu menyenangkan";
let filterKata = kataStr.split(" ").filter((kata) => kata.length > 5);
console.log(filterKata);

// 15. Buat fungsi yang menerima dua string, lalu cek apakah dua string tersebut anagram (mengandung huruf yang sama dengan jumlah yang sama, urutan tidak penting).
let cekAnagram = (stringA, stringB) => {
  let formatString = (str) => str.toLowerCase().split("").sort().join("");
  return formatString(stringA) === formatString(stringB);
};
console.log(cekAnagram("listen", "silent")); // true
