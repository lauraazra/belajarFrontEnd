/* 
Otentikasi (Auth)
- Tanpa Otentikasi
- Key / Token = ada batasnya
- OAuth = contoh login via google atau facebook
- CORS = ada batasan
*/
const listCharacter = document.querySelector('#listCharacter');
const searchName = document.querySelector('.search-name');
let currentPage = 1;
let currentName = "";
let currentGender = "";
let currentStatus = "";
let currentSpecies = "";

function getCharacters(page = 1, name = "", gender = "", status = "", species = "") {
    const url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&gender=${gender}&status=${status}&species=${species}`;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => { throw new Error(err.error) });
            }
            return response.json();
        })
        .then(data => {
            return data;
        });
}

async function renderData(page = 1, name = "", gender = "", status = "", species = "") {
    currentPage = page;
    currentName = name;
    currentGender = gender;
    currentStatus = status;
    currentSpecies = species;

    try {
        const data = await getCharacters(page, name, gender, status, species);
        listCharacter.innerHTML = data.results.map(showData).join('')
        renderPagination(currentPage, data.info.pages || 1);
    } catch (err) {
        listCharacter.innerHTML = `<h3 class="text-center">Karakter tidak ditemukan!</h3>`;
        renderPagination(1, 1);
    }


}

function changePage(page, totalPages) {
    event.preventDefault();
    if (page >= 1 && page <= totalPages) {
        renderData(page, currentName, currentGender, currentStatus, currentSpecies);
    }
}

function renderPagination(currentPage, totalPages) {
    const paginationList = document.querySelector('#pagination-list');
    paginationList.innerHTML = '';

    paginationList.innerHTML += `
        <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="changePage(${currentPage - 1}, ${totalPages})">Previous</a>
        </li>`;

    let start = Math.max(1, currentPage - 4);
    let end = Math.min(totalPages, start + 8);
    if (end - start < 8) start = Math.max(1, end - 8);

    for (let i = start; i <= end; i++) {
        paginationList.innerHTML += `
            <li class="page-item ${i === currentPage ? 'active' : ''}">
                <a class="page-link" href="#" onclick="changePage(${i}, ${totalPages})">${i}</a>
            </li>`;
    }

    paginationList.innerHTML += `
        <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="changePage(${currentPage + 1}, ${totalPages})">Next</a>
        </li>`;
}

function getBadgeClass(type, value) {
    const val = value.toLowerCase();

    if (type === 'gender') {
        if (val === 'male') return 'border-primary text-primary';
        if (val === 'female') return 'border-danger text-danger'; // Pink pake danger/primary-subtle
        return 'border-secondary text-secondary';
    }

    if (type === 'status') {
        if (val === 'alive') return 'border-success text-success';
        if (val === 'dead') return 'border-danger text-danger';
        return 'border-secondary text-secondary';
    }

    return 'border-secondary text-secondary';
}

function getIcon(type, value) {
    const val = value.toLowerCase();

    if (type === 'gender') {
        if (val === '') return '<i class="fa-solid fa-mars-and-venus"></i>';
        if (val === 'male') return '<i class="fa-solid fa-mars"></i>';
        if (val === 'female') return '<i class="fa-solid fa-venus"></i>';
        if (val === 'genderless') return '<i class="fa-solid fa-genderless"></i>';
        if (val === 'unknown') return '<i class="fa-regular fa-circle-question"></i>';
    }

    if (type === 'status') {
        if (val === '') return ' ';
        if (val === 'alive') return '<i class="fa-solid fa-heart"></i>';
        if (val === 'dead') return '<i class="fa-solid fa-skull"></i>';
        if (val === 'unknown') return '<i class="fa-regular fa-circle-question"></i>';
    }
}

function showData(data) {
    const genderClass = getBadgeClass('gender', data.gender);
    const statusClass = getBadgeClass('status', data.status);
    const genderIcon = getIcon('gender', data.gender)
    const statusIcon = getIcon('status', data.status)
    return `
                <div class="col-md-3 mt-3">
                    <div class="card" style="width: 18rem;">
                        <img src="${data.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${data.name}</h5>
                            <div class="d-flex flex-wrap gap-2">
                                <h6 class="badge border border-secondary ${genderClass}">${genderIcon} ${data.gender}</h6>
                                <h6 class="badge border border-secondary ${statusClass}">${statusIcon} ${data.status}</h6>
                                <h6 class="badge border border-secondary text-black">${data.species}</h6>
                            </div>
                            ${data.type ? `<h6 class="card-subtitle mb-2 text-body-dark">Type: ${data.type}</h6>` : ''}
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            `
}

async function getSpecies() {
    const cachedSpecies = localStorage.getItem('speciesList');
    if (cachedSpecies) return JSON.parse(cachedSpecies);

    let speciesList = new Set();
    for (let i = 1; i <= 42; i++) {
        const data = await getCharacters(i);
        data.results.forEach(char => speciesList.add(char.species));
    }

    const arraySpecies = Array.from(speciesList);
    localStorage.setItem('speciesList', JSON.stringify(arraySpecies));
    return arraySpecies;
}

async function populateSpesiesMenu() {
    const setSpecies = Array.from(await getSpecies())

    const dropdownMenu = document.querySelector('#dropdownSpecies');

    dropdownMenu.insertAdjacentHTML('beforeend', `<li><a class="dropdown-item" href="#" onclick="updateFilter('species', '', '#speciesBtn')">All Species</a></li>`);

    setSpecies.forEach(m => {
        dropdownMenu.insertAdjacentHTML('beforeend', `<li><a class="dropdown-item" href="#" onclick="updateFilter('species', '${m}', '#speciesBtn')">${m}</a></li>`);
    })
}

let debounceTimer;
searchName.addEventListener('keyup', function (e) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        let name = e.target.value;
        renderData(1, name, currentGender, currentStatus, currentSpecies);
    }, 500);
})

function updateFilter(type, value, elementId) {
    event.preventDefault()
    if (type === 'gender') { currentGender = value }
    if (type === 'status') { currentStatus = value }
    if (type === 'species') { currentSpecies = value }

    const btn = document.querySelector(elementId);
    let label = (value === '') ? `All ${type.charAt(0).toUpperCase() + type.slice(1)}` : value;
    let icon = '';
    if (type === 'gender' || type === 'status') { icon = getIcon(type, value) + ' '; }
    btn.innerHTML = `${icon} ${label}`;

    renderData(1, currentName, currentGender, currentStatus, currentSpecies);
}

renderData()
populateSpesiesMenu()

