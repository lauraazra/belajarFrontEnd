// jangan pakai var tapi pakai LET

// pak dika ngajak berbingung bingung, tapi ane mau cepet cepet ke materi lain jadi intinye nanti dah ane bingunginnya hehehe

// gua belajar pakai ai aja, dan ini hasilnya, dah eug baca kok

/* 
Kenapa Jangan Pake var?
Hoisting yang Aneh: var bisa dipanggil sebelum dideklarasikan (hasilnya undefined), yang sering bikin bug "gaib".

Gak Kenal Scope: var itu function-scoped. Kalau lu bikin var di dalam if atau for loop, variabelnya malah "bocor" ke luar dan bisa diakses dari mana-mana.

Bisa Ditumpuk: Lu bisa nulis var nama = 'A' terus di bawahnya var nama = 'B' tanpa error. Ini bahaya karena bisa gak sengaja numpahin data lama.

Kenapa Pake let?
Block Scoped: Dia cuma hidup di dalam kurung kurawal { } tempat dia dibuat. Lebih aman dan rapi.

No Redeclaration: Bakal langsung error kalau lu coba bikin variabel dengan nama yang sama di scope yang sama (ingat masalah merah-merah di VS Code lu tadi? Itu karena let).

Kapan Pake const?
Gunakan const (Constant) setiap kali lu bikin variabel yang nilainya nggak akan berubah sepanjang program jalan.

Default-nya: Selalu mulai dengan const. Kalau ternyata nanti nilainya perlu diubah (misal: skor game, counter), baru ganti ke let.

Objek & Array: Tetap pake const buat Objek atau Array walaupun isinya (propertinya) mau lu ubah-ubah. Yang penting "wadahnya" nggak lu ganti total.

Ringkasnya:

const: Untuk data tetap (ID, URL API, Rumus).

let: Untuk data yang nilainya bakal berubah-ubah (Looping, skor, input user).

var: Buang jauh-jauh ke tempat sampah sejarah.
*/