import React from 'react'
import Row from 'COMPONENTS/atoms/Row'
import Col from 'COMPONENTS/atoms/Col'

class GridPage extends React.Component {
    render() {
        return (
            <div>
                <Row style={{background: 'rgba(0,0,0,.5)'}}>
                    <Col xxs={24} xs={16} sm={12} md={8} lg={4} xl={2} xxl={1} style={{background: '#f00'}}>abc</Col>
                </Row>
            </div>
        )
    }
}

export default GridPage