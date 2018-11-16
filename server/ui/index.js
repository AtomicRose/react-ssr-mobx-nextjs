const router = require('koa-router')()
function setRouters(nextApp) {
    router.get('/button', async (ctx, next) => {
        const actualPage = '/ui/button'
        const queryParams = {
            layout: 'ui'
        }
        await nextApp.render(ctx.req, ctx.res, actualPage, queryParams)
    }).get('/grid', async (ctx, next) => {
        const actualPage = '/ui/grid'
        const queryParams = {
            layout: 'ui'
        }
        await nextApp.render(ctx.req, ctx.res, actualPage, queryParams)
    })
        .get('/input', async (ctx, next) => {
            const actualPage = '/ui/input'
            const queryParams = {
                layout: 'ui'
            }
            await nextApp.render(ctx.req, ctx.res, actualPage, queryParams)
        })
    return router
}

module.exports = setRouters
