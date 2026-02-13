/*
FUNCTION
kunci utama javascript, kenapa function?
- reusability => cukup sekali bikin
- dekomposisi => memecah kekompleksan
- modularitas => bisa dibuat modul modul

jenis function
- built-in-function => dari jsnya
- user-defined function => bikin sendiri
    * deklarasi => ga dimasukin ke var dulu
    * eksperesi => dimasukan ke var dulu

Menjalankan function cukup dengan namanya dan parameter

input => dikerjakan oleh function => output
#baiknya 1 function mengerjakan 1 pekerjaan spesifik
*/

/*
var a = 8
var b = 3
var vol_a;
var vol_b;
var hasil;

vol_a = a * a * a
vol_b = b * b * b
hasil = vol_a + vol_b

console.log(hasil);
*/


/*
function jumlahVolumeDuaKubus(a, b) {
    var vol_a;
    var vol_b;
    var hasil;

    vol_a = a * a * a
    vol_b = b * b * b
    hasil = vol_a + vol_b

    return hasil
}

console.log(jumlahVolumeDuaKubus(3, 8));
console.log(jumlahVolumeDuaKubus(5, 9));
console.log(jumlahVolumeDuaKubus(15, 10));
*/


/*
Parameter => variable dalam kurung
argumen => vatiable penggunaan
*/

// parameter ada di dalam kurung function
/*
function tambahAngka(a, b) {
    return a + b
}
*/

// argumen di dalam kurung
// console.log(tambahAngka(5, 19));

// arguments nyimpan array
/*
function multiplyTambahAngka() {
    var hasil = 0
    for (var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }

    return hasil
}
console.log(multiplyTambahAngka(7, 5, 9));
*/

/*
REFACTORING
kenapa?
- readability
- DRY (Don't Repeat Yourself)
- Testability
- Performance
- Maintainability
*/

/*
function jumlahVolumeDuaKubus(a, b) {
    return a * a * a + b * b * b
}
console.log(jumlahVolumeDuaKubus(3, 8));
 */

/*
SCOPE => {}
- Block Scope => C & Java
    variable dalam block scope hanya berlaku di dalam block
- Function Scope => js
    variable dalam fuction ga bisa dipakai ke luar, tapi variable di luar bisa dipakai dalam function.
*/

/*
REKURSIF => fungsi yang manggil diri sendiri
Base Case => kondisi akhir
*/

/*
function hitungMundurFor(a) {
    for (i = a; i >= 0; i--) {
        console.log(i);
    }
    return
}

function hitungMundurRekrusif(a) {
    if (a === 0) return
    console.log(a);
    hitungMundurRekrusif(a - 1)
}

function faktorialFor(a) {
    var hasil = 1;
    for (i = a; i > 0; i--) {
        hasil *= i
    }
    console.log(hasil);
    return
}

function faktorialRekrusif(a) {
    if (a === 0) return 1
    return a * faktorialRekrusif(a - 1)
}

function fibonacciFor(a) {
    lama = 0
    sekarang = 1
    temp = 0

    console.log(lama);
    console.log(sekarang);

    for (i = 1; i < a; i++) {
        temp = lama + sekarang
        lama = sekarang
        sekarang = temp
        console.log(sekarang);
    }
    return temp
}

console.log('Hitung Mundur Pakai For');
hitungMundurFor(5)

console.log('Hitung Mundur Pakai Rekrusif');
hitungMundurRekrusif(5)

console.log('Hitung Faktorial Pakai For');
faktorialFor(5)

console.log('Hitung Faktorial Pakai Rekrusif');
console.log(faktorialRekrusif(5));

console.log('Fibonacci Pakai For');
fibonacciFor(5)
 */

/*
console.log('pakai ai soalnya ga paham paham');
function fibonacciRekursif(n, lama = 0, sekarang = 1, i = 1) {
    // 1. Print dulu biar deretnya kelihatan
    if (i === 1) console.log(lama);
    console.log(sekarang);

    // 2. Base Case: Kalau udah nyampe batas n, berhenti
    if (i >= n) return;

    // 3. Hitung temp & Panggil diri sendiri (Proses tukar nilai)
    let temp = lama + sekarang;                // Ini 'temp' lu
    fibonacciRekursif(n, sekarang, temp, i + 1); // Kirim 'sekarang' jadi 'lama' baru, dan 'temp' jadi 'sekarang' baru
}
// Coba panggil
fibonacciRekursif(5);


function pangkat(base, exponent) {
    if (exponent === 0) return 1
    return base * pangkat(base, exponent - 1)
}

console.log(pangkat(5, 3));

*/

// function tambahDigit(n) {
//     var digitAkhir = n % 10
//     n = (Math.floor(n / 10))

//     if (n <= 0) return digitAkhir

//     return digitAkhir + tambahDigit(n)
// }

// console.log(tambahDigit(123));

// function desimalKeBiner(n) {
//     biner = n % 2
//     n = (Math.floor(n / 2))

//     if (n <= 0) return biner

//     return biner + (desimalKeBiner(n) * 10 + 0)
// }
// console.log(desimalKeBiner(13));
// console.log(desimalKeBiner(19));

// function keBiner(n) {
//     if (n === 0) return 0;

//     var binerSekarang = n % 2; // Simpen sisanya
//     n = Math.floor(n / 2);    // Kecilin angkanya

//     return (keBiner(n) * 10) + binerSekarang;
// }

// console.log(keBiner(13)); // Hasil: 1101
// console.log(keBiner(19)); // Hasil: 10011

// function kaliDeret(n) {
//     if (n === 0) return 1
//     angkaAkhir = n % 10
//     n = (Math.floor(n / 10))

//     return angkaAkhir * kaliDeret(n)
// }
// console.log(kaliDeret(123));

// Deckaration Function, ga harus di deklarasi dulu
/*
function tambah(a, b) {
    return a + b
}
console.log(tambah(3, 6));
 */

// Expretion Function, harus deklarasi dulu
/* 
var kurang = function (a, b) {
    return a - b
}
console.log(kurang(4, 6)); 
*/