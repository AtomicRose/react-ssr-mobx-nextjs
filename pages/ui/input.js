import React from 'react'
import { Row, Col, Input } from 'COMPONENTS/at-ui'

class GridPage extends React.Component {
    render() {
        return (
            <div>
                <h3>Input Styles</h3>
                <Row>
                    <Col xs={8}>different size</Col>
                    <Col xs={16}>
                        <Input
                            placeholder="Please entry something..."
                            help="help me... 我"
                            helpType='danger'
                            size='large'
                        />
                        <Input
                            placeholder="Please entry something..."
                            help="help me... 我"
                            helpType='danger'
                        />
                        <Input
                            placeholder="Please entry something..."
                            help="help me... 我"
                            helpType='danger'
                            size='small'
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={8}>different themes</Col>
                    <Col xs={16}>
                        <Input
                            placeholder="Please entry something..."
                            help="help me... 我"
                            helpType='danger'
                            theme="success"
                        />
                        <Input
                            placeholder="Please entry something..."
                            help="help me... 我"
                            helpType='danger'
                            theme="info"
                        />
                        <Input
                            placeholder="Please entry something..."
                            help="help me... 我"
                            helpType='danger'
                            theme="warning"
                        />
                        <Input
                            placeholder="Please entry something..."
                            help="help me... 我"
                            helpType='danger'
                            theme="danger"
                        />
                        <Input
                            placeholder="Please entry something..."
                            help="help me... 我"
                            helpType='danger'
                            theme="default"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={8}>disable</Col>
                    <Col xs={16}>
                        <Input
                            placeholder="Please entry something..."
                            help="help me... 我"
                            helpType='danger'
                            theme="success"
                            disabled={true}
                        />
                        <Input
                            placeholder="Please entry something..."
                            help="help me... 我"
                            helpType='danger'
                            theme="info"
                            disabled={true}
                        />
                        <Input
                            placeholder="Please entry something..."
                            help="help me... 我"
                            helpType='danger'
                            theme="warning"
                            disabled={true}
                        />
                        <Input
                            placeholder="Please entry something..."
                            help="help me... 我"
                            helpType='danger'
                            theme="danger"
                            disabled={true}
                        />
                        <Input
                            placeholder="Please entry something..."
                            help="help me... 我"
                            helpType='danger'
                            theme="default"
                            disabled={true}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default GridPage