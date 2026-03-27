/* 
View/Template Engine
- bikin file template statis
- ganti variable pada template dengan nilai sebenarnya, ditampilkan dengan HTMl
- mempermudah pembuatan halaman HTML
*/

const express = require('express')
const expressEjsLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000

// ejs
app.set('view engine', 'ejs')
app.use(expressEjsLayouts)

app.get('/', (req, res) => {
    // res.sendFile('./index.html', { root: __dirname })
    const mahasiswa = [
        {
            nama: 'Azra',
            email: 'lazraaprilyanti@gmail.com'
        },
        {
            nama: 'Alvar',
            email: 'alvarazra@gmail.com'
        },
        {
            nama: 'Samudra',
            email: 'alvarazrasamudra@gmail.com'
        },
    ]
    res.render('index', {
        title: 'Home',
        mahasiswa,
        layout: 'layouts/main'
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        layout: 'layouts/main'
    })
})
app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact',
        layout: 'layouts/main'
    })
})

app.get('/product/:id', (req, res) => {
    res.send(
        `Product ID: ${req.params.id} <br>
        Category ID: ${req.query.category}`
    )
})

app.use('/', (req, res) => {
    res.status(404)
    res.send('<h1>Not Found (404)</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
