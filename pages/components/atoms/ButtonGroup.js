import React from 'react'
import style from 'SCSS/components/atoms/button.scss'
class ButtonGroup extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const direction = this.props.direction || 'level'
        return (
            <div className={`${style['at-btn-group']} ${style[direction]}`}>
                {this.props.children}
            </div>
        )
    }
}

export default ButtonGroup