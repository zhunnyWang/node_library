const express = require('./06-kpress.js')
const app = express()
app.get('/', (req, res) => {
    res.end('HelloWorld')
})
app.get('/users', (req, res) => {
    res.end(JSON.stringify({ name: 'xia' }))
})

app.listen(3000, () => {
    console.log('App listen at 3000')
})