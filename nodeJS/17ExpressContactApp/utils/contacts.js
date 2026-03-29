const fs = require('fs');

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

// read contact.json
const readContact = () => {
    const file = fs.readFileSync('data/contacts.json', 'utf8')
    const contactData = JSON.parse(file)
    return contactData
}

// Tambah kontak
const addContact = (newContact) => {
    const contacts = readContact()
    contacts.push(newContact)
    saveContact(contacts)
}

// Simpan Kontak
const saveContact = (contacts) => {
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
}

// Hapus semua
const deleteAllContacts = () => {
    fs.writeFileSync('data/contacts.json', '[]')
}

// Check Duplikasi
const findContact = (nama) => {
    const contacts = readContact()
    return contacts.find((c) => c.nama === nama)
}

// Lihat Detail Contact
const detailContact = (nama) => {
    const contacts = readContact()
    const contact = contacts.find((c) => c.nama === nama)
    return contact
}

// Hapus Contact
const deleteContact = (nama) => {
    const contacts = readContact()
    const filteredContacts = contacts.filter((c) => c.nama !== nama)
    saveContact(filteredContacts)
}

// Edit Contact
const updateContact = (updateContact) => {
    const contacts = readContact()
    const filteredContacts = contacts.filter((c) => c.nama !== updateContact.oldNama)
    delete updateContact.oldNama
    filteredContacts.push(updateContact)
    saveContact(filteredContacts)
}

module.exports = { readContact, detailContact, addContact, findContact, deleteContact, updateContact, deleteAllContacts }