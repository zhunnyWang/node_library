const koa = require('koa')
const app = new koa()

//响应输出中间件
app.use(async function (ctx, next) {
  await next()
  //获取响应头，印证执行顺讯
  const rt = ctx.response.get('X-Response-Time')
  console.log(`输出计时：${ctx.method} ${ctx.url} - ${rt}`)
})

app.use(async function (ctx, next) {
  const start = Date.now()
  console.log('开始计时')
  await next()
  const ms = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`)
  console.log('计时结束')
})

app.use(async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    ctx.status = error.statusCode || error.status || 500
    ctx.body = error.message

    //触发应用层级的错误事件
    ctx.app.emit('error', error, ctx)
    //中间件出错，可以上抛到中间件错误捕获->全局->Node 
    console.log('中间件捕捉', error.message)
  }
})

// app.use(async function (ctx, next) {
//   console.log('响应用户请求')
//   sleep(200)
//   ctx.status = 200
//   ctx.type = 'html'
//   ctx.body = '<h1>Hello Koa</h1>'
// })
const index = require('./routes/index')
const users = require('./routes/users')
app.use(index.routes())
app.use(users.routes())

//全局的错误捕获
app.on('error', err => {
  console.error('app全局错误:', err.message)

  //继续上抛到Node，中止服务
  // throw err
})

app.listen(3000)