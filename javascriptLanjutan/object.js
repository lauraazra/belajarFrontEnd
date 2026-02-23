// Cara membuat Object di js
// 1. Object Literal
/*
let mahasiswa = {
    nama: 'Azra',
    energi: 10,
    makan: function (porsi) {
        this.energi = this.energi + porsi;
        console.log(`Selamat makan ${this.nama}`);
    }
}
let mahasiswa2 = {
    nama: 'Alvar',
    energi: 10,
    makan: function (porsi) {
        this.energi = this.energi + porsi;
        console.log(`Selamat makan ${this.nama}`);
    }
}
 */


// Function Declaration
/*
function mahasiswa(nama, energi) {
    let mahasiswa = {}
    mahasiswa.nama = nama
    mahasiswa.energi = energi

    mahasiswa.makan = function (porsi) {
        this.energi += porsi;
        console.log(`Selamat makan ${this.nama}`);
    }

    mahasiswa.main = function (jam) {
        this.energi -= jam;
        console.log(`Selamat main ${this.nama}`);
    }

    return mahasiswa;
}

let azra = mahasiswa('azra', 5)
let alvar = mahasiswa('alvar', 5)
*/


// Construtor function -> akan digunakan terus
/*
function Mahasiswa(nama, energi) {
    this.nama = nama
    this.energi = energi

    this.makan = function (porsi) {
        this.energi += porsi;
        console.log(`Selamat makan ${this.nama}`);
    }

    this.main = function (jam) {
        this.energi -= jam;
        console.log(`Selamat main ${this.nama}`);
    }
}

let azra = new Mahasiswa('azra', 5)
let alvar = new Mahasiswa('alvar', 15)
*/


// 