const buf1 = Buffer.alloc(10)
console.log(buf1)

const buf2 = Buffer.from([1, 2, 3])
console.log(buf2)

const buf3 = Buffer.from('nihao')
console.log(buf3.toString())

buf1.write('hello233')
console.log(buf1)

const buf4 = Buffer.concat([buf1, buf3])
console.log(buf4.toString())