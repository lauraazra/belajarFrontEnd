// // Higher Order Function (HOF)
// /*
//     function yang beroperasi pada function lain.
// */

// function kerjakanTugas(mataKuliah, selesai) {
//     console.log(`Kerjakan tuga ${mataKuliah}`);
//     selesai()
// }
// function selesai() {
//     console.log('Selesai mengerjakan tugas');
// }
// kerjakanTugas('Kalkulus', selesai)

// // ini HOF
// setTimeout(function () { console.log('semangat'); }, 5000)

// // addEventListner juga HOF karena ada function di dalamnya

// // innerFunction juga seperti yang dipelajari di closure

// let total = 0, count = 1
// while (count <= 10) {
//     total += count
//     count += 1
// }
// console.log(total);

// // tapi bisa aja kalo punya fungsi jadi
// // console.log(sum(range(1,10)));

// // bisa juga begini
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// // di atas jalan tapi gimana kalo ga mau 10 makannya bisa kaya gini
// function repeatLog(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(i);
//     }
// }
// repeatLog(5)

// // nah gimana biar ga cuma clog doang
// function repeat(n, action) {
//     for (let i = 1; i <= n; i++) {
//         action(i);
//     }
// }
// repeat(5, console.log)
// repeat(2, console.table)

// Contoh HOF
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9]

// mencari angka >= 3
// for
const angkaBaru = []
for (let i = 0; i <= angka.length; i++) {
    if (angka[i] >= 3) {
        angkaBaru.push(angka[i])
    }
}
console.log(angkaBaru);

// filter
// const angkaBaru1 = angka.filter(function (a) { 
//     return a >= 3
// })
const angkaFilter = angka.filter(a => a >= 3) // pakai ArrowFunction
console.log(angkaFilter);

// MAP
// const angkaMap = angka.map(function (a) {
//     return a * 2
// })
const angkaMap = angka.map(a => a * 2) // pakai ArrowFunction
console.log(angkaMap);
console.log(angka);

// reduce
const angkaReduce = angka.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(angkaReduce);
const angkaReduce1 = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 10)
console.log(angkaReduce1);

// method chaining
const chaining = angka.filter(a => a > 5) // 8,9,9
    .map(a => a * 3)
    .reduce((a, b) => a + b)
console.log(chaining); // 78