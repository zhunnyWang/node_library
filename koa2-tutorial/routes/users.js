const Router = require('koa-router')
const router = new Router({ prefix: '/users' })

router.get('/', ctx => {
  ctx.body = 'user'
})

module.exports = router