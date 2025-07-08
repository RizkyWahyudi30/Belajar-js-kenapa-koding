/**
 * 
 * Switch Case 
 * 
 * Struktur seperti javascript, ini juga bisa sebagai pengganti if-else statements 
 * 
 */
 // syntax dasar 
 let hari = 5; // dipresentasikan dalam angka 

 switch(hari) {
  case 1: 
    console.log("Ini hari Senin");
    break;
  case 2:
    console.log("Ini hari Selasa");
    break;
  case 3: 
    console.log("Ini hari Rabu");
    break;
  case 4: 
    console.log("Ini hari Kamis");
    break;
  case 5:
    console.log("Ini hari Jumat");
    break; 
  case 6: 
    console.log("Ini hari Sabtu");
    break;
  case 7: 
    console.log("Ini hari Minggu");
    break 
  default:
    console.log("ga ada jir");
 }
 
 // switch case juga bisa dengan ekspresi:
 let nilai = 90;
 
 switch(true) {
   case nilai >= 90:
     console.log("nilai kamu diatas 90");
     break;
    case nilai >= 80:
      console.log("nilai kamu diatas 80");
      break;
    default:
      console.log("kaga ada jir");
 }