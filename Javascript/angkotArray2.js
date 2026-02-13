var penumpang = []
var tambahPenumpang = function (namaPenumpang) {
    if (penumpang.length == 0) {
        penumpang.push(namaPenumpang)
        return penumpang
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] === undefined) {
                penumpang[i] = namaPenumpang
                return penumpang
            } else if (penumpang[i] === namaPenumpang) {
                console.log('Maaf ' + namaPenumpang + " sudah masuk angkot");
                return penumpang
            } else if (i === penumpang.length - 1) {
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
}

console.log('isi kotak');
tambahPenumpang('azra')
tambahPenumpang('Samudra')
console.log(tambahPenumpang('Alvar'));

console.log('\nHapus');
penumpang[1] = undefined
console.log(penumpang);

console.log('\nisi undefined');
console.log(tambahPenumpang('Rizki'));

console.log('\nmasukin lagi');
console.log(tambahPenumpang('Rizki'));
