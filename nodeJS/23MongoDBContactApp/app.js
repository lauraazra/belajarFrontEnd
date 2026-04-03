const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000

require('./utils/db')
const Contact = require('./model/contact')

// Validasi form
const { body, validationResult } = require('express-validator')

// Methode Override (Delete, Put)
var methodOverride = require('method-override')
app.use(methodOverride('_method'))

// Setup EJS
app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// Flah Setting
const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')
app.use(cookieParser('secret'))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 } // Sesi aktif 1 menit
}));
app.use(flash())

// Halaman Home
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

// Halaman About
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        layout: 'layouts/main'
    })
})

// Halaman Tambah Kontak
app.get('/contact/add', (req, res) => {
    res.render('addContact', {
        title: 'Tambah Kontak',
        layout: 'layouts/main'
    })
})

// Proses Tambah Kontak
app.post('/contact', [
    body('nama').custom(async (value) => {
        if (await Contact.findOne({ nama: value })) {
            throw new Error('Nama sudah digunakan!')
        }
        return true
    }),
    body('email', 'Input Email Salah!').isEmail(),
    body('nohp', 'Input No Hp Salah!').isMobilePhone()
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.render('addContact', {
            title: 'Tambah Contact',
            layout: 'layouts/main',
            errors: errors.array(),
            contact: req.body
        })
    }
    else {
        try {
            await Contact.create(req.body)
            req.flash('msg', 'Data Berhasil Ditambah!')
            res.redirect('/contact')
        } catch (e) {
            console.log('Error saat simpan ke DB:', e);
            res.status(500).send('Terjadi kesalahan pada server');
        }
    }
})

// Delete Kontak
app.delete('/contact', async (req, res) => {
    try {
        await Contact.deleteOne({ _id: req.body._id })
        req.flash('msg', 'Data Berhasil Dihapus!')
        res.redirect('/contact')
    } catch (e) {
        const statusCode = e.status || 500;
        res.status(statusCode).render('detailContact', {
            title: 'Detail Contact',
            layout: 'layouts/main',
            contact: null,
        });
    }
})

// Delete All
app.delete('/contact/deleteAll', async (req, res) => {
    try {
        await Contact.deleteMany({})
        req.flash('msg', 'Data Berhasil Dihapus Semua!')
        res.redirect('/contact')
    } catch (e) {
        console.log('Error hapus semua data', e);
        res.status(500).send('Terjadi kesalahan pada server');
    }
})

// Halaman Edit Kontak
app.get('/contact/edit/:_id', async (req, res) => {
    const contact = await Contact.findOne({ _id: req.params._id })
    res.render('editContact', {
        title: 'Edit Contact',
        layout: 'layouts/main',
        contact
    })
})

// Proses Edit Kontak
app.put('/contact', [
    body('nama').custom(async (value, { req }) => {
        if (value !== req.body.oldNama && await Contact.findOne({ nama: value })) {
            throw new Error('Nama sudah digunakan!')
        }
        return true
    }),
    body('email', 'Input Email Salah!').isEmail(),
    body('nohp', 'Input No Hp Salah!').isMobilePhone()
], async (req, res) => {
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
        try {
            await Contact.findByIdAndUpdate(req.body._id, {
                $set: {
                    nama: req.body.nama,
                    nohp: req.body.nohp,
                    email: req.body.email
                }
            })
            req.flash('msg', 'Data Berhasil Diedit!')
            res.redirect('/contact')
        } catch (e) {
            const statusCode = e.status || 500;
            res.status(statusCode).render('editContact', {
                title: 'Edit Contact',
                layout: 'layouts/main',
                contact: req.body,
            });
        }
    }
})

// Halaman Kontak
app.get('/contact', async (req, res) => {
    const contacts = await Contact.find()
    res.render('contact', {
        title: 'Contact',
        layout: 'layouts/main',
        contacts,
        msg: req.flash('msg')
    })
})

// Halaman Detail Kontak
app.get('/contact/:_id', async (req, res) => {
    const contact = await Contact.findById(req.params._id)
    res.render('detailContact', {
        title: 'Detail Contact',
        layout: 'layouts/main',
        contact
    })
})

app.listen(port, () => {
    console.log(`Mongo Contact App | Listening at http://localhost:${port}`)
})