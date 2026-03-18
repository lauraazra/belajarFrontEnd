// 1. Fungsi khusus rakit URL
function buildCharacterUrl(page = 1, filters = {}) {
    const { name = "", gender = "", status = "", species = "" } = filters;
    return `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&gender=${gender}&status=${status}&species=${species}`;
}

// 2. Fungsi sakti pengambil data
async function fetchCharacters(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.error || 'Terjadi kesalahan pada server');
        }
        return data;

    } catch (err) {
        console.error("Fetch Error:", err.message);
        throw err;
    }
}


// Check CLOG
// cara 1
const data = fetchCharacters(buildCharacterUrl(1, { name: 'Rick' }))
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error(err.message);
    })
// cara 2 (standar industri)
async function main() {
    try {
        const url = buildCharacterUrl(1, { name: 'Rick' });
        const data = await fetchCharacters(url);
        console.log(data);
    } catch (err) {
        console.log("Error:", err.message);
    }
}

console.log(data) // Cara 1
main(); // Cara 2



// belum belajar lebih dalam tapi katanya react lebih banyak pakai axios
import axios from 'axios';

// 1. Fungsi khusus rakit "Bahan Bakar" (Params)
// Lu nggak perlu pusing nulis `?page=` atau `&name=` lagi
function buildParams(page = 1, filters = {}) {
    return {
        page: page,
        ...filters // Otomatis masukin name, gender, dll kalau ada
    };
}

// 2. Fungsi sakti pengambil data (Universal)
// Lu tinggal ganti baseUrl-nya aja buat API lain
async function fetchData(baseUrl, params = {}) {
    try {
        const response = await axios.get(baseUrl, { params });

        // Di Axios, data udah otomatis jadi JSON di response.data
        return response.data;

    } catch (err) {
        // Axios otomatis nangkep error status 4xx/5xx (Gak perlu if !response.ok)
        const msg = err.response?.data?.error || err.message;
        throw new Error(msg);
    }
}

// --- CARA PAKAI (MAIN) ---
async function main() {
    try {
        const API_URL = 'https://rickandmortyapi.com/api/character/';
        const myParams = buildParams(1, { name: 'Rick', status: 'Alive' });

        // Panggil fungsi universal lu
        const data = await fetchData(API_URL, myParams);

        console.log("Hasil Sakti Axios:", data.results);
    } catch (err) {
        console.error("Error:", err.message);
    }
}

main();


