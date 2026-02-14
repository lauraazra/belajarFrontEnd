/*
DOM Selection Method
    - getElementById() => element
    - getElementsByTagName() => HTMLCollection
    - getElementsByClassName() => HTMLCollection
    - querySelector() => Element
    - querySelectorAll() => nodeList
*/


// // getElementById()
// const judul = document.getElementById('judul');
// judul.style.color = 'red' //otomatis menambah inline css
// judul.style.backgroundColor = '#ccc'
// judul.innerHTML = 'Alvar Azra'


// // getElementsByTagName
// const p = document.getElementsByTagName('p')
// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'violet'
// }
// /* //bisa gini
// const h1 = document.getElementsByTagName('h1')
// h1[0].innerHTML = 'Ini diubah dari JS'
//  */
// // atau gini
// const h1 = document.getElementsByTagName('h1')[0]
// h1.innerHTML = 'Ini diubah dari JS'


// // getElementsByClassName
// const p1 = document.getElementsByClassName('p1')
// p1[0].innerHTML = 'Diubah dari JS'
// // const p1 = document.getElementsByClassName('p1')[0]
// // p1.innerHTML = 'Diubah dari JS'


// // querySelector() => element
// const p4 = document.querySelector('#b p')
// p4.style.color = 'green'
// p4.style.fontSize = '25px'
// const li2 = document.querySelector('section#b ul li:nth-child(2)')
// li2.style.backgroundColor = 'orange'
// // hanya element pertama yang ketemu
// // const p = document.querySelector('p')
// // p.innerHTML = 'diubah dari js'


// querySelectorAll() => nodeList
// const p = document.querySelectorAll('p')
// for (let i = 0; i < p.length; i++) {
//     p[i].style.color = 'red'
// }

// mengubah root node
// const sectionB = document.getElementById('b')
// const p4 = sectionB.querySelector('p')
// p4.style.backgroundColor = 'orange'
// atau
const sectionB = document.querySelector('section#b')
const p4 = sectionB.getElementsByTagName('p')[0] //karena tag name jadi HTMLCollection
p4.style.backgroundColor = 'orange'