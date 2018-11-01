import React from 'react'
import { Provider, inject, observer } from 'mobx-react'
import App, { Container } from 'next/app'
import { BaseLayout } from 'WIDGETS/layout'
import { withRouter } from 'next/router'
import I18N from 'I18N'
import { initRootStore } from 'STORE/RootStore'
import Head from 'next/head'
@inject('rootStore')
@observer
class PropComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { Component, pageProps, router } = this.props
        /**
         * for different route, you can use different layout for different page
         */
        return (
            <Container>
                <Head>
                    <title>My Next.js Application</title>
                </Head>
                <BaseLayout language={this.props.language} rootStore={this.props.rootStore} router={this.props.router}>
                    <Component {...pageProps} language={this.props.language} rootStore={this.props.rootStore} router={this.props.router} />
                </BaseLayout>
            </Container>
        )
    }
}


class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            // getInitialProps钩子，
            pageProps = await Component.getInitialProps(ctx)
        }
        const isServer = !!ctx.req
        return { pageProps, isServer }
    }
    constructor(props) {
        super(props)
        const { rootStore } = this.props
        this.rootStore = initRootStore(props.isServer)
    }
    
    render() {
        const { Component, pageProps, router } = this.props
        let lang = I18N.isSupported(router.asPath.replace(router.pathname, '').replace('/', ''))

        return (<Provider>
            <PropComponent pageProps={pageProps} Component={Component} rootStore={this.rootStore} language={lang} router={router} />
        </Provider>)
    }
}

export default withRouter(MyApp)