const support = {
    'zh_CN': {
        app: require('./zh_CN/app').default,
        example: require('./zh_CN/example').default
    },
    'en_US': {
        app: require('./en_US/app').default,
        example: require('./en_US/example').default
    }
}
export default {
    langText: (lang) => {
        try {
            return support[lang]
        } catch (e) {
            throw (e)
        }
    },
    isSupported: (lang) => {
        if (lang && support.hasOwnProperty(lang)) {
            return lang
        }
        return 'zh_CN'
    }
}