import React from 'react'
import Radio from 'COMPONENTS/atoms/Radio'
import style from 'SCSS/components/atoms/radio.scss'

class RadioGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: undefined
        }
    }
    handleRadioChange(checked, value, name) {
        this.setState({
            value: value
        })
        this.props.onChange && this.props.onChange(checked, value, name)
    }
    render() {
        const { name, list, value, vertical } = this.props
        return (
            <div className={`${style['at-radio-group']} ${vertical ? style['vertical'] : ''}`}>
                {
                    list && list.length > 0 && list.map((item, i) => {
                        return (
                            <Radio key={i} name={name} value={item.value} checked={value !== undefined ? value === item.value : this.state.value === item.value} disabled={item.disabled} onChange={this.handleRadioChange.bind(this)}>{item.text}</Radio>
                        )
                    })
                }
            </div>
        )
    }
}

export default RadioGroup