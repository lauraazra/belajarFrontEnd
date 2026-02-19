const ubahWarna = document.querySelector('button#ubahWarna');

ubahWarna.addEventListener('click', function () {
    // document.body.style.backgroundColor = 'lightblue'
    // document.body.setAttribute('class', 'biru-muda')
    document.body.classList.toggle('biru-muda')
})

const btnAcakWarna = document.createElement('button')
const textAcakWarna = document.createTextNode('Acak Warna')
btnAcakWarna.appendChild(textAcakWarna)
btnAcakWarna.setAttribute('id', 'acakWarna')

ubahWarna.after(btnAcakWarna)

const acakWarna = document.querySelector('button#acakWarna');

acakWarna.addEventListener('click', function () {
    const r = Math.floor(Math.random() * 255 + 1)
    const g = Math.floor(Math.random() * 255 + 1)
    const b = Math.floor(Math.random() * 255 + 1)
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})

const sMerah = document.querySelector('input[name=merah]');
const sHijau = document.querySelector('input[name=hijau]');
const sBiru = document.querySelector('input[name=biru]');
sMerah.addEventListener('input', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})
sHijau.addEventListener('input', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})
sBiru.addEventListener('input', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})


// DARI AI
// 1. Ambil semua input dalam satu variabel (NodeList)
const sliders = document.querySelectorAll('input[type="range"]');

// 2. Looping untuk pasang event ke tiap slider
sliders.forEach(function (slider) {
    slider.addEventListener('input', function () {
        // 3. Ambil value dari masing-masing slider berdasarkan namanya
        const r = document.querySelector('input[name="merah"]').value;
        const g = document.querySelector('input[name="hijau"]').value;
        const b = document.querySelector('input[name="biru"]').value;

        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
});

document.body.addEventListener('mousemove', function (e) {
    const xPos = Math.round((e.clientX / window.innerWidth) * 255)
    const yPos = Math.round((e.clientY / window.innerHeight) * 255)
    const b = (xPos + yPos) / 2

    document.body.style.backgroundColor = `rgb(${xPos}, ${yPos}, ${b})`
})

