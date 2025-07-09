/**
 * 
 * IIFE : Inmediately Invoked Function Expression
 * yaitu function yabg dipanggil langsung setelah dibuat. 
 * 
 */
 // syntax dasar
 (function() {
   console.log("IIFE dipanggil");
 })(); // --> ini berjalan dengan () 
 
 // contoh kompleks nya; 
 const appConfig = (function() {
   // variable ini provate  hanya bisa diakses dalam fungsi
   const apiKey = "eKey288#Kye";
   const apiURL = "https://api.example.com";
   
   // ini object 
   return {
     getApiKey: function(){ // method 
       return apiKey
     }, 
     getApiURL: function(){ // method 
       return apiURL;
     }
   }
 })();
 // akses nya
 console.log(appConfig.getApiKey()); // 
 console.log(appConfig.getApiURL());