const express = require('express')
const expressEjsLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000
const { readContact, detailContact, addContact, findContact, deleteContact, updateContact, deleteAllContacts } = require('./utils/contacts.js')
const { body, validationResult } = require('express-validator')

// Flah Setting
const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')

// ejs
app.set('view engine', 'ejs')

// third party middleware
app.use(expressEjsLayouts)
app.use(cookieParser('secret'))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 } // Sesi aktif 1 menit
}));
app.use(flash())

// built in middleware
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true })); // penerjemah url encoded pas ngirim data (post)

// Index atau Home
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

// About
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        layout: 'layouts/main'
    })
})

// Contact List
app.get('/contact', (req, res) => {
    const contacts = readContact();
    res.render('contact', {
        title: 'Contact',
        layout: 'layouts/main',
        contacts,
        msg: req.flash('msg')
    })
})

// Contact Add
app.get('/contact/add', (req, res) => {
    res.render('addContact', {
        title: 'Tambah Contact',
        layout: 'layouts/main'
    })
})

// Contact Add Proses
app.post('/contact', [
    body('nama').custom(value => {
        if (findContact(value)) {
            throw new Error('Nama sudah digunakan!')
        }
        return true
    }),
    body('email', 'Input Email Salah!').isEmail(),
    body('nohp', 'Input No Hp Salah!').isMobilePhone()
], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.render('addContact', {
            title: 'Tambah Contact',
            layout: 'layouts/main',
            errors: errors.array()
        })
    }
    else {
        addContact(req.body)
        req.flash('msg', 'Data Berhasil Ditambah!')
        res.redirect('/contact')
    }
})

// Contact Delete All
app.get('/contact/deleteAll', (req, res) => {
    deleteAllContacts()
    req.flash('msg', 'Semua Contact Telah Dihapus!')
    res.redirect('/contact')
})

// Contact Delete
app.get('/contact/delete/:nama', (req, res) => {
    const contact = findContact(req.params.nama)
    if (!contact) {
        res.status(404);
        res.render('detailContact', {
            title: 'Detail Contact',
            layout: 'layouts/main',
            contact: null,
        })
    } else {
        deleteContact(req.params.nama)
        req.flash('msg', 'Data Berhasil Dihapus!')
        res.redirect('/contact')
    }
})

// Contact Edit
app.get('/contact/edit/:nama', (req, res) => {
    const contact = findContact(req.params.nama)
    res.render('editContact', {
        title: 'Edit Contact',
        layout: 'layouts/main',
        contact
    })
})

// Proses Update Proses
app.post('/contact/update', [
    body('nama').custom((value, { req }) => {
        if (value !== req.body.oldNama && findContact(value)) {
            throw new Error('Nama sudah digunakan!')
        }
        return true
    }),
    body('email', 'Input Email Salah!').isEmail(),
    body('nohp', 'Input No Hp Salah!').isMobilePhone()
], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.render('editContact', {
            title: 'Edit Contact',
            layout: 'layouts/main',
            errors: errors.array(),
            contact: req.body
        })
    }
    else {
        updateContact(req.body)
        req.flash('msg', 'Data Berhasil Diedit!')
        res.redirect('/contact')
    }
})

// Contact Detail
app.get('/contact/:nama', (req, res) => {
    const contact = detailContact(req.params.nama)
    res.render('detailContact', {
        title: 'Detail Contact',
        layout: 'layouts/main',
        contact
    })
})

app.use('/', (req, res) => {
    res.status(404)
    res.send('<h1>Not Found (404)</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


