// console.log('Hello World')

// console.log(sayHello('Azra', 22))

const sayHello = (nama, umur) => `Hi, nama saya ${nama}, umur saya ${umur} tahun`

const Pi = 3.14

const mahasiswa = {
    nama: 'Alvar',
    umur: 22,
    npm: '140810200038',
    cetakMhs() { return `Nama ${this.nama}, usia ${this.umur}, dengan npm ${this.npm}` }
}

class Orang {
    constructor() {
        console.log('object Orang telah dibuat')
    }
}

// module.exports.sayHello = sayHello;
// module.exports.Pi = Pi;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang



// module.exports = { 
//     sayHello : sayHello, 
//     Pi : Pi, 
//     mahasiswa: mahasiswa, 
//     Orang: Orang 
// }
// atau 
module.exports = { sayHello, Pi, mahasiswa, Orang }

