import React from 'react'
import style from 'SCSS/components/atoms/input.scss'
class Radio extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
     

        return (
            <div>
                <input type="radio"/>
                <div className={style['at-input-help']}>{this.props.help || ''}</div>
            </div>
        )
    }
}

export default Input