// Rest Parameter

function myFunction(a, b, ...myArg) {
    return `a = ${a}, b = ${b}, myArg = ${myArg}`
}

console.log(myFunction(1, 2, 3, 4, 5));

function myFunction2(...myArg2) {
    // return arguments // bisa begini tapi ini bukan array
    return myArg2
}

console.log(myFunction2(1, 2, 3, 4, 5));


function jumlahAngka(...angka) {
    // let hasil = 0
    // // for (let arg in arguments) {
    // //     hasil += arguments[arg]
    // // } return hasil

    // // for of
    // for (let a of angka) {
    //     hasil += a
    // } return hasil

    // forEach
    // angka.forEach(a => { hasil += a })
    // return hasil]

    // for biasa
    // for (let i = 0; i < angka.length; i++) {
    //     hasil += angka[i]
    // } return hasil

    // map
    // const hasil2 = angka.map(a => hasil += a)
    // return hasil, hasil2

    // reduce
    return angka.reduce((a, b) => a += b)
}
console.log(jumlahAngka(jumlahAngka(1, 2, 3, 4, 5, 6)));

// array destructing
const kelompok = ['Alvar', 'Azra', 'Samudra', 'Sindi', 'Andre']
const [ketua, wakilketua, ...anggota] = kelompok
console.log(ketua);
console.log(wakilketua);
console.log(`anggota = ${anggota}`);

// object destructing
const team = {
    PM: 'Asep',
    FE: 'Agus',
    BE: 'Handi',
    UIUX: 'Joko'
}

const { PM, ...lainnya } = team
console.log(PM);
console.log(lainnya);




// Filtering
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type)
}
console.log(filterBy('number', 1, 4, 9, 'Aguas', 'iot', 'Reza', 10, 11, 'Bagas'));