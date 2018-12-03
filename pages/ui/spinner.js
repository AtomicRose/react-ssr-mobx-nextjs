import React from 'react'
import { Button, Spinner, Row, Col } from 'COMPONENTS/at-ui'

class SpinnerPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }
    handleToggleSpin() {
        console.log(1)
        this.setState({
            loading: !this.state.loading
        })
    }
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Spinner />
                        <Spinner loadText="加载中" />
                        <Spinner loadText={false} />
                        <Spinner theme="danger" />
                        <Spinner theme="warning" />
                        <Spinner theme="info" />
                        <Spinner theme="success" />
                        <Spinner theme="purple" />
                        <Spinner theme="warning" delay={3000} />
                    </Col>
                </Row>
                <Row>
                    <h3>Toggle</h3>
                    <Button onClick={() => this.handleToggleSpin()}>Toggle Spinner</Button>
                    <Col>
                        <Spinner loading={this.state.loading} />
                    </Col>
                </Row>
            </div>
        )
    }
}
export default SpinnerPage