function createDebug(op) {
    let o = op || {}
    const opts = {
        categories: op.categories || [],
        enableBrowser: typeof op.enableBrowser === undefined ? !!op.enableBrowser : true,
        enableTerminal: typeof op.enableTerminal === undefined ? !!op.enableTerminal : false
    }
    let debug = (...args) => {
        let categories = opts.categories
        let categoryStr = []
        let browserStr = []
        let nodeStr = []
        let browserColorStr = []
        let nodeColorStr = []
        for (let i = 0; i < categories.length; i++) {
            let c = categories[i]
            categoryStr.push(c.text)
            browserStr.push('%c' + c.text)
            nodeStr.push(c.text)
            browserColorStr.push(`color:${c.fontColor || '#999999'}; background:${c.bgColor || 'none'}`)
        }

        if (global.window && global.document && global.localStorage) {
            if (opts.enableBrowser && (categoryStr.join(':').indexOf(global.localStorage.debug) === 0 || global.localStorage.debug === '*')) {
                console.log(browserStr.join(':') + '%c ==> ', ...browserColorStr, 'color:#999;background:none', ...args)
            }
        } else {
            if (opts.enableTerminal) {
                console.log(nodeStr.join(':'), ...args)
            }
        }
    }
    return debug
}

export default createDebug