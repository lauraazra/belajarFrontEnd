/*
Fitur ExpressJS =>
    - menangani req berbagai metode http (routes)
    - MVC
    - Integrasi dengan "view" rendering engine untuk kelola template
    - Middleware

Unopionited => framework tanpa aturan baku agar ga striks
*/


// const http = require('http')
// const fs = require('fs')
// const port = 3000

// const renderHTML = (path, res) => {
//     fs.readFile(path, (err, data) => {
//         if (err) {
//             res.writeHead(404, { 'Content-Type': 'text/html' });
//             res.write(`<h1>Halaman Salah</h1>`)
//         } else {
//             res.writeHead(200, { 'Content-Type': 'text/html' })
//             res.write(data)
//         }
//         res.end()
//     })
// }

// http
//     .createServer((req, res) => {
//         const url = req.url
//         if (url === '/') {
//             renderHTML('./index.html', res);
//         } else {
//             renderHTML(`./${url.slice(1)}.html`, res);
//         }
//     })
//     .listen(port, () => {
//         console.log(`Server is listening on port ${port}`)
//     })


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    // res.send('Hello World!')
    // bisa kirim json
    // res.json({
    //     nama: 'Azra',
    //     email: 'lazraaprilyanti@gmail.com',
    //     noHP: '082121555554'
    // })

    // bisa kirim file pake sendFile, tapi kedepannya jangan pakai ini
    res.sendFile('./index.html', { root: __dirname })
})
app.get('/about', (req, res) => {
    // res.send('Halaman About')
    res.sendFile('./about.html', { root: __dirname })
})
app.get('/contact', (req, res) => {
    // res.send('Halaman Contact')
    res.sendFile('./contact.html', { root: __dirname })
})

// Req itu apa yang diterima Expressnya
// cek dengan http://localhost:3000/product/20/category/22
app.get('/product/:id/category/:idCat', (req, res) => {
    res.send(
        `Product ID: ${req.params.id} <br>
        Category ID: ${req.params.idCat}`
    )
})
// cek dengan http://localhost:3000/item/20?category=baju
app.get('/item/:id', (req, res) => {
    res.send(
        `item ID: ${req.params.id} <br>
        Category ID: ${req.query.category}`
    )
})

// dijalankan untuk req apapun, jadi jangan simpen paling atas, digunakan jika halaman ga ada
app.use('/', (req, res) => {
    res.status(404)
    res.send('<h1>Not Found (404)</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
