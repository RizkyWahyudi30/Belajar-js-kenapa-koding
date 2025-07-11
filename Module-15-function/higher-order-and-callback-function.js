/**
 * 
 * Membahaz 2 Materi :
 * 1. Higher Order Function 
 * 2. Callback function 
 * 
 */
 // 1. Hugher order function 
 // function yang menerima function lain sebagai argumen atau mengembikkan function lain sebagai hasil 
 
 // 2. Callback Functions 
 // Function yang dikirim sebagai argumen ke function lain dan dipanggil di dalam function tersebut
 
 
 // buat Higher Order Func 
 function mulaiTugas(tugas, callback) {
   console.log("Tugas yang diselesaikan: " + tugas); 
   callback(); // untuk memanggim callback function nya 
 };
 
 // buat function callback nya 
 function tugasSelesai(){
   console.log("Tugas selesai")
 }
 
 mulaiTugas("Belajar Javascript dari Nol", tugasSelesai);