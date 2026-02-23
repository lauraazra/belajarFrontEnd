// const small = document.querySelectorAll('.small');
// small.forEach(function (el) {
//     el.addEventListener('click', function (e) {
//         const sumber = e.target.src
//         e.target.parentElement.previousElementSibling.setAttribute('src', sumber)
//     })
// });

// const container = document.querySelector('.container');
// container.addEventListener('click', function (e) {
//     if (e.target.className == 'small') {
//         e.target.parentElement.previousElementSibling.src = e.target.src
//     }
// })

// Paling Effisien
const container = document.querySelector('.container');
const big = document.querySelector('.big');
const smalls = document.querySelectorAll('.small');
container.addEventListener('click', function (e) {
    if (e.target.className == 'small') {
        big.src = e.target.src

        big.classList.add('fade')
        setTimeout(function () { big.classList.remove('fade') }, 1000)

        smalls.forEach(function (small) {
            small.className = 'small'
        })

        e.target.classList.add('active')
    }
})