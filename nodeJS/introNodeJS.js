// Synchronous
const getUserSync = (id) => {
    const nama = id === 1 ? 'Azra' : 'Alvar';
    return { id, nama }
}

const userSatu = getUserSync(1)
console.log(userSatu)

const userDua = getUserSync(2)
console.log(userDua)

const hallo = 'Hello World'
console.log(hallo)

// Asynchronous
const getUserAsync = (id, callback) => {
    const time = id === 1 ? 3000 : 1500
    setTimeout(() => {
        const nama = id === 1 ? 'Azra' : 'Alvar';
        callback({ id, nama })
    }, time);
}

const userSatuA = getUserAsync(1, (hasil) => console.log(hasil))

const userDuaA = getUserAsync(2, (hasil) => console.log(hasil))

const halloA = 'Hello World'
console.log(halloA)