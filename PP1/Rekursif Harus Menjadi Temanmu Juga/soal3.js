/**
  Vowels Counter Recursive
  Diberikan sebuah function consonantCounterRecursive(sentences) yang 
  menerima satu parameter berupa
  string. Function akan me-return jumlah huruf konsonan yang terdapat 
  di dalam parameter inputan.
  Jika ada karakter selain abjad/alphabet maka tidak akan dihitung.
- Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function vowelsCounterRecursive
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function vowelsCounterRecursive
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX
*/

function consonantCounterRecursive(sentences) {
    //code here
    let abjad = false;
    let index = 0;
    while(!abjad){
        if(index + 1 == sentences.length){
            return sentences.length;
        }

        switch(sentences[index]){
            case "a":
                break;
            case "A":
                break;
            case "i":
                break;
            case "I":
                break;
            case "u":
                break;
            case "U":
                break;
            case "e":
                break;
            case "E":
                break;
            case "o":
                break;
            case "O":
                break;
            default:
                sentences = sentences.substr(0, index) + sentences.substr(index + 1, sentences.length) 
                abjad = true;
        }
        if(!abjad){
            index++
        }
    }
    
    return consonantCounterRecursive(sentences)
  }
  
  console.log(consonantCounterRecursive('alDi Suka MakAn baksO')) //8
  console.log(consonantCounterRecursive('AziZy')) // 3
  console.log(consonantCounterRecursive('awt6an')) // 3