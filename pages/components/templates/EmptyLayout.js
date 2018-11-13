import React from 'react'
import { Provider } from 'mobx-react'
import { initRootStore } from 'STORE/RootStore'

class EmptyLayout extends React.Component {

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
                    {this.props.children}
                </div>
            </Provider>
        )
    }

}

export default EmptyLayout