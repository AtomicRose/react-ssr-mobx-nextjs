const router = require('koa-router')()
const homeRouter = require('./home')
const meRouter = require('./me')
const planRouter = require('./plan')
const sceneryRouter = require('./scenery')
const wikiRouter = require('./wiki')

function setRouters(nextApp) {
    let home = homeRouter(nextApp)
    router.use('/home', home.routes(), home.allowedMethods())
    let me = meRouter(nextApp)
    router.use('/me', me.routes(), me.allowedMethods())
    let plan = planRouter(nextApp)
    router.use('/plan', plan.routes(), plan.allowedMethods())
    let scenery = sceneryRouter(nextApp)
    router.use('/scenery', scenery.routes(), scenery.allowedMethods())
    let wiki = wikiRouter(nextApp)
    router.use('/wiki', wiki.routes(), wiki.allowedMethods())
    return router
}

module.exports = setRouters
