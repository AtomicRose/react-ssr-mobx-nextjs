import React from 'react'
import getConfig from 'next/config'
import Document, { Head, Main, NextScript } from 'next/document'
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        /**
         * pathname     对应page的真实地址，即文件名
         * query
         * asPath       对应访问路径    
         * headers
         */
        // console.log(ctx.req.headers)
        // 此处需要根据user-agent来判断设备类型，然后进行设置
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render() {
        return (
            <html>
                <Head>
                    {/* <title>My page title</title> */}
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                    <script src={`${publicRuntimeConfig.staticFolder}/js/mediascreen.js`}></script>
                </Head>
                <body className="custom_class">
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}