/**
 * 
 * Looping
 * 
 * Looping ada 3: for, while, do-while 
 * 
 */
 
 // For Loop 
 /**
  *  for (inisialisasi; kondisi; perubahan) 
  * 
  *  Digunakan ketika jumlah iterasi sudsh diketahui
  */
  // syntax dasar 
  for (let i = 1; i <= 10; i++){
    // console.log(`iterasi i yang ke:${i}`)
    // dimatikan dulu
  }
  
  // While loop 
  /**
   * 
   *  while(kondisi) --> menjalankan kode selama kondisi loop benar 
   * 
   *   Loop ini beeguna ketika jumlah iterasi tidak pasti dan bergantung pada kondisi tertenru
   */
  let y = 1;
  while(y <= 5){
    // console.log(`iterasi i yang ke: ${y}`);
    y++; // --> ini jangan sampe lupa, nanti jadi infinity loop 
  }
  
  // do-while 
  /**
   * 
   *  Selalu menjalankan kode setidaknya satu kali, kareka kondisi diperiksa setelag blok kode dieksekusi.
   * 
   */
  let i = 1; 
  
  do {
    // console.log(`ini iterasi i ke: ${i}`)
    i++;
  } while (i <= 10);
  
  
  
  // Ada dua jenis lagi -> For-in dan For-of 
  // =======================================
  
  // For - in: untuk mengiterasi properti objek atau indeks array 
  let object = {
    name: "Rizky Wahyudi",
    older: 17,
    isActive: true
  }
  for (let objProps in object){
    // console.log(`${objProps}: ${object[objProps]}`);
    
    // ${objProps} --> ini nge looping key dari object nya 
    // ${object[objProps]} --> ini nge looping value dari object 
  }
  
  
  // For - of: untuk mengiterasi elemen dalam iterable seperti array atau string
  let arr = [1,12,23,34,45];
  for (let arrElem of arr){
    console.log(arrElem);
  }