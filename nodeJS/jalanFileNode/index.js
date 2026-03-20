// const sayHello = require('./coba')
// console.log('Hello Azra')

// // sayHello('Azra', 22) // ga bisa diakses
// // kecuali eksekusinya ada di coba

// console.log(sayHello('Azra', 22)) 

// jadinya gini buat panggil semuanya
const coba = require('./coba');
console.log(
    coba.sayHello('Azra', 21),
    coba.Pi,
    coba.mahasiswa.cetakMhs(),
    new coba.Orang()
)