
/* 
Susunan sistematis dari objek yang serupa
array bisa menyimpan lebih dari 1 nilai

kalo var biasa begini
var hari = senin
var hari = selasa
ya ga kesimpan 2 2nya, jadinya ketimpa jadi selasa dong

nah kalo array
var hari = ['senin', 'selasa', 'rabu']

kenapa butuh array?
ibaratkan data itu crayon, jika banyak crayon dimasukan ke tas langsung tanpa kotaknya, maka mencari crayon crayon itu akan sulit, tapi kalo crayonnya tertata rapi di kotaknya, kalian bisa gampang pilih warna yang mana
*/

var binatang = []
binatang = ['kucing', 'kelinci', 'monyet', 'panda', 'koala', 'sapi']
console.log(binatang[4]);
console.log(typeof (binatang));
console.log(binatang.length);

// bisa beda tipe, ga harus string
var angka = [10, 232, 891]
var myArr = ['teks', 2, false]
// bisa nyimpen function
var hello = function () {
    console.log(hello);
}
var myArr2 = ['teks', 2, false, hello]
// bisa simpan array di dalam array
var myArr3 = ['teks', 2, false, hello, [4, 5, 6]]
console.log(myArr3[4][0]);

var arr = ['a', 1, true]
console.log(arr[1]);