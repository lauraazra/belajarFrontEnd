/* 
Asynchronous Programming

untuk penggunaan = callback, promise, ajax, dan async & await

Javascript => single-threaded, non-blocking, asynchronous, & concurrent language

single thread => urutan eksekusi kode yang dapat dilakukan secara bebas satu sama lain (1 hal pada 1 waktu tertentu atau baris perbaris) => task 1 selesai baru task 2, task 2 selesai baru task 3, dan seterusnya

Multi thread => punya banyak thread dan tiap task bisa disebar di masing masing thread walau tasknya tetap dikerjkan 1 1 walau dikerjakan oleh thread berbeda

blocking => 1 task belum selesai ga bisa lanjut ke task lain

non-blocking => kalo task 1 belum selesai tetep bisa lanjut ke task 2 dulu

asynchronous => Lu bisa "nanam" tugas, terus lu tinggal ngerjain yang lain.

synchronous => Kode dijalankan satu per satu dari atas ke bawah. Baris kedua nggak akan jalan sebelum baris pertama beres.

concurrency = asynchronous + single-threaded
pararelism = asynchronous + multi-threaded

thread => lingkungan eksekusi task
block => teknik ngoding atau berhubungan dengan input
synchronous dan asynchronoys => terkait HTTP request

js punya v8 engine
    => heap digunakan memory allocation (hoistng)
    => stack digunakan pemanggilan fungsi dan eksekusi
        (http://latentflip.com/loupe/)

*/

console.log('satu'); // masuk stack, kerjakan, hilang, lanjut
console.log('dua'); // masuk stack, kerjakan, hilang, lanjut
console.log('tiga'); // masuk stack, kerjakan, hilang