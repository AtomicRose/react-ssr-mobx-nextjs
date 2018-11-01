const path = require('path')
const webpack = require('webpack')
const withPlugins = require('next-compose-plugins')
const withSass = require('@zeit/next-sass')
const withLess = require('@zeit/next-less')
const withCSS = require('@zeit/next-css')
const optimizedImages = require('next-optimized-images')
const withProgressBar = require('next-progressbar')
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
    require.extensions['.css'] = (file) => { }
}
// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
    require.extensions['.less'] = (file) => { }
}

const rootPath = path.resolve(__dirname, './')
const env = process.env.NODE_ENV
const domain_use = process.env.DOMAIN_USE

const PROD_ENV = 'production'
const ALPHA_ENV = 'alpha'
const TEST_ENV = 'test'
const DEV_ENV = 'development'
const dev = env === DEV_ENV

const nextConfig = {
    distDir: `dist_${domain_use}`,
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
                SCSS: path.resolve(rootPath, 'pages/source/scss'),
                LESS: path.resolve(rootPath, 'pages/source/less'),
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
                "__APP_NAME__": JSON.stringify(process.env.npm_package_name),
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
        /**
         * If you didn't want run the application server in node, and use nginx proxy. You can export the static page.
         * The Object [key] is the browser path, the Object [value] is the actualPage.
         * You can find setting in directory named server. Koa router setting.
         */
        return {
            '/': { page: '/' }
        }
    }
}
/**
 * About withSass, withLess, withCss
 * In our project, we suggest to write style use sass. And use cssModule.
 * Now, these setting( withLess, withCss) just for ant-design. So the option [localIdentName] must be [local]
 * You can set webpack config by yourself.
 */
module.exports = withPlugins([
    [withSass, {
        cssModules: true,
        cssLoaderOptions: {
            localIdentName: '[[path]___[local]___[hash:base64:5]]'
        },
        sassLoaderOptions: {

        },
        postcssLoaderOptions: {
            config: {
                path: './'
            }
        }
    }],
    [withLess, {
        cssModules: true,
        cssLoaderOptions: {
            localIdentName: '[local]'
        },
        lessLoaderOptions: {
            javascriptEnabled: true,
            modifyVars: {
                // You can set custom theme for ant-design
                // 'primary-color': '#1DA57A'
            }
        }
    }],
    [withCSS, {
        cssModules: true,
        cssLoaderOptions: {
            localIdentName: '[local]'
        }
    }],
    [optimizedImages, {
        // these are the default values so you don't have to provide them if they are good enough for your use-case.
        // but you can overwrite them here with any valid value you want.
        inlineImageLimit: 8192,
        imagesFolder: 'images',
        imagesName: '[name]-[hash].[ext]',
        optimizeImagesInDev: false,
        mozjpeg: {
            quality: 80,
        },
        optipng: {
            optimizationLevel: 3,
        },
        pngquant: false,
        gifsicle: {
            interlaced: true,
            optimizationLevel: 3,
        },
        svgo: {
            // enable/disable svgo plugins here
        },
        webp: {
            preset: 'default',
            quality: 75,
        }
    }],
    [withProgressBar]
], nextConfig)