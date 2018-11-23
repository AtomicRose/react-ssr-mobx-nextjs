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
        console.log(e.target.checked)
    }
    render() {
        const radioId = new Date().getTime().toString()
        const { checked } = this.state
        return (
            <div className={style['at-radio']}>
                <label htmlFor={radioId}
                    className={`${style['radio-icon']} ${style[checked ? 'checked' : 'unchecked']}`}
                    style={this.props.radioStyle}></label>
                <input type="radio"
                    value={this.props.value}
                    onChange={(e) => this.handleRadioChange(e)}
                    checked={checked}
                    disabled={this.props.disabled}
                    id={radioId} />
                <span className={style['radio-text']} style={this.props.radioTextStyle}>{this.props.children}</span>
            </div>
        )
    }
}

export default Radio