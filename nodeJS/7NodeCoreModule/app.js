const fs = require('fs')

// console.log(fs)

// menuliskan string ke file secara synchronous
// fs.writeFileSync('test.txt', 'Hello World secara synchronous!')
// kalo file udah ada isinya ditimpa

// try {

//     fs.writeFileSync('data/test.txt', 'Hello World secara synchronous!')
//     // kalo folder ga ada, ga akan jalan
// } catch (e) {
//     console.log(e)
// }


// menulis ke file asynchronous
// fs.writeFile('data/test.txt', 'Hello world secara asynchronous', (err) => console.log(err))


// membaca isi file synchronous
// const data = fs.readFileSync('test.txt', 'utf-8')
// console.log(data) // harus pakai utf-8
// console.log(data.toString())



// membaca isi file asynchronous
// fs.readFile('test.txt', 'utf-8', (err, data) => {
//     if (err) throw err
//     console.log(data)
// })

const readline = require('node:readline');
const { json } = require('node:stream/consumers');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,

})

rl.question('Masukan nama anda: ', (nama) => {
    rl.question(`Masukan no telpon anda: `, (noHp) => {
        const contact = { nama, noHp }
        const file = fs.readFileSync('data/contacts.json', 'utf8')
        const contacts = JSON.parse(file)

        contacts.push(contact)

        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))

        // contacts.push(contact)

        // fs.writeFileSync('data/contacts.json', JSON.stringify(contact))

        console.log(`Terimakasih ${nama}, dengan no hp ${noHp}`)
        rl.close() // harus di question terdalam
    })
})

