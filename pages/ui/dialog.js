import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Dialog, Row, Col } from 'COMPONENTS/at-ui'

class SpinnerPage extends React.Component {
    constructor(props) {
        super(props)
    }
    handleOpen() {
        Dialog.toast('This is toast', {
            afterClose: () => {
                console.log('Oh, i close by delay time')
            }
        })
    }
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Button onClick={() => this.handleOpen()}>Open dialog</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default SpinnerPage