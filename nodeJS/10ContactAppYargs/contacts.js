const fs = require('fs');
const validator = require('validator')
const chalk = require('chalk')

// membuat folder data jika belum ada
const dirPath = './data'
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
}

// membuat file contact.json jika belum ada
const dataPath = './data/contacts.json'
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8')
}

// Validator
const valid = ((noHp, email) => {
    const handleError = (msg) => {
        console.log(chalk.red.inverse(` ${msg} `));
        return false;
    }
    if (noHp && noHp !== '-' && !validator.isMobilePhone(noHp, 'id-ID')) return handleError('No HP salah!')
    if (email && email !== '-' && !validator.isEmail(email)) return handleError('Email salah!')

    return true
})

// load contact.json
const loadContact = () => {
    const file = fs.readFileSync('data/contacts.json', 'utf8')
    const contactData = JSON.parse(file)
    return contactData
}

// Cek Duplikasi
const checkDuplicate = (contactData, nama) => {
    const duplicate = contactData.find((c) => c.nama === nama)
    if (duplicate) {
        console.log(chalk.yellow.inverse(' Nama sudah terdaftar, gunakan nama lain! '));
        return true
    }
    return false
}

// Fungsi menyimpan kontak
const saveContact = (nama, noHp, email) => {
    if (!valid(noHp, email)) return false;

    const contactData = loadContact()
    if (checkDuplicate(contactData, nama)) return false

    const contact = { nama, noHp, email }
    contactData.push(contact)

    fs.writeFileSync('data/contacts.json', JSON.stringify(contactData))
    console.log(chalk.green.inverse.bold(`Data ${nama} berhasil disimpan!`))
}

// Update 1 nama
const contactUpdate = (oldName, newName, noHp, email) => {
    const contactsData = loadContact()

    const index = contactsData.findIndex(c => c.nama === oldName)

    if (index == -1) {
        console.log(chalk.yellow.inverse(` Data ${oldName} tidak ditemukan `));
        return false
    }

    if (!valid(noHp, email)) return false;
    if (checkDuplicate(contactsData, newName)) return false

    contactsData[index].nama = newName || contactsData[index].nama
    contactsData[index].noHp = noHp || contactsData[index].noHp
    contactsData[index].email = email || contactsData[index].email

    fs.writeFileSync('data/contacts.json', JSON.stringify(contactsData))
    console.log(chalk.green.inverse(`Data ${oldName} berhasil diubah!`))
}

// Melihat isi contact
const contactList = () => {
    const contactData = loadContact()
    console.log(chalk.cyan.inverse(`List Kontak`))
    console.table(contactData);
    process.exit()
}

// Lihat detail
const contactDetail = (nama) => {
    const contactsData = loadContact()

    const newContacts = contactsData.find((c) => c.nama === nama)

    if (!newContacts) {
        console.log(`Data ${nama} tidak ditemuka`)
        return false
    }

    console.log(chalk.cyan.inverse(`Detail data ${nama}`))
    console.table(newContacts)
}

// Menghapus 1 nama
const contactRemove = (nama) => {
    const contactsData = loadContact()

    const newContacts = contactsData.filter((c) => c.nama !== nama)

    if (newContacts.length === contactsData.length) {
        console.log(`data ${nama}, tidak dapat ditemukan`)
        return false
    }

    fs.writeFileSync('data/contacts.json', JSON.stringify(newContacts))
    console.log(chalk.red.bold(`Kontak ${nama} berhasil dihapus!`))
}

// Menghapus semua
const contactRemoveAll = () => {
    fs.writeFileSync('data/contacts.json', '[]')
    console.log(chalk.red.bold(' Semua kontak berhasil dihapus! '))
}

module.exports = { saveContact, contactList, contactDetail, contactRemove, contactUpdate, contactRemoveAll }