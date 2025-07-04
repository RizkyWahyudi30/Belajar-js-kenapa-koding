// variable ada 3, yaitu :
// var, let, dan const

// 1. var : bisa diakses diluar scope

if (true) {
  var nama = "Wahyu";
  // bisa juga diganti
  nama = "rizky";
} // ini contoh scope
console.log(nama);

// 2. let : tidak bisa diakses dari lusr scope, hanya di dalam scope
if(true) {
  let nama = "Kuro";
  console.log(nama);
  
  // bisa kita ubah juga :
  nama = "Linda san";
  console.log(nama);
}
// console.log(nama);
// akan eror, karena tidak bisa

// 3. constr : tidak bisa diakses dari luar scope dan tidak bisa diubah nilainya
if (true){
  const nama = "Kiruuya";
  console.log(nama);
  
  // nama = "..."; tidak akan bisa, akan eror
}
// console.log(nama);
// juga tidak akan bisa