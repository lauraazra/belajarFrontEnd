const prompt = require('prompt-sync')({ sigint: true });

lagi = true

while (lagi === true) {
    comp = parseInt((Math.random() * 10) + 1)
    nyawa = 3

    while (nyawa >= 1) {
        user = parseInt(prompt('masukan angka: '));
        hasil = ''
        kesempatan = ''

        if (user === comp) {
            hasil = 'BENAR'
            nyawa = 0
        } else if (user >= comp) {
            hasil = 'Kegedean'
        } else if (user <= comp) {
            hasil = 'Kekecilan'
        }

        nyawa--

        if (nyawa == 2) {
            kesempatan = 'Kesempatan lu 2x lagi'
        } else if (nyawa == 1) {
            kesempatan = 'Kesempatan lu 1x lagi'
        } else if (nyawa == 0) {
            kesempatan = 'LU KALAH BRE'
        }

        if (hasil === 'BENAR') {
            console.log('LU MENANG' + '\n');
        } else if (nyawa === 0) {
            console.log(kesempatan + ', tadi tuh angkanya => ' + comp + '\n');
        } else {
            console.log('Tebakan lu => ' + hasil + ' || ' + kesempatan + '\n');
        }
    }

    ulang = prompt('main lagi? (y/n) ');
    if (ulang !== 'y') {
        console.log('Oke bre byebye');
        lagi = false
    }

}
