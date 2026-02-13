// ini kata gemini versi paling clean

var penumpang = [];
var tambahPenumpang = function (namaPenumpang) {
    if (penumpang.includes(namaPenumpang)) {
        console.log('Maaf ' + namaPenumpang + " sudah masuk angkot");
        return penumpang;
    }
    for (var i = 0; i < penumpang.length; i++) {
        if (penumpang[i] === undefined) {
            penumpang[i] = namaPenumpang;
            return penumpang;
        }
    }
    penumpang.push(namaPenumpang);
    return penumpang;
};

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
