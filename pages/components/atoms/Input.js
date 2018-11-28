import React from 'react'
import style from 'SCSS/components/atoms/input.scss'
class Input extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const size = this.props.size || 'normal'
        const theme = this.props.theme || 'default'
        const helpTheme = this.props.helpTheme || 'default'
        const type = this.props.htmlType || 'text'
        const disable = !!this.props.disabled || false
        const readOnly = !!this.props.readOnly || false
        const rows = this.props.rows || 3
        if (type === 'textarea') {
            return (
                <div className={`${style['at-input']} ${style[theme]} ${style['help-' + helpTheme]}`}>
                    <textarea
                        className={`${style[size]}`}
                        style={this.props.style}
                        disabled={disable}
                        readOnly={readOnly}
                        rows={rows}
                        maxLength={this.props.maxLength}
                        minLength={this.props.minLength}
                        name={this.props.name}
                        value={this.props.value}
                        onChange={this.props.onChange}
                        onFocus={this.props.onFocus}
                        onBlur={this.props.onBlur}
                        placeholder={this.props.placeholder} />
                    <div className={style['at-input-help']}>{this.props.help || ''}</div>
                </div>
            )
        } else {
            return (
                <div className={`${style['at-input']} ${style[theme]} ${style['help-' + helpTheme]}`}>
                    <input type={type}
                        className={`${style[size]}`}
                        style={this.props.style}
                        disabled={disable}
                        readOnly={readOnly}
                        maxLength={this.props.maxLength}
                        minLength={this.props.minLength}
                        name={this.props.name}
                        value={this.props.value}
                        onChange={this.props.onChange}
                        onFocus={this.props.onFocus}
                        onBlur={this.props.onBlur}
                        placeholder={this.props.placeholder} />
                    <div className={style['at-input-help']}>{this.props.help || ''}</div>
                </div>
            )
        }

    }
}

export default Input