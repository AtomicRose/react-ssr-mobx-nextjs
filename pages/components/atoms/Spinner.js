import React from 'react'
import style from 'SCSS/components/atoms/spinner.scss'
class Spinner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: this.props.loading === false ? 'none' : 'inline-block'
        }
    }
    componentDidMount() {
        if (this.props.delay) {
            setTimeout(() => {
                this.setState({
                    display: 'none'
                })
            }, this.props.delay)
        }
    }
    render() {
        const theme = this.props.theme || 'primary'
        return (
            <div className={`${style['at-spinner']} ${style[theme]}`} style={{ display: this.props.loading === undefined ? this.state.display : (this.props.loading ? 'inline-block' : 'none') }}>
                <div className={style['loading']}>
                    <span className={`${style['line']} ${style['line-1']}`}></span>
                    <span className={`${style['line']} ${style['line-2']}`}></span>
                    <span className={`${style['line']} ${style['line-3']}`}></span>
                    <span className={`${style['line']} ${style['line-4']}`}></span>
                    <span className={`${style['line']} ${style['line-5']}`}></span>
                    <span className={`${style['line']} ${style['line-6']}`}></span>
                    <span className={`${style['line']} ${style['line-7']}`}></span>
                    <span className={`${style['line']} ${style['line-8']}`}></span>
                    <span className={`${style['line']} ${style['line-9']}`}></span>
                </div>
                {this.props.loadText !== false && <div className={style['loading-text']}>{this.props.loadText || 'LOADING'}</div>}
            </div>
        )
    }
}

export default Spinner