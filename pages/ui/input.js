import React from 'react'
import { Row, Col, Input, Radio } from 'COMPONENTS/at-ui'

class GridPage extends React.Component {
    handleInputChange(e) {
        console.log(e.target.value)
    }
    handleFocusChange(e) {
        console.log(e.target.value)
    }
    handleBlurChange(e) {
        console.log(e.target.value)
    }
    render() {
        return (
            <div>
                <h3>Input Styles</h3>
                <Row style={{ marginBottom: '24px', borderBottom: "2px solid #ccc", paddingBottom: "24px" }}>
                    <Col xs={8}>different size</Col>
                    <Col xs={16}>
                        <Input
                            placeholder="Please entry something..."
                            help="help me... 我"
                            size='large'
                        />
                        <Input
                            placeholder="Please entry something..."
                            help="help me... 我"
                        />
                        <Input
                            placeholder="Please entry something..."
                            help="help me... 我"
                            size='small'
                        />
                    </Col>
                </Row>
                <Row style={{ marginBottom: '24px', borderBottom: "2px solid #ccc", paddingBottom: "24px" }}>
                    <Col xs={8}>different themes</Col>
                    <Col xs={16}>
                        <Input
                            placeholder="Please entry something..."
                            help="help me... 我"
                            theme="success"
                        />
                        <Input
                            placeholder="Please entry something..."
                            help="help me... 我"
                            theme="info"
                        />
                        <Input
                            placeholder="Please entry something..."
                            help="help me... 我"
                            theme="warning"
                        />
                        <Input
                            placeholder="Please entry something..."
                            help="help me... 我"
                            theme="danger"
                        />
                        <Input
                            placeholder="Please entry something..."
                            help="help me... 我"
                            theme="default"
                        />
                    </Col>
                </Row>
                <Row style={{ marginBottom: '24px', borderBottom: "2px solid #ccc", paddingBottom: "24px" }}>
                    <Col xs={8}>different help theme</Col>
                    <Col xs={16}>
                        <Input
                            placeholder="Please entry something..."
                            help="help me... 我"
                            theme="success"
                            helpTheme="danger"
                        />
                        <Input
                            placeholder="Please entry something..."
                            help="help me... 我"
                            theme="info"
                            helpTheme="danger"
                        />
                        <Input
                            placeholder="Please entry something..."
                            help="help me... 我"
                            theme="warning"
                            helpTheme="success"
                        />
                        <Input
                            placeholder="Please entry something..."
                            help="help me... 我"
                            theme="danger"
                            helpTheme="success"
                        />
                        <Input
                            placeholder="Please entry something..."
                            help="help me... 我"
                            theme="default"
                            helpTheme="warning"
                        />
                    </Col>
                </Row>
                <Row style={{ marginBottom: '24px', borderBottom: "2px solid #ccc", paddingBottom: "24px" }}>
                    <Col xs={8}>disable</Col>
                    <Col xs={16}>
                        <Input
                            placeholder="Please entry something..."
                            help="help me... 我"
                            theme="success"
                            disabled={true}
                        />
                        <Input
                            placeholder="Please entry something..."
                            help="help me... 我"
                            theme="info"
                            disabled={true}
                        />
                        <Input
                            placeholder="Please entry something..."
                            help="help me... 我"
                            theme="warning"
                            disabled={true}
                        />
                        <Input
                            placeholder="Please entry something..."
                            help="help me... 我"
                            theme="danger"
                            disabled={true}
                        />
                        <Input
                            placeholder="Please entry something..."
                            help="help me... 我"
                            theme="default"
                            disabled={true}
                        />
                    </Col>
                </Row>
                <Row style={{ marginBottom: '24px', borderBottom: "2px solid #ccc", paddingBottom: "24px" }}>
                    <Col xs={8}>event</Col>
                    <Col xs={16}>
                        <Input
                            placeholder="Please entry something..."
                            help="help me... 我"
                            theme="success"
                            onChange={this.handleInputChange.bind(this)}
                            onFocus={this.handleFocusChange.bind(this)}
                            onBlur={this.handleBlurChange.bind(this)}
                        />
                    </Col>
                </Row>
                <Row style={{ marginBottom: '24px', borderBottom: "2px solid #ccc", paddingBottom: "24px" }}>
                    <Col xs={8}>radio</Col>
                    <Col xs={16}>
                        <Radio checked={true}>单选框</Radio>
                        <Radio>单选框</Radio>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default GridPage