import React from 'react'
import iconfontStyle from 'SCSS/common/icon.scss'
import iconStyle from 'SCSS/components/atoms/icon.scss'

class Icon extends React.Component {
    render() {
        const extraClass = this.props.className
        const extraStyle = this.props.style
        const type = this.props.type
        const theme = this.props.theme
        return (
            <span className={`${iconfontStyle['iconfont']} ${iconfontStyle[type]} ${iconStyle['at-icon']} ${iconStyle[theme]} ${extraClass}`} style={extraStyle}></span>
        )
    }
}
export default Icon