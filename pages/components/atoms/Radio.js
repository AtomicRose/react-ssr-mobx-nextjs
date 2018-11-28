import React from 'react'
import style from 'SCSS/components/atoms/radio.scss'
class Radio extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: props.checked || false
        }
    }
    handleRadioChange(e) {
        this.setState({
            checked: !!e.target.checked
        })
        this.props.onChange && this.props.onChange(e.target.checked, this.props.value || 'undefined', this.props.name || 'undefined')
    }
    render() {
        const radioId = new Date().getTime().toString()
        const { disabled, value } = this.props
        const { checked } = this.state
        const radioChecked = (value !== undefined && this.props.checked !== undefined) ? this.props.checked : checked
        return (
            <div className={`${style['at-radio']} ${style[radioChecked ? 'checked' : 'unchecked']} ${style[disabled ? 'disabled' : 'enabled']}`}>
                <label>
                    <input type="radio"
                        name={this.props.name}
                        onChange={(e) => this.handleRadioChange(e)}
                        checked={radioChecked}
                        disabled={this.props.disabled} />
                    <span className={`${style['radio-icon']}`} style={this.props.radioStyle}></span>
                    <span className={style['radio-text']} style={this.props.radioTextStyle}>{this.props.children}</span>
                </label>
            </div>
        )
    }
}

export default Radio