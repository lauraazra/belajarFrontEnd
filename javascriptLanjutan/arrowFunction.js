// Function Expression
// let tampilPesan = function (nama) {
//     console.log(`Halo ${nama}`)
// }
// tampilPesan('Alvar')


// Arrow Function
// let tampilPesan = (nama) => { return console.log(`Halo ${nama}`); }
// tampilPesan('Alvar')

// Kalo dua
let ucapSalam = (waktu, nama) => {
    return console.log(`Selamat ${waktu}, ${nama}`);
}
ucapSalam('Pagi', 'Azra')

// ga usah pakai kurung kalo parameter cuma 1
// let tampilPesan = nama => { return console.log(`Halo ${nama}`); }
// tampilPesan('Alvar')

// bahkan ga usah pakai {} dan return => namamnya implisit return
let tampilPesan = nama => console.log(`Halo ${nama}`);
tampilPesan('Alvar')


// kalo ga ada parameter nya tetep harus pakai ()
let cetakPanggilan = () => console.log('Hello');
cetakPanggilan()

// let mahasiswa = ['Alvar Azra', 'Yanti Haryanti', 'Marceliano Oriano']
// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length
// })
// console.log(jumlahHuruf);

let mahasiswa = ['Alvar Azra', 'Yanti Haryanti', 'Marceliano Oriano']
let jumlahHuruf = mahasiswa.map(nama => nama.length)
console.log(jumlahHuruf);

let jumlahHuruf1 = mahasiswa.map(nama => ({ nama, jumlahHuruf: nama.length }))
console.table(jumlahHuruf1);