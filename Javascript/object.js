/* 
Object = kumpulan nilai yang memiliki nama
object = array yang lebih sakti
object rajanya

var dalam object disebut => property
function disebut method
*/
/* 
var mhs = {
    nama: 'Alvar Azra',
    umur: 23,
    ips: [3.00, 3.88, 3.25, 3.65],
    alamat: {
        jalan: 'Jl. Hamara Effendi No. 262',
        kota: 'Banjar',
        provinsi: 'Jawa Barat'
    }
}
console.log(mhs.nama);
console.log(mhs.umur);
console.log(mhs.ips);
console.log(mhs.ips[2]);
console.log(mhs.alamat);
console.log(mhs.alamat.provinsi);
 */

/* 
// Membuat Object
// Object Literal
var mhs = {
    nama: 'Alvar Azra',
    npm: '140810200036',
    email: 'lazraaprilyanti@gmail.com',
    jurusan: 'Teknik Informatika'
}


// Function declaration
function buatobjectMahasiswa(nama, npm, email, jurusan) {
    var mhs = {}
    mhs.nama = nama;
    mhs.npm = npm;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs
}
var mhs3 = buatobjectMahasiswa('Samudra', '1408120037', 'samudrapaaj@gmail.com', 'Sastra Mesin')
console.log(mhs3);


// Constructor, kalo bisa namanya pakai kapital
function Mahasiswa(nama, npm, email, jurusan) {
    this.nama = nama
    this.npm = npm
    this.email = email
    this.jurusan = jurusan
    // ga perlu pakai return & var
}
// harus ada new nya
var mhs4 = new Mahasiswa('Sindi', '1502633364', 'sindiresti@gmail.com', 'Kimia Tabur')
 */
