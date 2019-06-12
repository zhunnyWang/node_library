const koa = require('koa')
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
const app = new koa()
const router = new Router()

router.get('/', (ctx, next) => {
  ctx.type = 'html'
  let html = `
     <h1>登录</h1>
     <form method="POST" action="/">
      <p>用户名</p>
      <input name="userName" /><br/>
      <p>密码</p>
      <input name="password" type="password" /><br/>
      <button type="submit">submit</button>
     </form>
    `
  ctx.body = html
})
router.post('/', (ctx, next) => {
  let postData = ctx.request.body
  ctx.body = postData
})

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000)

