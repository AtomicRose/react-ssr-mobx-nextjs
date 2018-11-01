import createDebug from 'UTILS/debug/myDebug'

const error = createDebug({
    categories: [
        {
            text: __APP_NAME__,
            fontColor: '#0066CC',
            bgColor: '#ccffff'
        },
        {
            text: 'ERROR',
            fontColor: '#FFFFFF',
            bgColor: '#FF3300'
        }
    ]
})
const info = createDebug({
    categories: [
        {
            text: __APP_NAME__,
            fontColor: '#0066CC',
            bgColor: '#ccffff'
        },
        {
            text: 'INFO',
            fontColor: '#000000',
            bgColor: '#33CCCC'
        }
    ]
})
const success = createDebug({
    categories: [
        {
            text: __APP_NAME__,
            fontColor: '#0066CC',
            bgColor: '#ccffff'
        },
        {
            text: 'SUCCESS',
            fontColor: '#000000',
            bgColor: '#339933'
        }
    ]
})
const warning = createDebug({
    categories: [
        {
            text: __APP_NAME__,
            fontColor: '#0066CC',
            bgColor: '#ccffff'
        },
        {
            text: 'WARNING',
            fontColor: '#000000',
            bgColor: '#FFCC00'
        }
    ]
})
const log = createDebug({
    categories: [
        {
            text: 'Log'
        },
        {
            text: 'debug'
        },
        {
            text: 'info'
        }
    ]
})

export default {
    error,
    success,
    info,
    warning,
    log
}