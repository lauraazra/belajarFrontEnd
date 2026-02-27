// // Function Expression
// // let tampilPesan = function (nama) {
// //     console.log(`Halo ${nama}`)
// // }
// // tampilPesan('Alvar')


// // Arrow Function
// // let tampilPesan = (nama) => { return console.log(`Halo ${nama}`); }
// // tampilPesan('Alvar')

// // Kalo dua
// let ucapSalam = (waktu, nama) => {
//     return console.log(`Selamat ${waktu}, ${nama}`);
// }
// ucapSalam('Pagi', 'Azra')

// // ga usah pakai kurung kalo parameter cuma 1
// // let tampilPesan = nama => { return console.log(`Halo ${nama}`); }
// // tampilPesan('Alvar')

// // bahkan ga usah pakai {} dan return => namamnya implisit return
// let tampilPesan = nama => console.log(`Halo ${nama}`);
// tampilPesan('Alvar')


// // kalo ga ada parameter nya tetep harus pakai ()
// let cetakPanggilan = () => console.log('Hello');
// cetakPanggilan()

// // let mahasiswa = ['Alvar Azra', 'Yanti Haryanti', 'Marceliano Oriano']
// // let jumlahHuruf = mahasiswa.map(function (nama) {
// //     return nama.length
// // })
// // console.log(jumlahHuruf);

// let mahasiswa = ['Alvar Azra', 'Yanti Haryanti', 'Marceliano Oriano']
// let jumlahHuruf = mahasiswa.map(nama => nama.length)
// console.log(jumlahHuruf);

// let jumlahHuruf1 = mahasiswa.map(nama => ({ nama, jumlahHuruf: nama.length }))
// console.table(jumlahHuruf1);

// Konsep This pada Arrow Function
// constructor function
// const Mahasiswa = function () {
//     this.nama = 'Azra'
//     this.umur = 22
//     // console.log(this);
//     this.sayHello = function () {
//         console.log(`Hallo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }
// }
// const azra = new Mahasiswa()


// Arrow Function
const Mahasiswa = function () {
    this.nama = 'Azra'
    this.umur = 22
    // console.log(this);

    // di function expresion function arrow tetap pakai this kalo parent nya construtor, pakai arrow atau engga tetep harus pakai this
    this.sayHello = () => {
        console.log(`Hallo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
    }
    this.sayHello1 = () => {
        console.log(`Hallo, nama saya ${nama}, dan saya ${umur} tahun`);
    }
    this.sayHello2 = function () {
        console.log(`Hallo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
    }
    this.sayHello3 = function () {
        console.log(`Hallo, nama saya ${nama}, dan saya ${umur} tahun`);
    }

    // kalo di function declaration dia malah harus pakai arrow, karena kalo engga thisnya malah nyari ke luar parentnya yaitu windows
    // setInterval(function () {
    //     console.log(this.umur++);
    // }, 500)
    // kalo declaration pakai arrow function
    // setInterval(() => {
    //     console.log(this.umur++);
    // }, 500)
}
const azra = new Mahasiswa()

// object Literal
// const mhs1 = {
//     nama: 'Azra',
//     umur: 22,
//     sayHello: function () {
//         console.log(`Hallo, nama saya ${this.nama}, dan saya ${this.umur} tahun`)
//     },
//     sayHello1: function () {
//         console.log(`Hallo, nama saya ${nama}, dan saya ${umur} tahun`)
//     },
//     // kalo gini undefined kare this itu nyari ke windows
//     sayHello2: () => {
//         console.log(`Hallo, nama saya ${this.nama}, dan saya ${this.umur} tahun`)
//     },
//     sayHello3: () => {
//         console.log(`Hallo, nama saya ${nama}, dan saya ${umur} tahun`)
//     },

//     // jadi malah ga usah pakai arrow kalo begini mah
// }


const kotak = document.querySelector('.kotak');
kotak.addEventListener('click', function () {
    let satu = 'size'
    let dua = 'opacity'

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu]

        // satu = temp
        // satu = dua
        // dua = temp
    }

    this.classList.toggle('size')
    setTimeout(() => {
        this.classList.toggle('opacity')
    }, 600);
})