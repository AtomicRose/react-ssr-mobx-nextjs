const hosts = {
    production: {
        example: 'http://ns.chaojita.cn'
    },
    alpha: {

    },
    test: {

    },
    development: {
        example: 'http://ns.chaojita.cn'
    }
}
let host = hosts.production

if (__DEV__) {
    host = hosts.development
}
if (__TEST__) {
    host = hosts.test
}
if (__ALPHA__) {
    host = hosts.alpha
}
if (__PROD__) {
    host = hosts.production
}

export default host