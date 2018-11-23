import React from 'react'
import style from 'SCSS/components/atoms/radio.scss'
class Radio extends React.Component {
    constructor(props) {
        super(props)
        this.radioId = new Date().getTime().toString()
    }
    render() {
        const { checked } = this.props
        return (
            <div className={style['at-radio']}>
                <label htmlFor={this.radioId}
                    className={`${style['radio-icon']} ${style[checked ? 'checked' : 'unchecked']}`}
                    style={this.props.radioStyle}></label>
                <input type="radio"
                    value={this.props.value}
                    checked={checked}
                    disabled={this.props.disabled}
                    id={this.radioId} />
                <span className={style['radio-text']} style={this.props.radioTextStyle}>{this.props.children}</span>
            </div>
        )
    }
}

export default Radio