const path = require('path')
const webpack = require('webpack')
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')


const rootPath = path.resolve(__dirname, './')

const env = process.env.NODE_ENV
const domain_use = process.env.DOMAIN_USE

const PROD_ENV = 'production'
const ALPHA_ENV = 'alpha'
const TEST_ENV = 'test'
const DEV_ENV = 'development'
const dev = env === DEV_ENV

module.exports = (phase, { defaultConfig }) => {
    // common setting
    let config = withSass(withCSS({
        cssModules: true,
        cssLoaderOptions: {
            importLoaders: 1,
            localIdentName: "[local]___[hash:base64:5]"
        },
        distDir: 'dist',
        generateBuildId: async () => {
            // For example get the latest git commit hash here
            return process.env.npm_package_name || 'MyApplication'
        },
        publicRuntimeConfig: { // Will be available on both server and client
            staticFolder: '/static'
        },
        webpack(config, { dev }) {
            // Further custom configuration here
            config.resolve = {
                alias: {
                    PAGES: path.resolve(rootPath, 'pages'),
                    SCSS: path.resolve(rootPath, 'pages/scss'),
                    COMPONENTS: path.resolve(rootPath, 'pages/components'),
                    WIDGETS: path.resolve(rootPath, 'pages/widgets'),
                    CONFIG: path.resolve(rootPath, 'config'),
                    UTILS: path.resolve(rootPath, 'utils'),
                    I18N: path.resolve(rootPath, 'utils/i18n'),
                    STORE: path.resolve(rootPath, 'store'),
                    API: path.resolve(rootPath, 'API')
                }
            }
            config.plugins.push(
                new webpack.DefinePlugin({
                    "globalEnv": JSON.stringify(env),
                    "domainUse": JSON.stringify(domain_use),
                    __DEV__: domain_use === DEV_ENV,
                    __TEST__: domain_use === TEST_ENV,
                    __ALPHA__: domain_use === ALPHA_ENV,
                    __PROD__: domain_use === PROD_ENV
                })
            )
            if (dev) {
                config.module.rules.push(
                    {
                        test: /\.js$/,
                        enforce: 'pre',
                        exclude: /node_modules/,
                        loader: 'eslint-loader',
                        options: {
                            // Emit errors as warnings for dev to not break webpack build.
                            // Eslint errors are shown in console for dev, yay :-)
                            // emitWarning: dev,
                        }
                    }
                )
            }
            return config
        },
        exportPathMap: function (defaultPathMap) {
            return {

            }
        }
    }))
    // only in development setting
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return Object.assign({}, config, {

        })
    }


    return Object.assign({}, config, {

    })
}