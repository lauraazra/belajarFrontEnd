// Kenapa pakai mongoose? karena lebih sederhana cara konekin ke dbnya
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/azra')
// .then(() => console.log('Terhubung ke Database MongoDB'))
// .catch((e) => console.log('Gagak terkoneksi', e))


// Membuat schema, pisahkan ke model sendiri
// const Contact = mongoose.model('Contact', {
//     /* nama: String,
//     nohp: String,
//     email: String */
//     nama: {
//         type: String,
//         required: true
//     },
//     nohp: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String
//     }
// })


// // Menambah 1 data, nanti dihapus kalo udah
// const contact1 = new Contact({
//     nama: 'Pradipta',
//     nohp: '082121465324',
//     email: 'alvarpradipta@gmail.com'
// })
// // simpan ke collections
// contact1.save().then((contact => console.log(contact)))