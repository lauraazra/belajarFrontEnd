const contacts = require('./contacts')
/* 
bisa pakai object destructuring jadi
{writeQuestion, savecontact}
*/

const main = async () => {
    const nama = await contacts.writeQuestion('Masukan nama Anda: ')
    const noHp = await contacts.writeQuestion('Masukan no hp Anda: ')
    const email = await contacts.writeQuestion('Masukan email Anda: ')

    contacts.saveContact(nama, noHp, email)
}

main()



