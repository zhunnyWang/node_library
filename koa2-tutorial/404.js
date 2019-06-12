const koa = require('koa')
const app = new koa()
const Router = require('./Router')
const router = new Router()

// router.get('/', (ctx, next) => {
//   ctx.body = 'Page Not Found!!!'
//   ctx.status = 404
// })
app.use(async (ctx, next) => {
  if (ctx.url === '/' && ctx.method === 'GET') {
    ctx.body = 'Page Not Found'
    ctx.status = 404
  } else {
    ctx.body = 'Defalut Page'
    ctx.status = 200
  }
  await next()
})
// app.use(router.routes())

app.listen(3000)