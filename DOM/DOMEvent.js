/*
Events != even 
Event => Kejadian bisa oleh user atau API

Cara mendengar event
event handler
    - Inline HTML Attribute
    - Element Method
addEventListener
*/

// Inline HTML
function myAlert() {
    alert("button was clicked")
}

// Onclick JS
const p3 = document.querySelector('.p3');
p3.onclick = myAlert
// Tapi punya kekurangan yaitu nimpa
p3.onclick = function () {
    p3.style.backgroundColor = 'lightblue'
} // jadi yang pertama ga dijalanin, fungsi alertnya ga ada

// addEventListener
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', myAlert)
// kedua nya bakal jalan kalo pakai eventListener
p4.addEventListener('click', function () {
    this.style.backgroundColor = 'lightgreen'
})