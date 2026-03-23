const fs = require('fs');
const readline = require('node:readline');

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

// Fungsi menyimpan kontak
const saveContact = (nama, noHp, email) => {
    const contact = { nama, noHp, email }
    const file = fs.readFileSync('data/contacts.json', 'utf8')
    const contacts = JSON.parse(file)
    contacts.push(contact)
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
    console.log(`Terimakasih ${nama}, dengan no hp ${noHp}`)
    rl.close()
}

module.exports = { writeQuestion, saveContact }