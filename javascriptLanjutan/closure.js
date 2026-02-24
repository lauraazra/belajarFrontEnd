// begini bre kalo lu bikin excecutif duluan daripada definisiin varnya nanti hasilnya undefined

console.log(nama);
var nama = 'Azra'
console.log(nama);

// nah kalo di dalam fungsi doi punya argumen apa kaga

// ini yang punya argumen
function a(mahasiswa) {
    console.log(mahasiswa);
}

function a1(mahasiswa) {
    var mahasiswa = 'Agus'
    console.log(mahasiswa);
}

function b() {
    console.log(mahasiswa);
}
function b1() {
    var mahasiswa = 'Kosi'
    console.log(mahasiswa);
}

console.log(mahasiswa); // undefined, belum kedefinisiin
var mahasiswa = 'Egasia'
a() // undefined
a('Kisua') // baca argumen
a1() //baca var di dalem dulu
a1('Jidan') // tetep baca var di dalam dulu makannya argumen ga ke eksekusi
b() // baca var global
b('Loli') // ga punya argumen jadi tetep pake var global
b1() // baca var di dalam
b1('Kuri') // baca var di dalam
console.log(mahasiswa); // baca var global
