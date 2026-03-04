// Destructuring pada function
// function dengan array
function kalkulasiArray(a, b) {
    return [a + b, a - b, a * b, a / b,]
}

// biasanya begini
// console.log('Cara Biasa');
// const tambah = kalkulasiArray(2, 4)[0]
// const kurang = kalkulasiArray(2, 4)[1]
// const kali = kalkulasiArray(2, 4)[2]
// const bagi = kalkulasiArray(2, 4)[3]
// console.log(tambah);
// console.log(kurang);
// console.log(kali);
// console.log(bagi);

// sekarang bisa gini
// console.log('Cara Destructuring');
// const [tambah, kurang, kali, bagi] = kalkulasiArray(2, 5)
// console.log(`tambah = ${tambah}`);
// console.log(`kurang = ${kurang}`);
// console.log(`kali = ${kali}`);
// console.log(`bagi = ${bagi}`);

// Masalah kalo pakai array => lau harus bikin sesuai urutannya kalo engga bisa berantakan
// console.log('Cara Destructuring');
// const [tambah, kali, kurang, bagi] = kalkulasiArray(2, 5)
// console.log(`tambah = ${tambah}`);
// console.log(`kurang = ${kurang}`);
// console.log(`kali = ${kali}`);
// console.log(`bagi = ${bagi}`);
// nah hasilnya jadi ga sesuai kan, makannya bisa pakai function object



// function dengan object
// function kalkulasiObject(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }
// const { tambah, kali, kurang, bagi } = kalkulasiObject(2, 5)
// console.log(`tambah = ${tambah}`);
// console.log(`kurang = ${kurang}`);
// console.log(`kali = ${kali}`);
// console.log(`bagi = ${bagi}`);
// nah walau ga urut tetap aman



// Destruturing function arguments
const mhs1 = {
    nama: 'Alvar',
    umur: 33,
    nilai: {
        uts: 80,
        uas: 90,
        tugas: 100
    }
}

// biasa begini
function cetakMHS1(nama, umur, nilai) {
    // return `halo nama saya ${nama}, umur saya ${umur} tahun, ${Object.entries(nilai).map(([jenis, skor]) => `${jenis} : ${skor}`).join(', ')}`;
    return `halo nama saya ${nama}, umur saya ${umur} tahun, uts: ${nilai.uts}, uas: ${nilai.uas}, tugas: ${nilai.tugas}`;
}
console.log(cetakMHS1(mhs1.nama, mhs1.umur, mhs1.nilai));

// bisa juga begini
function cetakMHS2(mhs) {
    // return `halo nama saya ${mhs.nama}, umur saya ${mhs.umur} tahun, uts: ${mhs.nilai.uts}, uas: ${mhs.nilai.uas}, tugas: ${mhs.nilai.tugas}`
    return `halo nama saya ${mhs.nama}, umur saya ${mhs.umur} tahun, ${Object.entries(mhs.nilai).map(([jenis, skor]) => `${jenis}: ${skor}`).join(', ')}`
}
console.log(cetakMHS2(mhs1));

// tapi bisa juga begini
function cetakMHS3({ nama, umur, nilai: { uas, uts, tugas } }) {
    return `halo nama saya ${nama}, umur saya ${umur} tahun, uts: ${uts}, uas: ${uas}, tugas: ${tugas}`
}
console.log(cetakMHS3(mhs1));