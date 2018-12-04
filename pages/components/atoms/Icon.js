import React from 'react'
import ReactDOM from 'react-dom'
import iconStyle from 'SCSS/components/common/icon.scss'
import style from 'SCSS/components/atoms/icon.scss'

class Icon extends React.Component {
    render() {
        const extraClass = this.props.className
        const style = this.props.style
        const type = this.props.type
        return (
            <span></span>
        )
    }
}
export default Icon