const path = require('path')
const webpack = require('webpack')
const withPlugins = require('next-compose-plugins')
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const optimizedImages = require('next-optimized-images')
const withProgressBar = require('next-progressbar')
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')


const rootPath = path.resolve(__dirname, './')

const env = process.env.NODE_ENV
const domain_use = process.env.DOMAIN_USE

const PROD_ENV = 'production'
const ALPHA_ENV = 'alpha'
const TEST_ENV = 'test'
const DEV_ENV = 'development'
const dev = env === DEV_ENV

const nextConfig = {
    distDir: 'dist',
    generateBuildId: async () => {
        // For example get the latest git commit hash here
        return process.env.npm_package_name || 'ShinezoneApplication'
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
}
module.exports = withPlugins([
    [withSass, {
        cssModules: true,
        cssLoaderOptions: {
            localIdentName: '[path]___[local]___[hash:base64:5]',
        }
    }],
    [withCSS, {
        cssModules: true,
        cssLoaderOptions: {
            localIdentName: '[path]___[local]___[hash:base64:5]',
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