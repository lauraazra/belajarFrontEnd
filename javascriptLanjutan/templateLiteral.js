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
const umur = 33



// Embed Expresion
console.log('Embed Expresion');

console.log(`Pakai Template => nama saya ${nama}, umur saya ${umur}`);

console.log('Pakai "" => nama saya' + nama + ', umur saya' + umur);



// multiline string
console.log('\nmultiline string');

console.log(
    `Pakai Template =>
nama saya ${nama}, 
umur saya ${umur}`
);

console.log('Pakai "" => \nnama saya' + nama + ', \numur saya' + umur);



// HTML Fragments
console.log('\nHTML Fragments');

const user = {
    nama: 'Alvar',
    umur: 33,
    pekerjaan: 'Web Developer'
};

const el =
    `<p>Pakai Template Literal</p>
<div class="user-card">
    <h2>${user.nama}</h2>
    <p>Umur: ${user.umur}</p>
    <span class="job">${user.pekerjaan}</span>
</div>`;
console.log(el);

const el2 = '<p>Tanpa Template Literal</p>\n' +
    '<div class="user-card">\n' +
    '    <h2>' + user.nama + '</h2>\n' +
    '    <p>Umur: ' + user.umur + '</p>\n' +
    '    <span class="job">' + user.pekerjaan + '</span>\n' +
    '</div>';
console.log(el2);



//Expression Interpolation
console.log('\nExpression Interpolation');

const harga = 50000;
const diskon = 0.1;

console.log('Pakai Template Literal');
console.log(`Total harga setelah diskon: Rp${harga * (1 - diskon)}`);
const nilai = 85;
console.log(`Status kelulusan: ${nilai >= 75 ? 'LULUS' : 'REMEDIAL'}`);

console.log('Tanpa Template Literal');
console.log('Total harga setelah diskon: Rp' + (harga * (1 - diskon)));
const nilai2 = 85;
console.log('Status kelulusan: ' + (nilai2 >= 75 ? 'LULUS' : 'REMEDIAL'));


// Tagged Template
console.log('\nTagged Template');

