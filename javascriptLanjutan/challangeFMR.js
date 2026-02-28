// Bikin buat yang lainnya juga
const videos = Array.from(document.querySelectorAll('[data-duration]'));
const pDurasi = document.querySelectorAll('.total-durasi');
const pJmlVideo = document.querySelectorAll('.jumlah-video');

// Format Waktu
let formatWaktu = totalDetik => {
    const jam = Math.floor(totalDetik / 3600)
    const menit = Math.floor((totalDetik % 3600) / 60)
    const detik = totalDetik % 60
    return `${jam} jam, ${menit} menit, ${detik} detik`
}

// Misahin kategori JAVASCRIPT LANJUTAN dan lainnya
const hasilBagi = videos.reduce((acc, video) => {
    const JSLanjut = video.textContent.includes('JAVASCRIPT LANJUTAN');
    if (JSLanjut) acc[0].push(video)
    else acc[1].push(video)
    return acc
}, [[], []])

const totalDetikKelompok = []
hasilBagi.map(kelompok => {
    const totalDetik = kelompok.map(video => {
        const parts = video.dataset.duration.split(':').map(parseFloat)
        return (parts[0] * 60) + (parts[1] || 0)
    }).reduce((total, detik) => total + detik, 0)
    totalDetikKelompok.push(formatWaktu(totalDetik));
})

// Tampilin di HTML
for (i = 0; i < hasilBagi.length; i++) {
    pDurasi[i].textContent = totalDetikKelompok[i]
    pJmlVideo[i].textContent = hasilBagi[i].length
}