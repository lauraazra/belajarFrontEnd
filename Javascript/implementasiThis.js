// Membuat object angkot
function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir
    this.trayek = trayek
    this.penumpang = penumpang
    this.kas = kas

    this.penumpangNaik = function (namaPenumpang) {
        if (this.penumpang.length === 0) {
            this.penumpang.push(namaPenumpang)
            return this.penumpang
        }
        for (var i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] === undefined) {
                this.penumpang[i] = namaPenumpang
                return this.penumpang
            } else if (this.penumpang[i] === namaPenumpang) {
                console.log('penumpang sudah masuk angkot');
                return penumpang
            }
        }
        this.penumpang.push(namaPenumpang)
        return this.penumpang
    }

    this.penumpangTurun = function (namaPenumpang, bayar) {
        if (this.penumpang.length === 0) {
            console.log('Belum ada penumpang di angkot');
        } for (var i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] === namaPenumpang) {
                this.penumpang[i] = undefined
                this.kas += bayar
                return this.penumpang
            }
        }
    }
}

var angkot1 = new Angkot('Agus Sutisna', ['cicaheum', 'cibitu'], [], 0)
var angkot2 = new Angkot('Sisil Tridiyanti', ['Antapani', 'Ujung Berung'], [], 0)

angkot1.penumpangNaik('Erik')
console.log(angkot1.penumpang);
console.log(angkot1.kas);
angkot1.penumpangNaik('Tina')
angkot1.penumpangTurun('Erik', 2000)
console.log(angkot1.penumpang);
console.log(angkot1.kas);
