const player = document.querySelectorAll('.area-player ul li img');

const info = document.querySelector('.info');

function pilihanComputer() {
    let comp = Math.random()
    if (comp * 3 < 1) comp = 'gajah'
    else if (comp * 3 >= 1 && comp * 3 < 2) comp = 'semut'
    else if (comp * 3 >= 2) comp = 'orang'

    return comp
}

function rules(pPlayer, pComp) {
    if (pPlayer === pComp) return 'SERI'
    const winConditions = {
        gajah: 'orang',
        orang: 'semut',
        semut: 'gajah'
    };
    return (winConditions[pPlayer] === pComp) ? 'MENANG' : 'KALAH';
}

function putar() {
    const imgComp = document.querySelector('.img-komputer')
    const gambar = ['gajah', 'semut', 'orang']
    let i = 0
    const waktuMulai = new Date().getTime()
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval
            return
        }
        imgComp.setAttribute('src', '/img/' + gambar[i++] + '.png')
        if (i == gambar.length) i = 0
    }, 100)
}

player.forEach(function (e) {
    e.addEventListener('click', function () {
        const pPlayer = e.className
        const pComp = pilihanComputer();
        const hasil = rules(pPlayer, pComp)

        putar()
        setTimeout(function () {
            const imgComp = document.querySelector('.img-komputer')
            imgComp.setAttribute('src', '/img/' + pComp + '.png')
            info.innerHTML = hasil;
        }, 1000)
    })
});