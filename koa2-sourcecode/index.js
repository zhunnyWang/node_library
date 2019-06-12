const koa = require('./mykoa')
const app = new koa()
// app.use((req, res) => {
//   res.writeHead(200)
//   res.end('hi koa')
// })

app.use((ctx, next) => {
  ctx.body = 'hi'
  next()
  ctx.body = ctx.body + '!'
})
app.use((ctx, next) => {
  ctx.body = ctx.body + 'koa'
})
app.listen(3000, () => {
  console.log('listen 3000')
})