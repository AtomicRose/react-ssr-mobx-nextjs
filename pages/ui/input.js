import React from 'react'
import { Row, Col, Input, Radio, RadioGroup, Checkbox, CheckboxGroup } from 'COMPONENTS/at-ui'

class GridPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            radioGroup1_value: 2,
            radioGroup2_value: 3,
            checkboxChecked: true,
            checkboxValues: []
        }
    }
    handleInputChange(e) {
        console.log(e.target.value)
    }
    handleFocusChange(e) {
        console.log(e.target.value)
    }
    handleBlurChange(e) {
        console.log(e.target.value)
    }
    handleRadioChange(checked, value, name) {
        console.log(checked, value, name)
    }
    handleRadioGroupChange(checked, value, name) {
        console.log(checked, value, name)
        if (name === 'radioGroup') {
            this.setState({
                radioGroup1_value: value
            })
        }
        if (name === 'radioGroup2') {
            this.setState({
                radioGroup2_value: value
            })
        }

    }
    handleCheckboxChange(checked, value, name) {
        console.log(checked, value, name)
        if (name === 'checkbox1') {
            this.setState({
                checkboxChecked: checked
            })
        }
    }
    handleCheckboxGroupChange(values, name) {
        console.log(values, name)
        this.setState({
            checkboxValues: values
        })
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
                            help="help me... "
                            size='large'
                        />
                        <Input
                            htmlType="password"
                            placeholder="Please entry password..."
                            help="help me... I forgot password"
                        />
                        <Input
                            placeholder="Please entry something..."
                            help="help me... "
                            size='small'
                        />
                    </Col>
                </Row>
                <Row style={{ marginBottom: '24px', borderBottom: "2px solid #ccc", paddingBottom: "24px" }}>
                    <Col xs={8}>different themes</Col>
                    <Col xs={16}>
                        <Input
                            placeholder="Please entry something..."
                            help="help me... "
                            theme="success"
                        />
                        <Input
                            placeholder="Please entry something..."
                            help="help me... "
                            theme="info"
                        />
                        <Input
                            placeholder="Please entry something..."
                            help="help me... "
                            theme="warning"
                        />
                        <Input
                            placeholder="Please entry something..."
                            help="help me... "
                            theme="danger"
                        />
                        <Input
                            placeholder="Please entry something..."
                            help="help me... "
                            theme="default"
                        />
                    </Col>
                </Row>
                <Row style={{ marginBottom: '24px', borderBottom: "2px solid #ccc", paddingBottom: "24px" }}>
                    <Col xs={8}>different help theme</Col>
                    <Col xs={16}>
                        <Input
                            placeholder="Please entry something..."
                            help="help me... "
                            theme="success"
                            helpTheme="danger"
                        />
                        <Input
                            placeholder="Please entry something..."
                            help="help me... "
                            theme="info"
                            helpTheme="danger"
                        />
                        <Input
                            placeholder="Please entry something..."
                            help="help me... "
                            theme="warning"
                            helpTheme="success"
                        />
                        <Input
                            placeholder="Please entry something..."
                            help="help me... "
                            theme="danger"
                            helpTheme="success"
                        />
                        <Input
                            placeholder="Please entry something..."
                            help="help me... "
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
                            help="help me... "
                            theme="success"
                            disabled={true}
                        />
                        <Input
                            placeholder="Please entry something..."
                            help="help me... "
                            theme="info"
                            disabled={true}
                        />
                        <Input
                            placeholder="Please entry something..."
                            help="help me... "
                            theme="warning"
                            disabled={true}
                        />
                        <Input
                            placeholder="Please entry something..."
                            help="help me... "
                            theme="danger"
                            disabled={true}
                        />
                        <Input
                            placeholder="Please entry something..."
                            help="help me... "
                            theme="default"
                            disabled={true}
                        />
                    </Col>
                </Row>
                <Row style={{ marginBottom: '24px', borderBottom: "2px solid #ccc", paddingBottom: "24px" }}>
                    <Col xs={8}>textarea</Col>
                    <Col xs={16}>
                        <Input
                            htmlType="textarea"
                            placeholder="Please entry something..."
                            help="help me... "
                            theme="success"
                            onChange={this.handleInputChange.bind(this)}
                            onFocus={this.handleFocusChange.bind(this)}
                            onBlur={this.handleBlurChange.bind(this)}
                        />
                    </Col>
                </Row>
                <Row style={{ marginBottom: '24px', borderBottom: "2px solid #ccc", paddingBottom: "24px" }}>
                    <Col xs={8}>event</Col>
                    <Col xs={16}>
                        <Input
                            placeholder="Please entry something..."
                            help="help me... "
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
                        <Radio checked={true} value={1} name="radio1" onChange={this.handleRadioChange.bind(this)}>单选框</Radio>
                        <Radio name="radio2" value={2} onChange={this.handleRadioChange.bind(this)}>单选框</Radio>
                        <Radio name="radio3" disabled={true} onChange={this.handleRadioChange.bind(this)}>单选框</Radio>
                        <Radio checked={true} name="radio4" disabled={true} onChange={this.handleRadioChange.bind(this)}>单选框</Radio>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '24px', borderBottom: "2px solid #ccc", paddingBottom: "24px" }}>
                    <Col xs={8}>radio group</Col>
                    <Col xs={16}>
                        <RadioGroup
                            name="radioGroup"
                            list={[
                                {
                                    text: '单选框1',
                                    value: 1,
                                    disabled: true
                                },
                                {
                                    text: '单选框2',
                                    value: 2
                                },
                                {
                                    text: '单选框3',
                                    value: 3
                                }
                            ]}
                            value={this.state.radioGroup1_value}
                            onChange={this.handleRadioGroupChange.bind(this)}>
                        </RadioGroup>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '24px', borderBottom: "2px solid #ccc", paddingBottom: "24px" }}>
                    <Col xs={8}>radio group vertical</Col>
                    <Col xs={16}>
                        <RadioGroup
                            vertical={true}
                            name="radioGroup2"
                            list={[
                                {
                                    text: '单选框1',
                                    value: 1,
                                    disabled: true
                                },
                                {
                                    text: '单选框2',
                                    value: 2
                                },
                                {
                                    text: '单选框3',
                                    value: 3
                                }
                            ]}
                            value={this.state.radioGroup2_value}
                            onChange={this.handleRadioGroupChange.bind(this)}>
                        </RadioGroup>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '24px', borderBottom: "2px solid #ccc", paddingBottom: "24px" }}>
                    <Col xs={8}>checkbox</Col>
                    <Col xs={16}>
                        <Checkbox checked={this.state.checkboxChecked} value={1} name="checkbox1" onChange={this.handleCheckboxChange.bind(this)}>复选框</Checkbox>
                        <Checkbox name="checkbox2" value={2} onChange={this.handleCheckboxChange.bind(this)}>复选框</Checkbox>
                        <Checkbox name="checkbox3" disabled={true} onChange={this.handleCheckboxChange.bind(this)}>复选框</Checkbox>
                        <Checkbox checked={true} name="checkbox4" disabled={true} onChange={this.handleCheckboxChange.bind(this)}>复选框</Checkbox>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '24px', borderBottom: "2px solid #ccc", paddingBottom: "24px" }}>
                    <Col xs={8}>checkbox group vertical</Col>
                    <Col xs={16}>
                        <CheckboxGroup
                            vertical={true}
                            name="radioGroup2"
                            list={[
                                {
                                    text: '复选框1',
                                    value: 1,
                                    disabled: true
                                },
                                {
                                    text: '复选框2',
                                    value: 2
                                },
                                {
                                    text: '复选框3',
                                    value: 3
                                }
                            ]}
                            value={this.state.checkboxValues}
                            onChange={this.handleCheckboxGroupChange.bind(this)}>
                        </CheckboxGroup>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default GridPage