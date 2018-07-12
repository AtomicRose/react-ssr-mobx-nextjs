import React from 'react'
import Head from 'next/head'
import { Provider } from 'mobx-react'
import { initRootStore } from 'STORE/RootStore'
import DevTools from 'mobx-react-devtools'
import Header from '../widgets/Header'


class Layout extends React.Component {

    static getInitialProps({ req }) {
        const isServer = !!req
        return { isServer }
    }
    constructor(props) {
        super(props)
        this.rootStore = initRootStore(props.isServer)
    }
    render() {
        return (
            <Provider rootStore={this.rootStore}>
                <div>
                    <Header />
                    {this.props.children}
                    {__DEV__ === true ? <DevTools /> : null}
                </div>
            </Provider>
        )
    }

}


export default Layout