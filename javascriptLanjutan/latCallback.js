// $('.search-button').on('click', function () {
//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=31f3a60e&s=' + $('.input-keyword').val() + '&y=' + $('.input-year').val(),
//         success: results => {
//             const movies = results.Search
//             let cards = ''
//             movies.forEach(m => {
//                 cards += showMovie(m)
//             })
//             $('.movie-container').html(cards)

//             // ketika tombol diclik
//             $('.modal-detail-button').on('click', function () {
//                 $.ajax({
//                     url: 'http://www.omdbapi.com/?apikey=31f3a60e&i=' + $(this).data('imdbid'),
//                     success: m => {
//                         const headerDetail = showHeaderDetail(m)
//                         const detailMovie = showDetail(m)
//                         $('.modal-header').html(headerDetail)
//                         $('.modal-body').html(detailMovie)
//                     }
//                 })

//             })
//         },
//         error: (e) => console.log(e.responseText)
//     })

// })


// Pakai Fetch
const searchButton = document.querySelectorAll('.search-button');
searchButton.forEach(btn => {
    btn.addEventListener('click', function () {
        const inputKey = document.querySelector('.input-keyword');
        const inputYear = document.querySelector('.input-year');
        if (inputKey.value.trim() === "") {
            alert("Waduh, tolong isi judul filmnya dulu ya!");
            return;
        }
        fetch('http://www.omdbapi.com/?apikey=31f3a60e&s=' + inputKey.value + '&y=' + inputYear.value)
            .then(response => response.json())
            .then(response => {
                if (response.Search) {
                    const movies = response.Search;
                    let cards = '';
                    movies.forEach(m => cards += showMovie(m));
                    document.querySelector('.movie-container').innerHTML = cards;

                    // ketika button Show Detai di click
                    const detailButton = document.querySelectorAll('.modal-detail-button');
                    detailButton.forEach(btn => {
                        btn.addEventListener('click', function () {
                            const imdbid = this.dataset.imdbid;
                            fetch('http://www.omdbapi.com/?apikey=31f3a60e&i=' + imdbid)
                                .then(response => response.json())
                                .then(m => {
                                    const headerDetail = showHeaderDetail(m);
                                    const movieDetail = showDetail(m);
                                    const modalHeader = document.querySelector('.modal-header');
                                    const modalBody = document.querySelector('.modal-body');
                                    modalHeader.innerHTML = headerDetail;
                                    modalBody.innerHTML = movieDetail;
                                })
                        })
                    })
                } else {
                    document.querySelector('.movie-container').innerHTML = `<p class="text-center">Film tidak ditemukan!</p>`;
                }
            });
    })
})



function showMovie(m) {
    return `<div class="col-md-3 my-3">
                <div class="card" style="width: 18rem;">
                    <img src="${m.Poster}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${m.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Detail</a>
                    </div>
                </div>
            </div>`;
}
function showHeaderDetail(m) {
    return `<h1 class="modal-title fs-5" id="movieDetailModalLabel">${m.Title} (${m.Ratings[0].Value})</h1>`
}
function showDetail(m) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" class="img-fluid" alt="">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item">
                                <h4>${m.Title} (${m.Year})</h4>
                            </li>
                            <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
                            <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
                            <li class="list-group-item"><strong>Writer : </strong>${m.Writer}</li>
                            <li class="list-group-item"><strong>Plot : </strong> <br>${m.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`
}