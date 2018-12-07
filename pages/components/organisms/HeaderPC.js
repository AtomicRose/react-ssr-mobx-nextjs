import React from 'react'
import Navigation from 'COMPONENTS/organisms/Navigation'
import style from 'SCSS/components/organisms/header.scss'
class HeaderPC extends React.Component {
    render() {
        const {language} = this.props
        return (
            <div className={style['coolly-header-pc']}>
                <div className={style['coolly-header-pc-content']}>
                    <div className={style['coolly-header-logo']}>Coolly Go!</div>
                    <div className={style['coolly-header-pc-nav']}>
                        <Navigation {...this.props} />
                    </div>
                    <div className={style['coolly-header-pc-login']}></div>
                </div>
            </div>
        )
    }
}
export default HeaderPC