// Manipulasis Array

// Tambah isi Array
/*
var arr = []
arr[0] = 'Alvar'
arr[1] = 'Azra'
arr[2] = 'Samudra'
arr[4] = 'Pradipta'
console.log(arr);
 */

// Hapus isi Array
/*
var arr = ['Alvar', 'Azra', 'Samudra', 'Pradipta', 'Reza']
arr[3] = undefined
console.log(arr);
 */

// Menampilkan Array
/*
var arr = ['Alvar', 'Azra', 'Samudra', 'Pradipta', 'Reza']
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
 */

// Method Join => ngubah jadi string
/*
var arr = ['Alvar', 'Azra', 'Samudra', 'Pradipta', 'Reza']
console.log(arr.join(', '));
 */

// Method pada Array
// var arr = ['Alvar', 'Azra', 'Samudra', 'Pradipta', 'Reza']

// Push => tambah di akhir
// arr.push('Doddy')

// pop => hapus yang di akhir
// arr.pop()

// unshift => nambah di awal
// arr.unshift('doddy')

// Shift => hapus awal
// arr.shift()

// splice => menambal
// splie(indexMulai, mauDihapusBerapa, ElemenBaru1, ElemenBaru2)
// arr.splice(2, 2, 'Peter', 'Doddy')

// Slice => mengiris array
// Slice(mulai, akhir), index akhir ga kebawa, jadi kalo mau Azra dan Samudra harus 1,3 karena Pradipta dan selanjutnya ga kebawa, slice harus pakai var baru
// arr2 = arr.slice(1, 3)
// console.log(arr2.join(', '));

// forEach => mirip for buat nampilin tapi lebih mantul
// angka = [1, 2, 3, 4, 5, 6, 7, 8]
// angka.forEach(function (e) {
//     console.log(e);
// })

// var arr = ['Alvar', 'Azra', 'Samudra', 'Pradipta', 'Reza']
// arr.forEach(function (e, i) {
//     console.log('Mahasiswa ke-' + (i + 1) + ' adalah : ' + e);
// })

// // Map lebih baik lagi
// angka = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log('ini yang forEach');
// angka.forEach(function (e) {
//     console.log(e);
// })

// console.log('ini yang Map');
// angka.map(function (e) {
//     console.log(e);
// })

// // tapi kalo begini forEach ga bisa
// console.log('Map pakai return');
// angka2 = angka.map(function (e) {
//     return e
// })
// console.log(angka2.join(' - '));

// Sort
/* 
angka = [1, 2, 8, 5, 9, 0, 6, 7, 8]
console.log(angka.join(' - '));
angka.sort()
console.log(angka.join(' - '));

angka2 = [1, 10, 20, 2, 8, 5, 9, 0, 6, 7, 8]
angka2.sort()
console.log(angka2.join(' - '));
angka2.sort(function (a, b) {
    return a - b
})
console.log(angka2.join(' - '));
 */

// Filter => semua nilai
var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4]
var angka2 = angka.filter(function (e) {
    return e > 5
})
console.log(angka2.join(' - '));


// Find => hanya 1 nilai item pertama 
var angka3 = angka.find(function (e) {
    return e > 5
})
console.log(angka3);