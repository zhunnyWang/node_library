//把一个node服务定制成自己的镜像
//docker build -t mynode .
//docker run -p 3000:3000 -d mynode
const Koa = require('koa')
const app = new Koa()

app.use(ctx => {
  Math.random() > 0.8 ? abc() : ''
  ctx.body = 'Hello Docker'
})
app.listen(3000, () => {
  console.log('app started at 3000')
})