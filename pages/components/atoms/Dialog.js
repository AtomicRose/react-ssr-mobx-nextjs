import React from 'react'
import ReactDOM from 'react-dom'
import { Icon, Button } from 'COMPONENTS/at-ui'
import style from 'SCSS/components/atoms/dialog.scss'
const themeIcon = {
    info: 'info-circle',
    success: 'check-circle',
    warning: 'question-circle',
    primary: 'info-circle',
    purple: 'tag',
    danger: 'error'
}
const closeType = {
    DELAY: 'DELAY',
    MAX_LIMIT: 'MAX_LIMIT',
    OK: 'OK',
    CANCEL: 'CANCEL',
    MASK: 'MASK'
}
const destory = (div, props) => {
    const id = div.getAttribute('id')
    if (document.getElementById(id)) {
        if (props.beforeClose && props.beforeClose(props.closeBy, props)) {
            ReactDOM.unmountComponentAtNode(div)
            div.parentNode.removeChild(div)
            props.afterClose && props.afterClose(props.closeBy, props)
        }
    }
}
const renderDialog = (props) => {
    let dialogContainer = document.getElementById(`dialog_${props.type}`)
    if (!dialogContainer) {
        dialogContainer = document.createElement('div')
        dialogContainer.id = `dialog_${props.type}`
        dialogContainer.className = style['at-dialog-' + props.type + '-container']
        document.body.appendChild(dialogContainer)
    }
    let dialogDIV = document.createElement('div')
    dialogDIV.id = `dialog_${props.type}_${new Date().getTime()}`
    dialogContainer.appendChild(dialogDIV)
    props.id = dialogDIV.id
    props.element = dialogDIV
    ReactDOM.render(<Dialog {...props} />, dialogDIV)
    if (props.max && props.max > 0) {
        if (dialogContainer.childNodes.length > props.max) {
            props.closeBy = closeType['MAX_LIMIT']
            destory(dialogContainer.firstChild, props)
        }
    }
    if (props.delay && props.delay > 0) {
        setTimeout(() => {
            props.closeBy = closeType['DELAY']
            destory(dialogDIV, props)
        }, props.delay)
    }
    return dialogDIV
}

class Dialog extends React.Component {
    constructor(props) {
        super(props)
    }
    handleClickOk(props) {
        let p = { ...props }
        p.closeBy = closeType['OK']
        destory(p.element, p)
    }
    handleClickCancel(props) {
        let p = { ...props }
        p.closeBy = closeType['CANCEL']
        destory(p.element, p)
    }
    handleClickMask(props) {
        if (props.enableCloseByMask) {
            let p = { ...props }
            p.closeBy = closeType['MASK']
            destory(p.element, p)
        }
    }
    render() {
        const theme = this.props.theme
        const okBtnTheme = this.props.okBtnTheme || (theme === 'default' ? 'primary' : theme)
        const cancelBtnTheme = this.props.cancelBtnTheme || 'default'
        switch (this.props.type) {
            case 'toast': {
                return (
                    <div className={`${style['at-dialog-toast']} ${style[theme]}`}>
                        <div className={style['icon-container']}>
                            <div className={style['icon-box']}>
                                <Icon type={themeIcon[theme] || 'info-circle'} className={`${style['toast-icon']}`} />
                            </div>
                        </div>
                        <div className={style['text-container']}>
                            <div className={style['text']}>{this.props.content}</div>
                        </div>
                    </div>
                )
            }
            case 'alert': {
                return (
                    <div>
                        {this.props.enableMask && <div className={style['dialog-mask']} onClick={() => this.handleClickMask(this.props)}></div>}
                        <div className={`${style['at-dialog-alert']} ${style[theme]}`}>
                            <div className={style['alert-title']}>{this.props.title}</div>
                            <div className={style['alert-content']}>{this.props.content}</div>
                            <div className={style['alert-button']}>
                                <Button onClick={() => this.handleClickOk(this.props)} style={{ width: '100%' }} purely={true} theme={okBtnTheme}>{this.props.okText}</Button>
                            </div>
                        </div>
                    </div>
                )
            }
            case 'confirm': {
                return (
                    <div>
                        {this.props.enableMask && <div className={style['dialog-mask']} onClick={() => this.handleClickMask(this.props)}></div>}
                        <div className={`${style['at-dialog-alert']} ${style[theme]}`}>
                            <div className={style['alert-title']}>{this.props.title}</div>
                            <div className={style['alert-content']}>{this.props.content}</div>
                            <div className={style['alert-button']}>
                                <Button onClick={() => this.handleClickCancel(this.props)} style={{ width: '50%' }} purely={true} theme={cancelBtnTheme}>{this.props.cancelText}</Button>
                                <Button onClick={() => this.handleClickOk(this.props)} style={{ width: '50%' }} purely={true} theme={okBtnTheme}>{this.props.okText}</Button>
                            </div>
                        </div>
                    </div>
                )
            }
            default: {
                return null
            }
        }
    }
}


export default {
    close: (ele) => {
        destory(ele)
    },
    toast: (text, config) => {
        let opts = Object.assign({
            type: 'toast',
            content: text,
            beforeClose: () => {
                return true;
            },
            afterClose: () => {

            },
            theme: 'default',
            max: 5,
            delay: 2000
        }, config)
        const ele = renderDialog(opts)
        return ele
    },
    alert: (config) => {
        let opts = Object.assign({
            type: 'alert',
            content: config.content || 'No content...',
            title: config.title || 'No title',
            enableCloseByMask: false,
            enableMask: true,
            beforeClose: () => {
                return true;
            },
            afterClose: () => {

            },
            okText: 'Ok',
            theme: 'default'
        }, config)
        const ele = renderDialog(opts)
        return ele
    },
    confirm: (config) => {
        let opts = Object.assign({
            type: 'confirm',
            content: config.content || 'No content...',
            title: config.title || 'No title',
            enableCloseByMask: false,
            enableMask: true,
            beforeClose: () => {
                return true;
            },
            afterClose: () => {

            },
            okText: 'Ok',
            cancelText: 'Cancel',
            theme: 'default'
        }, config)
        const ele = renderDialog(opts)
        return ele
    },
    modal: (config) => {

    }
}