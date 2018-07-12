const router = require('koa-router')()
function setRouters(nextApp) {
    router.get('/example', async (ctx, next) => {
        const actualPage = '/example'
        const queryParams = {}
        await nextApp.render(ctx.req, ctx.res, actualPage, queryParams)
    }).get('/error', async (ctx, next) => {
        const actualPage = '/error'
        const queryParams = {}
        await nextApp.render(ctx.req, ctx.res, actualPage, queryParams)
    })
    return router
}

module.exports = setRouters
