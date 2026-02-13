const prompt = require('prompt-sync')({ sigint: true });

var lagi = true

while (lagi == true) {


    comp = Math.random()
    if (comp * 3 < 1) {
        comp = 'Gajah'
    } else if (comp * 3 >= 1 && comp * 3 < 2) {
        comp = 'Semut'
    } else if (comp * 3 >= 2) {
        comp = 'Manusia'
    }

    var user = prompt('Pilih angka berikut => 1. Gajah | 2. Semut | 3. Manusia: ');
    switch (user) {
        case '1':
            console.log('lu gajah');
            if (comp == 'Semut') {
                console.log('computernya semut');
                console.log('yah lu kalah bre');
            } else if (comp == 'Manusia') {
                console.log('computernya manusia');
                console.log('cie menang nih');
            } else if (comp == 'Gajah') {
                console.log('computernya gajah');
                console.log('alamak seri');
            }
            break;
        case '2':
            console.log('lu semut');
            if (comp == 'Semut') {
                console.log('computernya semut');
                console.log('alamak seri');
            } else if (comp == 'Manusia') {
                console.log('computernya manusia');
                console.log('lu kalah bre');
            } else if (comp == 'Gajah') {
                console.log('computernya gajah');
                console.log('cie menang nieh');
            }
            break;
        case '3':
            console.log('lu manusia');
            if (comp == 'Semut') {
                console.log('computernya semut');
                console.log('widih menang');
            } else if (comp == 'Manusia') {
                console.log('computernya manusia');
                console.log('seri bre');
            } else if (comp == 'Gajah') {
                console.log('computernya gajah');
                console.log('yah kalah wkwk');
            }
            break;
        default:
            break;
    }

    var ulang = prompt('main lagi bre? (y/n)');
    if (ulang != 'y') {
        lagi = false
        console.log('Makasih udah main bre');
    }
}
console.log('Bubar');