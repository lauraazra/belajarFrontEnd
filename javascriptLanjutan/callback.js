// const prompt = require('prompt-sync')({ sigint: true });

// // callback
// // function halo(nama) {
// //     console.log(`halo, ${nama}`);
// // }

// function tampilPesan(callback) {
//     const nama = prompt('masukan nama: ')
//     callback(nama)
// }

// tampilPesan(nama => console.log(`halo, ${nama}`))



// const mhs = [
//     {
//         nama: "Andi Wijaya",
//         NPM: "2026001",
//         email: "andi.w@example.com",
//         jurusan: "Teknik Informatika",
//         idDosenWali: 101
//     },
//     {
//         nama: "Budi Santoso",
//         NPM: "2026002",
//         email: "budi.s@example.com",
//         jurusan: "Sistem Informasi",
//         idDosenWali: 102
//     },
//     {
//         nama: "Citra Lestari",
//         NPM: "2026003",
//         email: "citra.l@example.com",
//         jurusan: "Teknik Informatika",
//         idDosenWali: 101
//     },
//     {
//         nama: "Dewi Sartika",
//         NPM: "2026004",
//         email: "dewi.s@example.com",
//         jurusan: "Ilmu Komputer",
//         idDosenWali: 103
//     },
//     {
//         nama: "Eko Prasetyo",
//         NPM: "2026005",
//         email: "eko.p@example.com",
//         jurusan: "Teknik Informatika",
//         idDosenWali: 102
//     }
// ];

// console.log('mulai');
// mhs.forEach(m => console.log(m.nama))
// console.log('selesai');

// // Asynchronous Callback
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.response)
//             } else if (xhr.status === 404) {
//                 error()
//             }
//         }
//     }

//     xhr.open('get', url)
//     xhr.send()
// }


// console.log('mulai');
// getDataMahasiswa('data/mhs.json', result => {
//     const mhs = JSON.parse(result)
//     mhs.forEach(m => console.log(m.nama))
// }, () => {

// })
// console.log('selesai');

// jquery
console.log('mulai');
$.ajax({
    url: 'data/mhs.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama))
    },
    error: (e) => {
        console.log(e.responseText);
    }
})