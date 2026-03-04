// Destructuring Variable / Assignment

// Destructuring Array
const perkenalan = ['Halo', 'nama', 'eug', 'azra']
// biasanya harus begini
console.log(perkenalan[0] + '\n');
// sekarang bisa gini
const [salam, satu, dua, nama] = perkenalan
console.log(nama);
console.log(satu);
console.log(dua);
console.log(nama + '\n');
//Skip, jadi cuma salam sama nama
const [ape, , , apa] = perkenalan
console.log(ape);
console.log(apa + '\n');
// Rest Parameter
const [halo, ...values] = perkenalan
console.log(halo);
console.log(values + '\n');



// Swap Items
let a = 2
let b = 3
console.log(a);
console.log(b);
[a, b] = [b, a]
console.log(a);
console.log(b + '\n');




// Return Value pada Function
function coba() {
    return [9, 2]
}
const [c, d] = coba()
console.log(c);
console.log(d + '\n');

// Destructuring Object
// biasanya kan begini
const mhs = {
    namaPanggilan: 'Alvar',
    umur: 23,
    // email: 'azra@gmail.com'
}
console.log(mhs.namaPanggilan);
console.log(mhs.umur + '\n');
// sekarang bisa gini, tapi namanya harus sama
// const { namaPanggilan, umur } = mhs
// console.log(namaPanggilan);
// console.log(umur + '\n');
// Assign ke Variable baru
// const { namaPanggilan: name, umur: u } = mhs
// console.log(name);
// console.log(u + '\n');
// Memberikan Default Value
// const { namaPanggilan, umur, email = 'default@gmail.com' } = mhs
// console.log(namaPanggilan);
// console.log(umur);
// console.log(email + '\n');
// Memberikan nilai default + assign ke variable baru
const { namaPanggilan: name, umur: u, email: e = 'default@gmail.com' } = mhs
console.log(name);
console.log(u);
console.log(e + '\n');

// Assingment tanpa Deklarasi Object
const { guru, murid } = {
    guru: 'Pak Asep',
    murid: 'Udin'
}
console.log(guru);
console.log(murid + '\n');

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const karyawan = {
    id: 123,
    jabatan: 'manager',
    gaji: 90000
}
// biasanya
function employe(object) {
    return object.id
}
console.log(employe(karyawan) + '\n');
// sekarang panggil aja langsung pakai destruturing
function employe2({ id }) {
    return id
}
console.log(employe2(karyawan) + '\n');