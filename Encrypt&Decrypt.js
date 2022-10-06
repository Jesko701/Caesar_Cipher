function CaesarEncrypt(kata) {
  let hasilEncrypt = [];
  for (let index = 0; index < kata.length; index++) {
    let a = kata.charCodeAt(index);
    if (a > 122){
      // x = (x - 122) + 32
        a = (a - 122) + 32;
    }
    a += 3
    hasilEncrypt.push(String.fromCharCode(a));
  }
  return hasilEncrypt.join('');
}

function CaesarDecrypt(kata){
    let hasil_Decrypt = [];
    for (let index = 0; index < kata.length; index++) {
        let b = kata.charCodeAt(index);
        if (b < 33) {
          // x = (122 - x) + 32
            b = (122 - b) + 32;
        }
        b -= 3
        hasil_Decrypt.push(String.fromCharCode(b));
    }
    return hasil_Decrypt.join('');
}

console.log(CaesarEncrypt('Joy 123'));
console.log(CaesarDecrypt('Mr|#456'));


