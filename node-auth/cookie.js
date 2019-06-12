const http = require('http')
http.createServer((req, res) => {
  if (req.url === '/favicon.ico') {
    return
  } else {
    console.log('cookie:' + req.headers.cookie)
    res.setHeader('Set-Cookie', 'cx=abc')
    res.end('Hello Cookie')
  }
}).listen(3000)