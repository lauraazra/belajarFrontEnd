// spread adalah cara untuk memisahkan iretable object
// contoh sederhana
// const mhs = ['Azra', 'Samudra', 'Bayu']
// console.log(mhs);
// console.log(...mhs);

// digunakan untuk menggabungkan data
// const dosen = ['Asep', 'Budi', 'Tina']
// const orang = [...mhs, 'Aji', ...dosen]
// console.log(orang);
// // sebenarnya bisa pakai concat tapi jadi ga bisa nambahin aji
// const orang2 = mhs.concat(dosen) // ga bisa nambahin aji di tengah
// console.log(orang2);

// digunakan untuk mengcopy array
// const mhs1 = mhs; // seperti ini terlihat benar tapi lihat ketika mhs ingin dirubah
// console.log(mhs);
// console.log(mhs1);
// mhs1[0] = 'Alvar'
// console.log(`setelah dirubah ${mhs}`);
// console.log(`setelah dirubah ${mhs1}`);
// harusnya pakai spread, jadi mhsnya ga akan ikut keubah
// const mhs1 = [...mhs]
// console.log(mhs);
// console.log(mhs1);
// mhs1[0] = 'Alvar'
// console.log(`setelah dirubah ${mhs}`);
// console.log(`setelah dirubah ${mhs1}`); // hanya mhs1 yang berubah

// contoh ke html
const liMhs = document.querySelectorAll('li');
console.log(liMhs); // jadinya nodelist
// untuk ngeluarin semuanya bisa pakai for
let hasil = []
for (let i = 0; i < liMhs.length; i++) {
    hasil.push(liMhs[i].textContent)
}
console.log(hasil);
// tapi bisa loh pakai map kalo pakai spread
// const mhs = liMhs.map(li => li.textContent) // error karena map ga ada dalam nodelist
const mhs = [...liMhs].map(li => li.textContent)
console.log(mhs);
// bikin animasi
liMhs.forEach(li => {
    const isiLama = li.innerHTML;
    li.innerHTML = ` <span class="badge">${isiLama}</span>`;
});


// bikin animasi pakai spread
const nama = document.querySelector('h2');
const pisahNama = [...nama.textContent].map(m => `<span class="nama">${m}</span>`).join('')
nama.innerHTML = pisahNama
