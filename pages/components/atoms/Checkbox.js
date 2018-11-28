import React from 'react'
import style from 'SCSS/components/atoms/checkbox.scss'
class Checkbox extends React.Component {
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
            <div className={`${style['at-checkbox']} ${style[radioChecked ? 'checked' : 'unchecked']} ${style[disabled ? 'disabled' : 'enabled']}`}>
                <label>
                    <input type="checkbox"
                        name={this.props.name}
                        onChange={(e) => this.handleRadioChange(e)}
                        checked={radioChecked}
                        disabled={this.props.disabled} />
                    <span className={`${style['checkbox-icon']}`} style={this.props.radioStyle}></span>
                    <span className={style['checkbox-text']} style={this.props.radioTextStyle}>{this.props.children}</span>
                </label>
            </div>
        )
    }
}

class CheckboxGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            values: []
        }
    }
    handleCheckboxChange(checked, value, name) {
        let values = this.props.value !== undefined ? this.props.value : this.state.values
        let set = new Set(values)
        if (checked) {
            set.add(value)
        } else {
            set.delete(value)
        }
        const res = Array.from(set)
        this.setState({
            values: res
        })
        this.props.onChange && this.props.onChange(res, name)
    }
    render() {
        const { name, list, value, vertical } = this.props
        return (
            <div className={`${style['at-checkbox-group']} ${vertical ? style['vertical'] : ''}`}>
                {
                    list && list.length > 0 && list.map((item, i) => {
                        return (
                            <Checkbox key={i} name={name} value={item.value} checked={value !== undefined ? value.includes(item.value) : this.state.value.includes(item.value)} disabled={item.disabled} onChange={this.handleCheckboxChange.bind(this)}>{item.text}</Checkbox>
                        )
                    })
                }
            </div>
        )
    }
}

export { Checkbox, CheckboxGroup }