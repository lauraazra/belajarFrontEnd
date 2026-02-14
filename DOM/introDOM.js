/* 
DOM (Document Object Model)
jadi misal bikin html isinya
<p> Informasi lebih lanjut cek di <a href='#'>link</a> berikut</p>

nah aslinya bungkusnya begini
globa => html => body => p  =>'Informasi lebih lanjut cek di'
                            => a => 'link'
                            => 'berikut

Document = akar paling atas atau halamannya

object = semacam tag atau elementnya
Object itu punya ciri-ciri:
    - Properti: linkObject.href isinya "#"
    - Properti: linkObject.id isinya "link-tujuan"
    - Properti: linkObject.innerHTML isinya "link"
Object itu juga punya kemampuan:
    - Method: linkObject.click() (Bisa diperintah buat diklik otomatis lewat JS)
    - Method: linkObject.setAttribute() (Bisa buat ngerubah isi href-nya)

Model = struktur hirarkinya


DOM Tree = representasi elemen elemen di html
NodeList = kumpulan node apapun tipenya
HTMLCollection = kumpulan node khusus element saja, mirip array
HTMLCollection bersifat live, nodeList tidak
Root Node = akar = document
Parent Node = node yang ada 1 tingkkat di atas node lain
Child Node = node yang ada 1 tingkkat di bawah node lain
Sibling Node = 1 parent
Descendant = cucu
*/