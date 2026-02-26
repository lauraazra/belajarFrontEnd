// Higher Order Function (HOF)
/* 
    function yang beroperasi pada function lain.
*/

function kerjakanTugas(mataKuliah, selesai) {
    console.log(`Kerjakan tuga ${mataKuliah}`);
    selesai()
}
function selesai() {
    console.log('Selesai mengerjakan tugas');
}
kerjakanTugas('Kalkulus', selesai)

// ini HOF
setTimeout(function () { console.log('semangat'); }, 5000)

// addEventListner juga HOF karena ada function di dalamnya

// innerFunction juga seperti yang dipelajari di closure

let total = 0, count = 1
while (count <= 10) {
    total += count
    count += 1
}
console.log(total);

// tapi bisa aja kalo punya fungsi jadi
// console.log(sum(range(1,10)));

// bisa juga begini
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// di atas jalan tapi gimana kalo ga mau 10 makannya bisa kaya gini
function repeatLog(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
repeatLog(5)

// nah gimana biar ga cuma clog doang
function repeat(n, action) {
    for (let i = 1; i <= n; i++) {
        action(i);
    }
}
repeat(5, console.log)
repeat(2, console.table)