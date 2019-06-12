const http = require('http')
const url = require('url')


class Application {
    constructor() {
        this.router = []
    }
    get(path, handler) {
        this.router.push({
            path,
            method: 'get',
            handler
        })
    }
    listen(post) {
        const server = http.createServer((req, res) => {
            const { pathname } = url.parse(req.url, true)
            for (let item of this.router) {
                const { path, method, handler } = item
                if (pathname === path && req.method.toLocaleLowerCase() === method) {
                    return handler(req, res)
                }
            }
        })

        server.listen(post)
    }
}

module.exports = function crateApplication() {
    return new Application()
}