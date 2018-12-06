import React from 'react'
import { Provider } from 'mobx-react'
import { initRootStore } from 'STORE/RootStore'
import HeaderMobile from 'COMPONENTS/organisms/HeaderMobile'
import HeaderPC from 'COMPONENTS/organisms/HeaderPC'
import Navigation from 'COMPONENTS/organisms/Navigation'
import style from 'SCSS/components/templates/island-layout.scss'

class IslandLayout extends React.Component {

    static getInitialProps({ req }) {
        const isServer = !!req
        return { isServer }
    }
    constructor(props) {
        super(props)
        this.rootStore = initRootStore(props.isServer)
    }
    render() {
        const { language } = this.props
        return (
            <Provider rootStore={this.rootStore}>
                <div className={style['coolly-island-layout']}>
                    <div className={style['coolly-island-header-container']}>
                        <HeaderPC />
                        <HeaderMobile />
                    </div>
                    <div className={style['coolly-island-content-container']}>
                        {this.props.children}
                    </div>
                    <div className={style['colly-island-footer-container']}>
                        <Navigation language={language} />
                    </div>
                </div>
            </Provider>
        )
    }

}

export default IslandLayout