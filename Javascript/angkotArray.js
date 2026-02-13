var penumpang = []
var cetak = function () {
    console.log(penumpang);
}
function tambahPenumpang(a, b) {
    b = penumpang;

    if (b.includes(undefined)) {
        for (var i = 0; i < b.length; i++) {
            if (b[i] === undefined) {
                b[i] = a
                break
            }
        }
        cetak()
    } else if (b.includes(a)) {
        console.log("Mohon maaf " + a + " sudah masuk angkot");
    } else {
        b.push(a)
        cetak()
    }
}

console.log('Test masukin 3 orang');
tambahPenumpang('Azra')
tambahPenumpang('Alvar')
tambahPenumpang('Samudra')

console.log('test keluarin orang');
penumpang[1] = undefined

console.log('test gantiin kursi orang yang udah keluar');
tambahPenumpang('Rizki')

console.log('test masukin orang yang sama');
tambahPenumpang('Rizki')
