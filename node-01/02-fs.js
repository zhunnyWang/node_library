const fs = require('fs')
const { promisify } = require('util')
    //同步
const data = fs.readFileSync('./package.json')
console.log(data.toString())

//异步-回调
fs.readFile('./package.json', (err, data) => {
    console.log(data.toString())
})

//异步promise
const readFile = promisify(fs.readFile)
readFile('./package.json').then(data => {
    console.log(data.toString())
})

//异步-async 
(async() => {
    const readFile = promisify(fs.readFile)
    const data = await readFile('./package.json');
    console.log(data.toString())
})()