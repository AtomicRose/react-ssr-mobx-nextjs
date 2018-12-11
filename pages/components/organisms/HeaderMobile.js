import React from 'react'
import style from 'SCSS/components/organisms/header.scss'
import { Icon } from 'COMPONENTS/at-ui'

class HeaderMobile extends React.Component {
    handleClickBack(type) {
        if (type === 'back') {
            if (this.props.beforePageBack && this.props.beforePageBack()) {
                window.history.back()
            }
            if (!this.props.beforePageBack) {
                window.history.back()
            }
        }
        if (type === 'close') {
            // TODO close function
            this.props.closePageFn && this.props.closePageFn()
        }
    }
    render() {
        const leftOperation = this.props.leftOperationType || 'back'
        const rightOperation = this.props.rightOperationType || 'more'
        const ExtraRightOperation = this.props.extraOperation || null
        return (
            <div className={style['coolly-header-mobile']}>
                <div className={style['header-mobile-left']}>
                    {leftOperation === 'close' ? <Icon type="coolly-icon-close-circle" className={style['coolly-header-icon']} onClick={() => this.handleClickBack('close')} /> : <Icon type="coolly-icon-left" className={style['coolly-header-icon']} onClick={() => this.handleClickBack('back')} />}
                </div>
                <div className={style['header-mobile-middle']}>{this.props.title}</div>
                <div className={style['header-mobile-right']}>
                    {rightOperation === 'more' ? <Icon type="coolly-icon-menu" className={style['coolly-header-icon']} onClick={this.props.moreFn} /> : null}
                    {rightOperation === 'extra' ? ExtraRightOperation : null}
                </div>
            </div>
        )
    }
}
export default HeaderMobile