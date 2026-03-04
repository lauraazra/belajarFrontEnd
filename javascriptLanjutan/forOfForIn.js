// // for.. of
// /*
//     digunakan untuk
//     - array
//     - string
//     - HTML / Nodelist
//     - arguments
// */

// // Nampilin Array
// const mhs = ['Alvar', 'Azra', 'April']
// console.log('nampilin array');

// // Bisa pakai for biasa
// console.log('\npakai for biasa');
// for (let i = 0; i < mhs.length; i++) { console.log(i + 1 + '. ' + mhs[i]); }

// // bisa pakai forEach
// console.log('\npakai forEach');
// mhs.forEach((m, i) => console.log(i + 1 + '. ' + m))

// // begini kalo for.. of
// console.log('\npakai for.. of');
// for (const m of mhs) {
//     console.log(m);
// }
// console.log('\npakai for.. of dan index');
// for (const [i, m] of mhs.entries()) {
//     console.log(i + 1 + '. ' + m);
// }



// // Tampilin String
// console.log('\n\nnampilin string');
// const str = 'abu'

// // bisa pakai for.. of
// console.log('pakai for.. of');
// for (const s of str) {
//     console.log(s);
// }

// // bisa pakai for biasa, tapi ga mungkin bisa pakai forEach, dicoba pasti error
// console.log('\npakai for biasa');
// let hasil = []
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }

// // atau pakai while
// console.log('\npakai while');
// let i = 0;
// while (i < str.length) {
//     console.log(str[i]);
//     i++;
// }

// // bisa aja pakai forEach tapi pakai spread operator (...)
// [...str].forEach(h => {
//     console.log(h);
// });



// // Nodelist
// const nama = document.querySelectorAll('.nama');
// console.log(nama[0].textContent);

// // buat nampilin semua pakai forEach
// console.log('\npakai forEach');
// nama.forEach(m => console.log(m.textContent))

// // bisa pakai for.. of
// console.log('\npakai for.. of');
// for (const m of nama) {
//     console.log(m.textContent);
// }



// // Argument
// function hitungAngka() {
//     // return arguments.reduce((a, b) => a + b)  ==> gabisa kan
//     // return [1, 2, 3].reduce((a, b) => a + b) // bisa karena pakai array biasa
//     let hasil = 0;
//     // arguments.forEach(m => hasil += m) // gabisa
//     // [1, 2, 3].forEach(m => hasil += m); // bisa karena pakai array biasa
//     // [...arguments].forEach(m => hasil += m) // ini bisa karena pakai spread
//     for (m of arguments) { hasil += m; }
//     return hasil;
// }

// console.log(hitungAngka(1, 2, 3, 4, 5));



// for.. in
// bisa digunakan untuk object
const mhs1 = {
    nama: 'azra',
    umur: 22
}
// for (const m of mhs1) { console.log(m); } //gabisa
for (const m in mhs1) { console.log(m + ': ' + mhs1[m]); } 
