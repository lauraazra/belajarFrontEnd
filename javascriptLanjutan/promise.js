/*
http://www.omdbapi.com/?i=tt3896198&apikey=31f3a60e
*/

// $.ajax({
//     url: 'http://www.omdbapi.com/?i=tt3896198&apikey=31f3a60e',
//     success: movies => console.log(movies),
//     error: e => console.log(e.responseText)
// })

// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.status === 200) {
//         if (xhr.readyState === 4) {
//             console.log(JSON.parse(xhr.response));
//         }
//     } else {
//         console.log(xhr.response);
//     }
// }
// xhr.open('get', 'http://www.omdbapi.com/?i=tt3896198&apikey=31f3a60e')
// xhr.send()

// const movies = fetch('http://www.omdbapi.com/?i=tt3896198&apikey=31f3a60e')
// console.log(movies); // munculnya bakal promise

// fetch('http://www.omdbapi.com/?i=tt3896198&apikey=31f3a60e')
//     .then(response => response.json())
//     .then(response => console.log(response))

// Promise
// object yang merepresentasikan keberhasilan / kegagalan sebuah event yang aynchronous di masa yang akan datang
// terpenuhi / ingkar
// states (fullfilled / rejected / finally)
// callback (resolve / reject / finally)
// aksi (then / cath)


// contoh 1 promise
// let ditepati = true
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('janji telah ditepati')
//     } else {
//         reject('ingkar janji')
//     }
// })
// console.log(janji1);
// janji1
//     .then(response => console.log(response))
//     .catch(response => console.log(response))


// contoh 2
// let ditepati = true
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve('Ditepati setelah 2 detik')
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             reject('Tidak ditepati setelah 2 detik')
//         }, 2000);
//     }
// })

// console.log('mulai');
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
//     .finally(() => console.log('selesai menunggu')) // biasa buat animasi loading
//     .then(response => console.log(response))
//     .catch(response => console.log(response))
// console.log('selesai');


// promise.all()
const film = new Promise((resolve, reject) => {
    let sukses = true;
    setTimeout(() => {
        if (sukses) {
            resolve({
                judul: 'avengers',
                sutradara: 'Azra',
                pemeran: 'Asep, Ujang, Udin'
            });
        } else { reject('Tidak ada film saat ini'); }
    }, 2000);
});

const cekCuaca = new Promise((resolve, reject) => {
    let sensorBerfungsi = true;
    setTimeout(() => {
        if (sensorBerfungsi) {
            resolve({
                lokasi: "Tasikmalaya",
                suhu: "28°C",
                kondisi: "Berawan",
                kelembapan: "75%"
            });
        } else { reject("Gagal terhubung ke sensor cuaca!") }
    }, 1000);
});

Promise.all([film, cekCuaca])
    // .then(response => console.log(response)) // jadinya aray
    // kalo mau terpisah pisahin pakai Array Destructuring
    .then(response => {
        const [film, cekCuaca] = response
        console.log(film)
        console.log(cekCuaca)
    })