/* 
async function  => berjalan secara async
                => Menghasilkan (implisit) promise
                => cara penulisannya sama seperti function sync
                => bisa memiliki Await = memberhentikan sementara fungsi sambil menunggu promisenya selesai
*/

// const coba = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('selesai')
//     }, 2000);
// })
// console.log(coba)
// coba.then(() => console.log(coba))

function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 3000
        if (waktu < 5000) {
            setTimeout(() => {
                resolve('selesai')
            }, waktu);
        } else {
            reject('Kelamaan!')
        }
    })
}

// const coba = cobaPromise()
// coba.then(() => console.log(coba))
//     .catch(() => console.log(coba))

async function cobaAsync() {
    try {
        const coba = await cobaPromise()
        console.log(coba)
    } catch (err) {
        console.error(err)
    }
}

cobaAsync()