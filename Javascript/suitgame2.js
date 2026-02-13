const prompt = require('prompt-sync')({ sigint: true });

var lagi = true

while (lagi == true) {


    comp = Math.random()
    if (comp * 3 < 1) {
        comp = 'gajah'
    } else if (comp * 3 >= 1 && comp * 3 < 2) {
        comp = 'semut'
    } else if (comp * 3 >= 2) {
        comp = 'manusia'
    }

    var user = prompt('Pilih punya lu => gajah / manusia / semut: ').toLowerCase();
    var hasil = ''

    if (comp === user) {
        hasil = 'SERI BRE';
    } else if (user === 'gajah') {
        hasil = (comp === 'manusia') ? 'Jago Juga Lu' : 'Yah Kalah'
    } else if (user === 'manusia') {
        hasil = (comp === 'semut') ? 'Jago Juga Lu' : 'Yah Kalah'
    } else if (user === 'semut') {
        hasil = (comp === 'gajah') ? 'Jago Juga Lu' : 'Yah Kalah'
    } else {
        hasil = 'Pilihan lu ngasal amat dah'
    }

    console.log('\nPilihan lu => ' + user + '\nPilihan Computer => ' + comp + '\n' + hasil + '\n');

    var ulang = prompt('main lagi bre? (y/n) ');
    if (ulang != 'y') {
        lagi = false
        console.log('Makasih udah main bre');
    }
}