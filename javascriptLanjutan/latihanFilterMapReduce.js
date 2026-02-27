// ambil videonya
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// filter hanya JS Lanjutan
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

    // ambil durationnya
    .map(duration => duration.dataset.duration)

    // jadiin int dan totalin berapa detik
    .map(waktu => {
        const parts = waktu.split(':')
            .map(part => parseFloat(part))
        return (parts[0] * 60) + parts[1]
    })

    // jumlahin semua detik
    .reduce((total, detik) => total + detik)

// balikin format waktu
let jam = Math.floor(jsLanjut / 3600)
let menit = Math.floor((jsLanjut / 60) - (jam * 60))
let detik = jsLanjut - ((menit * 60) + (jam * 3600))

// balikin ke HTML
const pJmlVideo = document.querySelectorAll('.jumlah-video');
pJmlVideo[0].textContent = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length

const pDurasi = document.querySelectorAll('.total-durasi');
pDurasi[0].textContent = `${jam} jam, ${menit} menit, ${detik} detik`