/* 
hanya bisa dibuat pakai ``

Template literal memungkinkan penulisan dengan variable di dalamnya
Multi-line string
embded expreddion
HTML Fragments
Expression Interpolation
Tagged Template
*/

const nama = 'Alvar'
const umur = 23



// // Embed Expresion
// console.log('Embed Expresion');

// console.log(`Pakai Template => nama saya ${nama}, umur saya ${umur}`);

// console.log('Pakai "" => nama saya' + nama + ', umur saya' + umur);



// // multiline string
// console.log('\nmultiline string');

// console.log(
//     `Pakai Template =>
// nama saya ${nama}, 
// umur saya ${umur}`
// );

// console.log('Pakai "" => \nnama saya' + nama + ', \numur saya' + umur);



// // HTML Fragments
// console.log('\nHTML Fragments');

// const user = {
//     nama: 'Alvar',
//     umur: 33,
//     pekerjaan: 'Web Developer'
// };

// const el =
//     `<p>Pakai Template Literal</p>
// <div class="user-card">
//     <h2>${user.nama}</h2>
//     <p>Umur: ${user.umur}</p>
//     <span class="job">${user.pekerjaan}</span>
// </div><br><br>`;
// console.log(el);
// document.body.innerHTML += el;

// // Looping
// const mhs = [
//     {
//         nama: 'John',
//         umur: 33,
//         matkul: [
//             'Algoritma',
//             'Struktur Data',
//             'Basis Data',
//             'Jaringan Komputer'
//         ]
//     },
//     {
//         nama: 'Alvar',
//         umur: 23,
//         email: 'alvar@email.com',
//         matkul: [
//             'Rekayasa Perangkat Lunak',
//             'Pemrograman Web Lanjut',
//             'Struktur Data'
//         ]
//     },
//     {
//         nama: 'Azra',
//         umur: 21,
//         email: 'azra@email.com',
//         matkul: [
//             'Sistem Operasi',
//             'Basis Data',
//             'Interaksi Manusia dan Komputer'
//         ]
//     }
// ]

// const dataMHS = `<div class="mhs">
//     <p>LOOP</p>
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.umur}</li>
//     </ul>`).join('')}
// </div><br><br>`
// document.body.innerHTML += dataMHS;

// // Ternary
// const mhsMuda = `<div class="mhs">
//     <p>Ternary usia < 30</p>
//     ${mhs.map(m => `<ul>
//         ${m.umur < 30 ?
//         `<li>${m.nama}</li>
//         <li>${m.umur}</li>`
//         : ``}
//     </ul>`).join('')}
// </div><br><br>`
// document.body.innerHTML += mhsMuda;

// // Bersarang/nested cara 1
// const mhsMatkul = `<div class="mhs">
//     <p>Bersarang cara 1</p>
//     ${mhs.map(m =>
//     `<ul>
//         <li>nama = ${m.nama}</li>
//         <li>umur = ${m.umur}</li>
//         <li>mata kuliah = 
//             <ol>
//                 ${m.matkul.map(mk =>
//         `<li>${mk}</li>`
//     ).join('')}
//             </ol>
//         </li>
//     </ul>`
// ).join('')}
// </div><br><br>`
// document.body.innerHTML += mhsMatkul;

// // Bersarang/nested cara 2
// function cetakMatkul(matkul) {
//     return matkul.map(m =>
//         `<li>nama = ${m}</li>`
//     ).join('')
// }

// const mhsMatkul2 = `<div class="mhs">
//     <p>Bersarang cara 2</p>
//     ${mhs.map(m =>
//     `<ul>
//         <li>nama = ${m.nama}</li>
//         <li>umur = ${m.umur}</li>
//         <li>mata kuliah = 
//             <ol>
//                 ${cetakMatkul(m.matkul)}
//             </ol>
//         </li>
//     </ul>`
// ).join('')}
// </div>`
// document.body.innerHTML += mhsMatkul2;


// const el2 = '<p>Tanpa Template Literal</p>\n' +
//     '<div class="user-card">\n' +
//     '    <h2>' + user.nama + '</h2>\n' +
//     '    <p>Umur: ' + user.umur + '</p>\n' +
//     '    <span class="job">' + user.pekerjaan + '</span>\n' +
//     '</div>';
// console.log(el2);



// //Expression Interpolation
// console.log('\nExpression Interpolation');

// const harga = 50000;
// const diskon = 0.1;

// console.log('Pakai Template Literal');
// console.log(`Total harga setelah diskon: Rp${harga * (1 - diskon)}`);
// const nilai = 85;
// console.log(`Status kelulusan: ${nilai >= 75 ? 'LULUS' : 'REMEDIAL'}`);

// console.log('Tanpa Template Literal');
// console.log('Total harga setelah diskon: Rp' + (harga * (1 - diskon)));
// const nilai2 = 85;
// console.log('Status kelulusan: ' + (nilai2 >= 75 ? 'LULUS' : 'REMEDIAL'));


// Tagged Template
const strLiat = `nama saya ${nama}, umur saya ${umur} tahun`
console.log(strLiat);

function coba(strings, nama, umur) {
    let result = strings + nama + umur
    return result
}

function coba2(strings, ...values) {
    let result = ''
    strings.forEach((str, i) => {
        result += `${str}${values[i] || ''}`
    })
    return result
}

function coba3(strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '')
}

const str1 = coba`nama saya ${nama}, umur saya ${umur} tahun`
console.log(str1);

const str2 = coba2`nama saya ${nama}, umur saya ${umur} tahun`
console.log(str2);

const str3 = coba3`nama saya ${nama}, umur saya ${umur} tahun`
console.log(str3);

