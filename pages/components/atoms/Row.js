import React from 'react'
import style from 'SCSS/grid/grid.scss'
class Row extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={style['row']} style={this.props.style}>
                {this.props.children}
            </div>
        )
    }
}
export default Row