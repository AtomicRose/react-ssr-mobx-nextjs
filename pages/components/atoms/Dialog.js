import React from 'react'
import ReactDOM from 'react-dom'
import style from 'SCSS/components/atoms/dialog.scss'
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
                        {/* TODO ICON */}
                        <span>{this.props.content}</span>
                    </div>
                )
            }
            default: {
                return null
            }
        }
    }
}
const destory = (div) => {
    ReactDOM.unmountComponentAtNode(div)
    div.parentNode.removeChild(div)
}
const renderDialog = (props) => {
    let dialogDIV = document.createElement('div')
    document.body.appendChild(dialogDIV)
    ReactDOM.render(<Dialog {...props} />, dialogDIV)
    if (props.delay && props.delay > 0) {
        setTimeout(() => {
            destory(dialogDIV)
            props.afterClose()
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
            beforeClose: () => {
                return true;
            },
            afterClose: () => {

            },
            theme: 'default',
            delay: 2000
        }, config)
        const ele = renderDialog({
            type: 'toast',
            content: text,
            beforeClose: opts.beforeClose,
            afterClose: opts.afterClose,
            delay: opts.delay,
            theme: opts.theme
        })
        return ele
    }
}