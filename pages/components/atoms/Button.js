import React from 'react'
import style from 'SCSS/components/atoms/button.scss'
class Button extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const type = this.props.htmlType || 'button'
        const size = `btn-${this.props.size || 'normal'}`
        const theme = `theme-${this.props.theme || 'default'}`
        const purely = this.props.purely ? 'purely' : ''
        const disable = !!this.props.disabled || false
        return (
            <button type={type} onClick={this.props.onClick} disabled={disable} style={this.props.style} className={`${style['at-btn']} ${style[size]} ${style[theme]} ${purely ? style[purely] : ''}`}>
                {this.props.children}
            </button>
        )
    }
}

export default Button