// const card = document.querySelector('.card');
// const closeCard = document.querySelector('.close')

// closeCard.addEventListener('click', function () {
//     card.style.display = 'none'
// })

// DOM Traversal
// const closeCard = document.querySelectorAll('.close')

// for (let i = 0; i < closeCard.length; i++) {
//     closeCard[i].addEventListener('click', function (e) {
//         // closeCard[i].parentElement.style.display = 'none'
//         e.target.parentElement.style.display = 'none'
//     })
// }

// closeCard.forEach(function (el) {
//     el.addEventListener('click', function (e) {
//         e.target.parentElement.style.display = 'none'
//     })
// })

/*
parentNode, orang tua tapi nodenya keambil (enter)
parentElement, orang tua
nextSibling, previousSibling, sodara node
nextElementSibling, previeousElementSibling, orang tua element
*/

// Prevent Default => mencegah aksi default
// a itu punya aksi default mengembalikan ke suatu halaman jadi harus di kasi pencegahan aksi default


// closeCard.forEach(function (el) {
//     el.addEventListener('click', function (e) {
//         e.target.parentElement.style.display = 'none'
//         e.preventDefault()
//         e.stopPropagation()
//     })
// })

// // jadi bisa ada 2 eventlistener, stopPropagation itu buat menghalau yang cardsnya
// const cards = document.querySelectorAll('.card');
// cards.forEach(function (card) {
//     card.addEventListener('click', function (e) {
//         alert('hai');
//     })
// })

// tapi cara-cara di atas bakal conflict kalo nanti nambah card baru secara real time, nanti dia ga bisa di close karena eventnya cuma ketulis di yang udah ada duluan aja, makannya pakai orang tua yang bungkus semuanya

const container = document.querySelector('.container');
container.addEventListener('click', function (e) {
    if (e.target.className == 'close') {
        e.target.parentElement.style.display = 'none'
        e.preventDefault()
    }
})