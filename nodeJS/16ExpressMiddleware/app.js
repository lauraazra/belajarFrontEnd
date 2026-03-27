const express = require('express')
const expressEjsLayouts = require('express-ejs-layouts')
const morgan = require('morgan')
const app = express()
const port = 3000

// ejs
app.set('view engine', 'ejs')

// third party middleware
app.use(expressEjsLayouts)
app.use(morgan('dev'))

// built in middleware
app.use(express.static('public'))

// aplication level middleware
app.use((req, res, next) => {
    console.log('time:', Date.now())
    next()
})


app.get('/', (req, res) => {
    const mahasiswa = [
        { nama: 'Azra', email: 'lazraaprilyanti@gmail.com' },
        { nama: 'Alvar', email: 'alvarazra@gmail.com' },
        { nama: 'Samudra', email: 'alvarazrasamudra@gmail.com' },
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
