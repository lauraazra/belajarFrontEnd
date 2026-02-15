/* 
1. Element Manipulation (Mengubah Isi & Atribut)
    - innerText vs innerHTML: Cara ganti tulisan atau bahkan nambahin tag HTML baru ke dalam sebuah elemen.
    - Atribut: Cara ngerubah src gambar, ganti href link, atau nambahin id dan class lewat JS.
    - Style (CSS): Cara ngerubah tampilan (warna, ukuran, display) langsung via property .style.
2. Node Manipulation (Membuat & Menghapus)
    -document.createElement(): Cara bikin elemen baru (misal bikin <li> baru pas user klik tombol).
    - appendChild() / append(): Cara "nempelin" elemen yang baru dibuat ke dalam model/tree.
    - removeChild() / remove(): Cara menghapus elemen dari halaman.
3. Class List (Mainan Class CSS)
    - classList.add(): Nambahin class CSS.
    - classList.remove(): Ngilangin class.
    - classList.toggle(): Ini yang paling keren! Kalau class-nya belum ada, dia tambahin. Kalau udah ada, dia hapus. (Sering dipake buat tombol dark mode atau menu hamburger).
4. DOM Events (Interaksi User)
    - click: Apa yang terjadi pas user ngeklik sesuatu?
    - input / change: Apa yang terjadi pas user ngetik di form?
    - mouseOver / mouseOut: Efek pas kursor lewat di atas elemen.
*/

/* 
Inner, Style, setAtribut, classList
*/

const judul = document.getElementById('judul');
judul.innerHTML = 'Azra'
judul.style.color = 'lightblue'
judul.style.backgroundColor = 'orange'
judul.setAttribute('name', 'azra') //untuk set atribut
// judul.getAttribute('name')
// judul.removeAttribute('name')

const sectionA = document.querySelector('section#a');
sectionA.innerHTML = '<ul><li>item 1</li><li>item 2</li><li>item 3</li></ul>' //biasa isi apa aja tapi ga bisa di baris baru

const p4 = document.querySelector('section#b p');
// p4.classList.add('label')
// p4.classList.add('satu')
// p4.classList.add('dua')
// p4.classList.add('tiga')
// p4.classList()
// p4.classList.remove('label')
// p4.classList.toggle('biru-muda')
// p4.classList.item(2)
// p4.classList.item(4)
// p4.classList.contains('tiga')
// p4.classList.contains('empat')
// p4.classList.replace('tiga', 'empat')