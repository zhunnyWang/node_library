const http = require('http')
const session = {}
http.createServer((req, res) => {
  const sessionKey = 'sid'
  if (req.url === '/favicon.ico') {
    return
  } else {
    const cookie = req.headers.cookie
    //再次访问，对sid请求进行认证
    if (cookie && cookie.indexOf(sessionKey) > -1) {
      res.end('Come Back')
      console.log('cookie:' + req.headers.cookie)
    }
    //首次访问，生成sid，保存在服务器端
    else {
      const sid = (Math.random() * 9999999).toFixed()
      res.setHeader('Set-Cookie', `${sessionKey}=${sid}`)
      session[sid] = { name: 'laowang' }
      res.end('Hello Cookie')
    }

  }
}).listen(3000)
/**
 * cookie/session实现原理：
 * 1）服务器在接受客户端首次访问时在服务器端创建session，例如登录时将用户信息存储在session中。
 * 然后保存session，可以将session保存在内存中或者redis中，给这个session生成一个唯一的字符串标识，
 * 最后在响应头种下这个唯一的标识字符串。
 * 2）浏览器中收到响应解析响应头，将这个唯一的标识字符串sid保存在cookie中，之后浏览器的http请求头中
 * 会带上该域名下的cookie信息。
 * 3）服务器在接受客户端请求时会去解析请求头cookie中的sid，然后根据这个sid去找服务器端保存的该客户端的
 * session，然后判断该客户端的请求是否合法。
 */

/**
 * 如果session中放在内存中，但是node可能存在不同的节点中，它的cookie是不共享的，我们可以把它放在一个统一的键值数据库中
 * redis就是一个键值数据库
 */