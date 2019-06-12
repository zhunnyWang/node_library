class Router {
  constructor() {
    this._routes = []
  }
  get (url, handler) {
    this._routes.push({
      url: url,
      method: 'GET',
      handler
    })
  }
  routes () {
    return async (ctx, next) => {
      const { url, method } = ctx
      const matchedRouter = this._routes.find(item => item.url === url && item.method === method)
      if (matchedRouter && matchedRouter.handler) {
        await matchedRouter.handler(ctx, next)
      } else {
        await next()
      }
    }
  }
}

module.exports = Router;