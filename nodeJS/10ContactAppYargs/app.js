const contacts = require('./contacts')
/* 
bisa pakai object destructuring jadi
{writeQuestion, savecontact}
*/

// yargs add
const yargs = require('yargs/yargs')(process.argv.slice(2))
yargs.command({
    command: 'add',
    describe: 'Add Contact',
    builder: {
        nama: { type: 'string', demandOption: true },
        noHp: { type: 'string', demandOption: false },
        email: { type: 'string', demandOption: false }
    },
    handler(argv) { contacts.saveContact(argv.nama, argv.noHp || '-', argv.email || '-'); }
})

// yargs list
yargs.command(
    {
        command: 'list',
        describe: 'list Contact',
        handler() { contacts.contactList(); }
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
        handler(argv) { contacts.contactDetail(argv.nama); }
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
        handler(argv) { contacts.contactUpdate(argv.oldName, argv.newName, argv.noHp, argv.email) }
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
        handler(argv) { contacts.contactRemove(argv.nama) }
    }
)
// yargs delete all
yargs.command(
    {
        command: 'removeAll',
        describe: 'removeAll Contact',
        handler() { contacts.contactRemoveAll() }
    }
)
    .demandCommand()


yargs.parse();

