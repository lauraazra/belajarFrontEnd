const contacts = require('./contacts')
/* 
bisa pakai object destructuring jadi
{writeQuestion, savecontact}
*/

// fungsi utama readline
const main = async () => {
    const command = await contacts.writeQuestion('Masukan Perintah Anda: \n (add|update|list|detail|remove|removeall): ')
    switch (command.toLowerCase()) {
        case 'add': {
            const nama = await contacts.writeQuestion('Masukan nama Anda: ');
            const noHp = await contacts.writeQuestion('Masukan no hp Anda: ');
            const email = await contacts.writeQuestion('Masukan email Anda: ');
            contacts.saveContact(nama, noHp, email)
            break;
        }

        case 'update': {
            const oldName = await contacts.writeQuestion('Masukan nama yang akan diupdate: ')
            const newName = await contacts.writeQuestion('Masukan nama baru Anda: ')
            const noHp = await contacts.writeQuestion('Masukan no hp baru Anda: ')
            const email = await contacts.writeQuestion('Masukan email baru Anda: ')
            contacts.updateContact(oldName, newName, noHp, email)
            break;
        }

        case 'list': {
            contacts.listContact()
            break;
        }

        case 'detail': {
            const nama = await contacts.writeQuestion('Masukan nama yang ingin dilihat detailnya')
            contacts.detailContact(nama)
            break;
        }

        case 'remove': {
            const nama = await contacts.writeQuestion('Masukan nama yang akan dihapus')
            contacts.removeContact(nama)
            break;
        }

        case 'removeall': {
            contacts.removeAllContact()
            break;
        }

        default:
            break;
    }


}

main();
