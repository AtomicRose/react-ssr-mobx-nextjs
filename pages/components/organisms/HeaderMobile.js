import React from 'react'
import style from 'SCSS/components/organisms/header.scss'
import {Icon} from 'COMPONENTS/at-ui'
class HeaderMobile extends React.Component {
    render() {
        return (
            <div className={style['coolly-header-mobile']}>
                <div className={style['header-mobile-left']}>
                    Left
                </div>
                <div className={style['header-mobile-middle']}>Home</div>
                <div className={style['header-mobile-right']}>
                    Right
                </div>
            </div>
        )
    }
}
export default HeaderMobile