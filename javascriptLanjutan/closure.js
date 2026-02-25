// // begini bre kalo lu bikin excecutif duluan daripada definisiin varnya nanti hasilnya undefined

// console.log(nama);
// var nama = 'Azra'
// console.log(nama);

// // nah kalo di dalam fungsi doi punya argumen apa kaga

// // ini yang punya argumen
// function a(mahasiswa) {
//     console.log(mahasiswa);
// }

// function a1(mahasiswa) {
//     var mahasiswa = 'Agus'
//     console.log(mahasiswa);
// }

// function b() {
//     console.log(mahasiswa);
// }
// function b1() {
//     var mahasiswa = 'Kosi'
//     console.log(mahasiswa);
// }

// console.log(mahasiswa); // undefined, belum kedefinisiin
// var mahasiswa = 'Egasia'
// a() // undefined
// a('Kisua') // baca argumen
// a1() //baca var di dalem dulu
// a1('Jidan') // tetep baca var di dalam dulu makannya argumen ga ke eksekusi
// b() // baca var global
// b('Loli') // ga punya argumen jadi tetep pake var global
// b1() // baca var di dalam
// b1('Kuri') // baca var di dalam
// console.log(mahasiswa); // baca var global


// Closure
function init() {
    // let nama = 'Azra' // local variable
    // function tampilNama() { // inner function (closure)
    // function tampilNama(nama) { // inner function (closure)
    return function (nama) { // inner function (closure)
        // let nama = 'Alvar' // bukan closure, karena ambil var local
        console.log(nama); // akses ke parent variable
    }
    // tampilNama()
    // console.dir(tampilNama)
    // return tampilNama
}
// init()
let panggilNama = init()
panggilNama('Alvar')

// untuk function factory
function ucapkanSalam(waktu) {
    return function (nama) {
        console.log(`Halo selamat ${waktu} ${nama}`);
    }
}

let selamatPagi = ucapkanSalam('Pagi')
let selamatSiang = ucapkanSalam('Siang')
let selamatMalam = ucapkanSalam('Malam')

selamatPagi('Azra')
selamatMalam('Alvar')

// Private Method
let counter = 0
let add = function () {
    return ++counter
}

counter = 10

console.log(add());
console.log(add());
console.log(add());
console.log(add());

console.log("masukin aja ke function"); //malah di set terus ke 0
let add1 = function () {
    let counter = 0
    return ++counter
}

counter = 10

console.log(add1());
console.log(add1());
console.log(add1());
console.log(add1());

console.log('makannya pakai closure');

let add2 = function () {
    let counter = 0
    return function () {
        return ++counter
    }
}

counter = 10

let a = add2() //a hanya untuk ngejalasin inner function

console.log(a());
console.log(a());
console.log(a());
console.log(a());

console.log('cara lain nulis closure');
let add3 = (function () {
    let counter = 0
    return function () {
        return ++counter
    }
})()

counter = 10

console.log(add3());
console.log(add3());
console.log(add3());
console.log(add3());