const { MongoClient } = require('mongodb');

async function runGetStarted() {
    const uri = 'mongodb://127.0.0.1:27017';
    const client = new MongoClient(uri);

    try {
        const database = client.db('azra');
        const students = database.collection('mahasiswa');

        const query = { nama: 'Azra' };
        const student = await students.findOne(query);
        console.log(student);
    } finally {
        await client.close();
    }
}
runGetStarted().catch(console.dir);
