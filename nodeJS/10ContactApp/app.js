const contacts = require('./contacts')
/* 
bisa pakai object destructuring jadi
{writeQuestion, savecontact}
*/

// yargs add
const yargs = require('yargs/yargs')(process.argv.slice(2))
yargs.command(
    {
        command: 'add',
        describe: 'Add Contact',
        builder: {
            nama: { type: 'string', demandOption: true },
            noHp: { type: 'string', demandOption: false },
            email: { type: 'string', demandOption: false }
        },
        handler(argv) {
            console.log("--- Mode Argumen Terdeteksi ---");
            contacts.saveContact(argv.nama, argv.noHp || '-', argv.email || '-');
        }
    }
)

// yargs list
yargs.command(
    {
        command: 'list',
        describe: 'list Contact',
        handler() {
            contacts.list();
        }
    }
)

// yargs detail
yargs.command(
    {
        command: 'detail',
        describe: 'detail Contact',
        builder: {
            nama: { type: 'string', demandOption: true },
        },
        handler(argv) {
            contacts.detail(argv.nama);
        }
    }
)

// yargs Update
yargs.command(
    {
        command: 'update',
        describe: 'update Contact',
        builder: {
            oldName: { type: 'string', demandOption: true },
            newName: { type: 'string', demandOption: false },
            noHp: { type: 'string', demandOption: false },
            email: { type: 'string', demandOption: false }
        },
        handler(argv) {
            contacts.update(argv.oldName, argv.newName, argv.noHp, argv.email)
        }
    }
)

// yargs delete
yargs.command(
    {
        command: 'remove',
        describe: 'remove Contact',
        builder: {
            nama: { type: 'string', demandOption: true },
        },
        handler(argv) {
            contacts.remove(argv.nama)
        }
    }
)
// yargs delete all
yargs.command(
    {
        command: 'removeAll',
        describe: 'removeAll Contact',
        handler() {
            contacts.removeAll()
        }
    }
)

// fungsi utama readline
const main = async () => {
    const nama = await contacts.writeQuestion('Masukan nama Anda: ')
    const noHp = await contacts.writeQuestion('Masukan no hp Anda: ')
    const email = await contacts.writeQuestion('Masukan email Anda: ')

    contacts.saveContact(nama, noHp, email)
}

// cek apakah pakai command line atau readline
const args = process.argv.slice(2)
if (args.length === 0) {
    main();
} else {
    yargs.parse();
}
