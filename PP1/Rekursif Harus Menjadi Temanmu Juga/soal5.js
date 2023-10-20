/**
  Hapus Simbol Rekursif
  Diberikan sebuah function hapusSimbol(str) yang menerima satu parameter berupa
  string. Function akan me-return string yang telah bersih dari berbagai simbol,
  hanya menyisakan a-z dan angka 0-9.
  RULES:
  - Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function hapusSimbolRec
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function hapusSimbolRec
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX
**/

function hapusSimbolRec(str) {
    //code here
    let allowedChar = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];
    let allowance = false;
    let result = ""
    if(str.length < 1){
        return result;
    }
    for(let i=0; i<allowedChar.length;i++){
        if(str[0] == allowedChar[i]){
            allowance = true;
        }
    }
    if(allowance){
        result = result + str[0]; 
    }
    return result + hapusSimbolRec(str.substr(1));
  }
  
  console.log(hapusSimbolRec('test4@aa')); //test4aa
  console.log(hapusSimbolRec('devel0p3r s3j@@ati')); // devel0p3rs3jati
  console.log(hapusSimbolRec('ma@#k!an~')); // makan
  console.log(hapusSimbolRec('coding')); // coding
  console.log(hapusSimbolRec('1+3-5*2=100')); // 1352100