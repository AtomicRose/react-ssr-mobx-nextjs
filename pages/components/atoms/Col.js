import React from 'react'
import style from 'SCSS/grid/grid.scss'
class Col extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const span = this.props.span || 24
        const xxs = this.props.xxs || span
        const xs = this.props.xs || xxs
        const sm = this.props.sm || xs
        const md = this.props.md || sm
        const lg = this.props.lg || md
        const xl = this.props.xl || lg
        const xxl = this.props.xxl || xl
        return (
            <div className={`${style[`col-${span}`]} ${style[`col-xxs-${xxs}`]} ${style[`col-xs-${xs}`]} ${style[`col-sm-${sm}`]} ${style[`col-md-${md}`]} ${style[`col-lg-${lg}`]} ${style[`col-xl-${xl}`]} ${style[`col-xxl-${xxl}`]}`} style={this.props.style}>
                {this.props.children}
            </div>
        )
    }
}
export default Col