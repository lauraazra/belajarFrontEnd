/*
    Pengulangan => for, while, do while
    Pengkondisian / Percabangan => if, if else, if else if else, switch
*/


// WHILE
/* var ulang = true;
while (ulang === true) {
    console.log('Hello World');
    ulang = confirm('Lagi');
}

var x = 1;
while (x <= 10) {
    console.log('Hello World' + ' ' + x);
    x++;
} */


// FOR
/* for (let x = 0; x <= 10; x++) {
    console.log('Hello World ' + x);
} */

const prompt = require('prompt-sync')();

// IF
/* var angka = prompt('masukan angka: ')
if (angka % 2 == 0) {
    console.log(angka + ' adalah bilangan genap');
} else {
    console.log(angka + ' adalah bilangan ganjil');
} */


// ELSE IF
/* var angka = prompt('masukan angka: ')
if (angka % 2 == 0) {
    console.log(angka + ' adalah bilangan genap');
} else if (angka % 2 == 1) {
    console.log(angka + ' adalah bilangan ganjil');
} else {
    console.log('input salah');
} */



// SWITCH
/* var angka = parseInt(prompt('masukan angka: '))

switch (angka) {
    case 1:
        console.log('anda memasukan angka 1');
        break;
    case 2:
        console.log('anda memasukan angka 2');
        break;
    case 3:
        console.log('anda memasukan angka 3');
        break;
    default:
        console.log('anda salah memasukan angka');
        break;
} */

/* var item = prompt('Masukan nama makanan: \n (cth: ayam, ikan, sapi, anjing, hiu) \n');

switch (item) {
    case 'ayam':
    case 'ikan':
    case 'sapi':
        console.log('makanan halal');
        break
    case 'anjing':
    case 'hiu':
        console.log('makanan haram');
        break
    default:
        console.log('anda salah input');
} */


// BERSARANG
console.log('nulis *****');
var a = ''
for (i = 0; i < 5; i++) {
    a += '*'
}
console.log(a);

console.log('nulis **** kebawah 10');
var b = ''
for (i = 0; i < 7; i++) {
    for (j = 0; j < 10; j++) {
        b += '*'
    }
    b += '\n'
}
console.log(b);

console.log('nulis segitiga dari kiri');
var b = ''
for (i = 0; i < 7; i++) {
    for (j = 0; j <= i; j++) {
        b += '*'
    }
    b += '\n'
}
console.log(b);


console.log('nulis segitiga dari bawah kiri');
var b = ''
for (i = 0; i < 7; i++) {
    for (j = 6; j >= i; j--) {
        b += j
    }
    b += '\n'
}
console.log(b);

console.log('atau pake cara ini nulis segitiga dari bawah kiri');
var b = ''
for (i = 7; i > 0; i--) {
    for (j = 0; j < i; j++) {
        b += '*'
    }
    b += '\n'
}
console.log(b);

console.log('segiti rata kanan');
var b = ''
for (i = 5; i > 0; i--) {
    for (j = 1; j < i; j++) {
        b += ' '
    }
    for (k = 5; k >= i; k--) {
        b += '*'
    }
    b += '\n'
}
console.log(b);


console.log('segitiga rata kanan');
var b = ''
for (i = 1; i <= 5; i++) {
    for (j = 5; j > i; j--) {
        b += ' '
    }
    for (k = 1; k <= i; k++) {
        b += '*'
    }
    b += '\n'
}
console.log(b);

console.log('segitiga rata kanan kebalik');
var b = ''
for (i = 1; i <= 5; i++) {
    for (k = 1; k < i; k++) {
        b += ' '
    }
    for (j = 5; j >= i; j--) {
        b += '*'
    }
    b += '\n'
}
console.log(b);

console.log('Segitiga sama kaki');
var b = ''
for (i = 1; i <= 5; i++) {
    for (j = 5; j > i; j--) {
        b += ' '
    }
    for (k = 1; k <= (2 * i - 1); k++) {
        b += '*'
    }
    b += '\n'
}
console.log(b);

/* 
    i = 1
        j = 5 yes
        j = 4 yes
        j = 3 yes
        j = 2 yes
        j = 1 no
        k = 1 yes
        k = 2 no
    i = 2
        j = 5 yes
        j = 4 yes
        j = 3 yes
        j = 2 no
        k = 1 yes
        k = 2 yes
        k = 3 yes
        k = 4 no
*/

/* 
    i = 1
        j=0 no
        k = 9
*/

console.log('segitiga sama kaki kebalik');
var b = ''
for (i = 1; i <= 5; i++) {
    for (j = 1; j < i; j++) {
        b += ' '
    }
    for (k = 9; k >= (2 * i - 1); k--) {
        b += '*'
    }
    b += '\n'
}
console.log(b);

var b = ''
for (i = 5; i > 0; i--) {
    for (j = 5; j > i; j--) {
        b += ' '
    }
    for (k = (2 * i - 1); k > 0; k--) {
        b += '*'
    }
    b += '\n'
}
console.log(b);

// console.log('silang');
// var b = ''
// var size = parseInt(prompt('Isikan jumlah baris: '))
// for (i = 1; i <= size; i++) {
//     for (j = 1; j <= size; j++) {
//         if (i == j || (i + j) === (size + 1)) {
//             b += '*'
//         } else {
//             b += ' '
//         }
//     }
//     b += '\n'
// }
// console.log(b);

console.log('logika modulo');
var b = ''
for (i = 1; i <= 9; i++) {
    for (j = 1; j <= 9; j++) {
        if ((i % 2 == 1 && j % 2 == 1) || (i % 2 == 0 && j % 2 == 0)) {
            b += '*'
        } else {
            b += ' '
        }
    }
    b += '\n'
}
console.log(b);

console.log('segitiga angka');
var b = ''
var angka = 1
for (i = 1; i <= 5; i++) {
    for (j = 1; j <= i; j++) {
        b += angka + ' '
        angka++
    }
    b += '\n'
}
console.log(b);

console.log('segitiga 1 0');
var b = ''
for (i = 1; i <= 5; i++) {
    for (j = 1; j <= i; j++) {
        if ((i % 2 == 0 && j % 2 == 0) || (i % 2 == 1 && j % 2 == 1)) {
            b += 1
        } else {
            b += 0
        }
    }
    b += '\n'
}
console.log(b);
