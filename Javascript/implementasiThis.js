// Membuat object angkot
function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir
    this.trayek = trayek
    this.penumpang = penumpang
    this.kas = kas
    this.tarif = 2000

    this.penumpangNaik = function (namaPenumpang, titikNaik) {
        if (this.penumpang.length === 0) {
            this.penumpang.push({ nama: namaPenumpang, naikDi: titikNaik })
            return this.penumpang
        }
        for (var i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] === undefined) {
                this.penumpang[i] = { nama: namaPenumpang, naikDi: titikNaik }
                return this.penumpang
            } else if (this.penumpang[i] && this.penumpang[i].nama === namaPenumpang) {
                console.log('penumpang sudah masuk angkot');
                return this.penumpang
            }
        }
        this.penumpang.push({ nama: namaPenumpang, naikDi: titikNaik })
        return this.penumpang
    }

    this.penumpangTurun = function (namaPenumpang, titikTurun) {
        if (this.penumpang.length === 0) {
            console.log('Belum ada penumpang di angkot');
            return this.penumpang
        } for (var i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] && this.penumpang[i].nama === namaPenumpang) {
                var indexNaik = this.trayek.indexOf(this.penumpang[i].naikDi)
                if (!this.trayek.includes(titikTurun)) {
                    console.log('Kamu salah masukin titik turun');
                    return this.penumpang
                } else {
                    var indexTurun = this.trayek.indexOf(titikTurun)
                }

                if (indexNaik === indexTurun) {
                    console.log('Masa naik dan turun di tempat yang sama bre');
                    return this.penumpang
                } else {
                    var totalBayar = Math.abs(indexTurun - indexNaik) * this.tarif
                    console.log(`Total bayar = ${totalBayar}`);
                }

                this.kas += totalBayar
                this.penumpang[i] = undefined
                return this.penumpang
            }
        }
        console.log(`${namaPenumpang} ga ada di angkot`);
        return this.penumpang
    }
}

var angkot1 = new Angkot('Agus Sutisna', ['Cicaheum', 'Cicadas', 'Kosambi', 'Cibiru'], [], 0)
var angkot2 = new Angkot('Sisil Tridiyanti', ['Antapani', 'Ujung Berung'], [], 0)

console.log('Test turunin tanpa ada orang');
console.log(angkot1.penumpangTurun('sutisna', 'cengkareng'));

console.log('\nTest ngisi angkot kosong');
console.log(angkot1.penumpangNaik('Erik', 'Cicaheum'));

console.log('\n Test ngisi angkot ada orangnya');
console.log(angkot1.penumpangNaik('Tina', 'Kosambi'));

console.log('\nTest naikin orang yang sama');
console.log(angkot1.penumpangNaik('Erik', 'Cibiru'));

console.log('\nTest turunin orang di tempat yang salah');
console.log(angkot1.penumpangTurun('Erik', 'Cikareng'));
console.log(angkot1.kas);

console.log('\nTest turunin orang');
console.log(angkot1.penumpangTurun('Erik', 'Cibiru'));
console.log(angkot1.kas);

console.log('\nTest tambahin orang tapi ada undefined');
console.log(angkot1.penumpangNaik('Erik', 'Cibiru'));

console.log('\nTest turunin orang di tempat dia naik');
console.log(angkot1.penumpangTurun('Erik', 'Cibiru'));

console.log('\nHapus semua');
console.log(angkot1.penumpangTurun('Erik', 'Kosambi'));
console.log(angkot1.penumpangTurun('Tina', 'Cicaheum'));

console.log(`\nJumlah Kas : ${angkot1.kas}`);

console.log('\nTest nurunin orang padahal ga ada orang di angkot');
console.log(angkot1.penumpangTurun('Tina', 'Cicaheum'));