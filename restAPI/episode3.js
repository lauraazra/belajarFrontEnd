/*
JSON.stringify() => object jadi json
JSON.parse() => JSON jadi Object

Akses JSON
- Ajax => XMLHttpRequest / JQuery
*/

// let mahasiswa = {
//     nama: 'Alvar Azra',
//     npm: '140810200036',
//     email: 'lazraaprilyanti@gmail.com'
// }

// console.log(JSON.stringify(mahasiswa))


// Parse json ke object
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         let mahasiswa = JSON.parse(this.responseText)
//         console.log(mahasiswa)
//     }
// }

// xhr.open('GET', 'episode3.json', true)
// xhr.send()


// coba pakai jquery
$.getJSON('episode3.json', function (data) {
    console.log(data)
})
// untuk object ke json, jquery ga punya fungsi khususnya