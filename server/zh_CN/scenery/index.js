const router = require('koa-router')()
function setRouters(nextApp) {
    router.get('/', async (ctx, next) => {
        const actualPage = '/travel_scenery'
        const queryParams = {
            layout: 'island',
            island: 'scenery'
        }
        await nextApp.render(ctx.req, ctx.res, actualPage, queryParams)
    })
    return router
}
module.exports = setRouters