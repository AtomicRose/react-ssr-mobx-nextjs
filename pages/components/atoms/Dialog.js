import React from 'react'
import ReactDOM from 'react-dom'
import { Icon } from 'COMPONENTS/at-ui'
import style from 'SCSS/components/atoms/dialog.scss'
const themeIcon = {
    info: 'info-circle',
    success: 'check-circle',
    warning: 'question-circle',
    primary: 'info-circle',
    purple: 'tag',
    danger: 'error'
}
class Dialog extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const theme = this.props.theme
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
            default: {
                return null
            }
        }
    }
}
const destory = (div, props) => {
    const id = div.getAttribute('id')
    if (document.getElementById(id)) {
        if (props.beforeClose && props.beforeClose(props)) {
            ReactDOM.unmountComponentAtNode(div)
            div.parentNode.removeChild(div)
            props.afterClose && props.afterClose(props)
        }
    }
}
const renderDialog = (props) => {
    let dialogContainer = document.getElementById(`dialog_${props.type}`)
    if (!dialogContainer) {
        dialogContainer = document.createElement('div')
        dialogContainer.id = `dialog_${props.type}`
        dialogContainer.className = style['at-dialog-toast-container']
        document.body.appendChild(dialogContainer)
    }
    let dialogDIV = document.createElement('div')
    dialogDIV.id = `dialog_${props.type}_${new Date().getTime()}`
    dialogContainer.appendChild(dialogDIV)
    props.id = dialogDIV.id
    ReactDOM.render(<Dialog {...props} />, dialogDIV)
    if (props.max && props.max > 0) {
        if (dialogContainer.childNodes.length > props.max) {
            destory(dialogContainer.firstChild, props)
        }
    }
    if (props.delay && props.delay > 0) {
        setTimeout(() => {
            destory(dialogDIV, props)
        }, props.delay)
    }
    return dialogDIV
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

    },
    confirm: (config) => {

    },
    modal: (config) => {

    }
}