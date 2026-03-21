const validator = require('validator')
const chalk = require('chalk')

console.log(validator.isEmail('azra@gmail.com'))
console.log(validator.isMobilePhone('087121555554', 'id-ID'))
console.log(validator.isNumeric('0821215l5554'))

console.log(chalk.white('Hello World'))
const name = 'Alvar Azra'
const pesan = chalk`Lorem ipsum dolor {bgRed sit amet} consectetur {bgYellow.white adipisicing elit.} Eius,voluptate. ${name}`
console.log(chalk.bgBlue.black(pesan))