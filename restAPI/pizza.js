// function allMenu() {
//     $.getJSON("pizza.json",
//         function (data) {
//             let menu = data.menu;
//             $.each(menu, function (i, data) {
//                 $('#daftarMenu').append(`
//                     <div class="col-md-3 mt-2">
//                         <div class="card" style="width: 18rem;">
//                             <img src="img/pizza/${data.gambar}" class="card-img-top">
//                             <div class="card-body">
//                                 <h5 class="card-title">${data.nama}"</h5>
//                                 <p class="card-text">${data.deskripsi}"</p>
//                                 <h5>${new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(data.harga)}</h5>
//                                 <a href="#" class="btn btn-primary">Pesan Sekarang</a>
//                             </div>
//                         </div>
//                     </div>
//                 `)
//             })
//         }
//     );
// }

// allMenu()

// $('.nav-link').on('click', function () {
//     $('.nav-link').removeClass('active');
//     $(this).addClass('active')

//     let kategori = $(this).html();
//     $('.judulKategori').html(kategori)

//     if (kategori === 'All Menu') {
//         allMenu()
//         return
//     }

//     $.getJSON('pizza.json', function (data) {
//         let menu = data.menu
//         let content = ''

//         $.each(menu, function (i, data) {
//             if (data.kategori === kategori.toLowerCase()) {
//                 content += `
//                     <div class="col-md-3 mt-2">
//                         <div class="card" style="width: 18rem;">
//                             <img src="img/pizza/${data.gambar}" class="card-img-top">
//                             <div class="card-body">
//                                 <h5 class="card-title">${data.nama}"</h5>
//                                 <p class="card-text">${data.deskripsi}"</p>
//                                 <h5>${new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(data.harga)}</h5>
//                                 <a href="#" class="btn btn-primary">Pesan Sekarang</a>
//                             </div>
//                         </div>
//                     </div>
//                 `
//             }
//         })

//         $('#daftarMenu').html(content)
//     })
// })

const daftarMenu = document.querySelector('#daftarMenu');
const judulKategori = document.querySelector('.judulKategori');
const navLinks = document.querySelectorAll('.nav-link');

async function renderMenu(kategori = 'All Menu') {
    let result = await getMenu();
    let menu = result.menu;
    let content = '';

    menu.forEach(data => {
        console.log(data)
        if (kategori === 'All Menu' || data.kategori === kategori.toLowerCase()) {
            content += showMenu(data);
        }
    });
    daftarMenu.innerHTML = content;
}

renderMenu();

navLinks.forEach(btn => {
    btn.addEventListener('click', async function () {
        navLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');

        let kategori = this.textContent
        judulKategori.textContent = kategori

        renderMenu(kategori);
    })
})

function getMenu() {
    return fetch('pizza.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json()
        })
        .then(response => {
            // console.log("Isi response dari API:", response);
            if (response.Response === "False") {
                throw new Error(response.Error)
            }
            return response
        })
}

function showMenu(data) {
    return `
        <div class="col-md-3 mt-2">
            <div class="card" style="width: 18rem;">
                <img src="img/pizza/${data.gambar}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${data.nama}</h5>
                    <p class="card-text">${data.deskripsi}</p>
                    <h5>${new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(data.harga)}</h5>
                    <a href="#" class="btn btn-primary">Pesan Sekarang</a>
                </div>
            </div>
        </div>
    `
}