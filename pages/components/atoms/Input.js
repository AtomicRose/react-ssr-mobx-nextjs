import React from 'react'
import style from 'SCSS/components/atoms/input.scss'
class Input extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const size = this.props.size || 'normal'
        return (
            <div className={style['at-input']}>
                <input type="text" className={`${style[size]}`} style={this.props.style} placeholder={this.props.placeholder}/>
                <div className={style['at-input-help']}>{this.props.help || ''}</div>
            </div>
        )
    }
}

export default Input