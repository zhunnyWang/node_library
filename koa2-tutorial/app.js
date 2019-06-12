const koa = require('koa')
const app = new koa()
app.use(async function (ctx, next) {
  console.log('one start')
  ctx.body = 'Hello Koa'
  await next()
  ctx.body = ctx.body + '!!!'
  console.log('one end')
})
app.use(async function (ctx, next) {
  console.log('two start')
  ctx.type = 'text/html;charset=utf-8'
  await next()
  console.log('two end')
})
app.use(async function (ctx, next) {
  console.log('three start')
  ctx.body = ctx.body + ', I am zhunny'
  await next()
  console.log('three end')
})
app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})
