const colors = [
    '#0000CC',
    '#0000FF',
    '#0033CC',
    '#0033FF',
    '#0066CC',
    '#0066FF',
    '#0099CC',
    '#0099FF',
    '#00CC00',
    '#00CC33',
    '#00CC66',
    '#00CC99',
    '#00CCCC',
    '#00CCFF',
    '#3300CC',
    '#3300FF',
    '#3333CC',
    '#3333FF',
    '#3366CC',
    '#3366FF',
    '#3399CC',
    '#3399FF',
    '#33CC00',
    '#33CC33',
    '#33CC66',
    '#33CC99',
    '#33CCCC',
    '#33CCFF',
    '#6600CC',
    '#6600FF',
    '#6633CC',
    '#6633FF',
    '#66CC00',
    '#66CC33',
    '#9900CC',
    '#9900FF',
    '#9933CC',
    '#9933FF',
    '#99CC00',
    '#99CC33',
    '#CC0000',
    '#CC0033',
    '#CC0066',
    '#CC0099',
    '#CC00CC',
    '#CC00FF',
    '#CC3300',
    '#CC3333',
    '#CC3366',
    '#CC3399',
    '#CC33CC',
    '#CC33FF',
    '#CC6600',
    '#CC6633',
    '#CC9900',
    '#CC9933',
    '#CCCC00',
    '#CCCC33',
    '#FF0000',
    '#FF0033',
    '#FF0066',
    '#FF0099',
    '#FF00CC',
    '#FF00FF',
    '#FF3300',
    '#FF3333',
    '#FF3366',
    '#FF3399',
    '#FF33CC',
    '#FF33FF',
    '#FF6600',
    '#FF6633',
    '#FF9900',
    '#FF9933',
    '#FFCC00',
    '#FFCC33'
];

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
            if (opts.enableBrowser && (categoryStr.join(':').toLowerCase().indexOf(global.localStorage.debug.toLowerCase()) === 0 || global.localStorage.debug === '*')) {
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