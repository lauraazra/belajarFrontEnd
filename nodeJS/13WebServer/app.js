const http = require('http')
const fs = require('fs')
const port = 3000

// const server = http.createServer((req, res) => {

// })

// server.listen(3000, () => {
//     console.log(`Server is listening on port 3000`)
// })

const renderHTML = (path, res) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write(`<h1>Halaman Salah</h1>`)
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
        }
        res.end()
    })
}

http
    .createServer((req, res) => {
        const url = req.url
        if (url === '/') {
            renderHTML('./index.html', res);
        } else {
            renderHTML(`./${url.slice(1)}.html`, res);
        }
    })
    .listen(port, () => {
        console.log(`Server is listening on port ${port}`)
    })

/* 
kenapa port 3000? karena ga dipake dan udah jadi standar

yang dikembalikan itu plain text, jadi harus dirubah jadi html
*/