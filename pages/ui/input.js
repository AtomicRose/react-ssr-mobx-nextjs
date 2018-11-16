import React from 'react'
import { Row, Col, Input } from 'COMPONENTS/at-ui'

class GridPage extends React.Component {
    render() {
        return (
            <div>
                <h3>Input Styles</h3>
                <Row>
                    <Col xs={8}>large</Col>
                    <Col xs={16}>
                        <Input
                            placeholder="Please entry something..."
                            help="help me... 我"
                            helpType='danger'
                            size='large'
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={8}>Normal</Col>
                    <Col xs={16}>
                        <Input
                            placeholder="Please entry something..."
                            help="help me... 我"
                            helpType='danger'
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={8}>small</Col>
                    <Col xs={16}>
                        <Input
                            placeholder="Please entry something..."
                            help="help me... 我"
                            helpType='danger'
                            size='small'
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default GridPage