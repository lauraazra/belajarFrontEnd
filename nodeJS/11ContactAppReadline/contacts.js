const fs = require('fs');
const readline = require('node:readline');
const validator = require('validator')
const chalk = require('chalk')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

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

// Fungsi membuat pertanyaan
const writeQuestion = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (value) => { resolve(value) })
    })
}

// Validator
const valid = ((noHp, email) => {
    const handleError = (msg) => {
        console.log(chalk.red.inverse(` ${msg} `));
        return false;
    };
    if (noHp && noHp !== '-' && !validator.isMobilePhone(noHp, 'id-ID')) return handleError('No HP salah!');
    if (email && email !== '-' && !validator.isEmail(email)) return handleError('Email salah!');

    return true
})

// read contact.json
const readContact = () => {
    const file = fs.readFileSync('data/contacts.json', 'utf8')
    const contactData = JSON.parse(file)
    return contactData
}

// Check Duplikasi
const checkDuplicate = (contactsData, nama) => {
    const duplicate = contactsData.find(c => c.nama === nama)
    if (duplicate) {
        console.log(chalk.yellow.inverse(' Nama sudah terdaftar, gunakan nama lain! '));
        rl.close()
        return true
    }
    return false
}

// Fungsi menyimpan kontak
const saveContact = (nama, noHp, email) => {
    if (!valid(noHp, email)) {
        rl.close();
        return false;
    }

    const contactData = readContact()

    if (checkDuplicate(contactData, nama)) return false

    const contact = { nama, noHp, email }
    contactData.push(contact)

    fs.writeFileSync('data/contacts.json', JSON.stringify(contactData))
    console.log(chalk.green.inverse.bold(`Data ${nama} berhasil disimpan!`))
    rl.close()
}

// UpdateContact 1 nama
const updateContact = (oldName, newName, noHp, email) => {
    const contactsData = readContact()

    const index = contactsData.findIndex(c => c.nama === oldName)

    if (index == -1) {
        console.log(chalk.yellow.inverse(` Data ${oldName} tidak ditemukan `));
        rl.close()
        return false
    }

    if (!valid(noHp, email)) {
        rl.close();
        return false;
    }

    if (checkDuplicate(contactsData, newName)) return false

    contactsData[index].nama = newName || contactsData[index].nama
    contactsData[index].noHp = noHp || contactsData[index].noHp
    contactsData[index].email = email || contactsData[index].email

    fs.writeFileSync('data/contacts.json', JSON.stringify(contactsData))
    console.log(chalk.green.inverse(`Data ${oldName} berhasil diubah!`))
    rl.close()
}

// Melihat isi contact
const listContact = () => {
    const contactData = readContact()
    console.log(chalk.cyan.inverse(`List Kontak`))
    console.table(contactData);
    process.exit()
}

// Lihat detailContact
const detailContact = (nama) => {
    const contactsData = readContact()

    const newContacts = contactsData.find((c) => c.nama === nama)

    if (!newContacts) {
        console.log(`Data ${nama} tidak ditemuka`)
        rl.close()
        return false
    }

    console.log(chalk.cyan.inverse(`Detail data ${nama}`))
    console.table(newContacts);
    rl.close()

}

// Menghapus 1 nama
const removeContact = (nama) => {
    const contactsData = readContact()

    const newContacts = contactsData.filter((c) => c.nama !== nama)

    if (newContacts.length === contactsData.length) {
        console.log(`data ${nama}, tidak dapat ditemukan`)
        rl.close()
        return false
    }

    fs.writeFileSync('data/contacts.json', JSON.stringify(newContacts))
    console.log(chalk.red.bold(`Kontak ${nama} berhasil dihapus!`))
    rl.close()
}

// Menghapus semua
const removeAllContact = () => {
    fs.writeFileSync('data/contacts.json', '[]')
    console.log(chalk.red.bold(' Semua kontak berhasil dihapus! '))
    rl.close()
}

module.exports = { writeQuestion, saveContact, listContact, detailContact, removeContact, updateContact, removeAllContact }