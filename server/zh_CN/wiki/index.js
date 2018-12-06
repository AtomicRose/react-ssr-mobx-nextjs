const router = require('koa-router')()
function setRouters(nextApp) {
    router.get('/', async (ctx, next) => {
        const actualPage = '/travel_wiki'
        const queryParams = {}
        await nextApp.render(ctx.req, ctx.res, actualPage, queryParams)
    })
    return router
}
module.exports = setRouters