/**
 * Math Object
 * 
 * 
 * 
 */
 
 // Properti Math
 /**
  * Math.PI = nengembalikan nilai phi (3.14...)
  * Math.E = mengembalikan nilai Euler (2.718..)
  */
  console.log(Math.PI); // 3.141592653589793
  console.log(Math.E); // 2.718281828459045
  
  // Math Method
  // Angka menjadi absolute: mengembalikkan nilai menjadi positif
  console.log(Math.abs(-7)); // negative jadi positive
  console.log(Math.abs(0)); // tetap nol
  // Me-pangkat kan agka:
  console.log(Math.pow(2,3)); // 8 
  console.log(Math.pow(5,7)); // 78125 
  // Mencari akar:
  console.log(Math.sqrt(16)); // 4
  console.log(Math.sqrt(18)); // 4.242640687119285
  // Mencari akar juga, tapi dengan 3 bilamgan:
  console.log(Math.cbrt(27)); // 3 * 3 * 3 
  console.log(Math.cbrt(8)); // 2 * 2 * 2
  // Mencari angka max:
  console.log(Math.max(1,3,88,32,383,2)); // 383 
  // Mencari angka min:
  console.log(Math.min(1,3,88,32,383,2)); // 1
  
  
  // Pembulatan angka:
  // 1. Dengan Math.round(): jika angka nya diatas 5, jika dibawah 5, maka akan dibulatkan kebawahnya
  console.log(Math.round(3.5)); // 5 nya dihitung, jadi 4
  console.log(Math.round(3.4)); // jadi 3, karena 4 dibawah 5
  // 2. Dengan Math.ceil(): walaupun lewatnya kecil, maka akan tetap dibulatkan keatas, meskipun 00001
  console.log(Math.ceil(4.01)); // 5
  // 3. Math.floor(): membulatkan kebawah 
  console.log(Math.floor(3.9)); // jadi 3 
  // 4. Math.trunc(): menghapus angka dibelakang koma
  console.log(Math.trunc(6.3)); // menjadi 6
  console.log(Math.trunc(4.9)); // 4
  
  // Math Random: angkanya acak
  console.log(Math.random());
  
  
  // math random bisa juga dikolaborasikan dengan method lainnya, biasanya untuk game tebak tebakan
  console.log(Math.round(Math.random() * 100));