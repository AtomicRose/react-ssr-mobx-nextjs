const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')
const mobxReact = require('mobx-react')
const { parse } = require('url')

const dev = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT || 3000
const app = next({ dev })
const handle = app.getRequestHandler()

const zh_CN_Router = require('./zh_CN')
const en_US_Router = require('./en_US')


mobxReact.useStaticRendering(true)

app.prepare().then(() => {
    const server = new Koa()
    let router = new Router()
    let zh_CN = zh_CN_Router(app)
    let en_US = en_US_Router(app)
    router.use('/zh_CN', zh_CN.routes(), zh_CN.allowedMethods())
    router.use('/en_US', en_US.routes(), en_US.allowedMethods())


    // --------------------------------- example config setting--------------------------------------
    router.get('/api/userInfo', (ctx, next) => {
        ctx.body = {
            name: 'jack',
            age: 11
        }
    })
    router.get('/api/changeInfo', (ctx, next) => {
        ctx.body = {
            name: 'lily',
            age: 32
        }
    })
    // example page.
    router.get('/example', async (ctx, next) => {
        const actualPage = '/example'
        const queryParams = {}
        await app.render(ctx.req, ctx.res, actualPage, queryParams)
    })
    router.get('/example/antd', async (ctx, next) => {
        const actualPage = '/example-antd'
        const queryParams = {}
        await app.render(ctx.req, ctx.res, actualPage, queryParams)
    })
    // ------------------------------------example end-------------------------------------------------
    // error page.
    router.get('/error', async (ctx, next) => {
        const actualPage = '/error'
        const queryParams = {}
        await app.render(ctx.req, ctx.res, actualPage, queryParams)
    })
    // root url, return home page. Just index page.
    router.get('/', async (ctx, next) => {
        const actualPage = '/'
        const queryParams = {}
        await app.render(ctx.req, ctx.res, actualPage, queryParams)
    })
    router.get('', async (ctx, next) => {
        const actualPage = '/'
        const queryParams = {}
        await app.render(ctx.req, ctx.res, actualPage, queryParams)
    })
    // other url, return 404 page
    router.get('*', async (ctx, next) => {
        await handle(ctx.req, ctx.res)
        // await app.render(ctx.req, ctx.res, '/404', {})
    })
    server.use(async (ctx, next) => {
        ctx.res.statusCode = 200
        await next()
    })

    server.use(router.routes()).use(router.allowedMethods())
    server.listen(PORT)

})