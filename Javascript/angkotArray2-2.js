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

var hapusPenumpang = function (namaPenumpang) {
    if (penumpang.length === 0) {
        console.log('Tidak ada penumpang di dalam angkot');
        return penumpang
    }
    for (var i = 0; i < penumpang.length; i++) {
        if (penumpang[i] === namaPenumpang) {
            penumpang[i] = undefined
            return penumpang
        }
    }
    console.log('Penumpang tidak ada di dalam angkot');
    return penumpang
}

hapusPenumpang('Samudra')

console.log('\nisi kotak');
tambahPenumpang('azra')
tambahPenumpang('Samudra')
console.log(tambahPenumpang('Alvar'));

console.log('\nHapus');
hapusPenumpang('Samudra')
console.log(penumpang);

console.log('\nisi undefined');
console.log(tambahPenumpang('Rizki'));

console.log('\nmasukin lagi');
console.log(tambahPenumpang('Rizki'));

hapusPenumpang('Rizki')
hapusPenumpang('Alvar')
hapusPenumpang('azra')
console.log(penumpang);

hapusPenumpang('Samudra')
