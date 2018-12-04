import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Dialog, Row, Col } from 'COMPONENTS/at-ui'

class SpinnerPage extends React.Component {
    constructor(props) {
        super(props)
    }
    handleOpenToast(t) {
        Dialog.toast('This is toast ' + new Array(Math.ceil(Math.random() * 60)).join('Haha '), {
            afterClose: (props) => {
                console.log('Oh, i close by delay time', props)
            },
            theme: t,
            delay: 100000
        })
    }
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Button size="small" theme="default" onClick={() => this.handleOpenToast('default')}>Open Toast default</Button>
                        <Button size="small" theme="success" onClick={() => this.handleOpenToast('success')}>Open Toast success</Button>
                        <Button size="small" theme="info" onClick={() => this.handleOpenToast('info')}>Open Toast info</Button>
                        <Button size="small" theme="warning" onClick={() => this.handleOpenToast('warning')}>Open Toast warning</Button>
                        <Button size="small" theme="danger" onClick={() => this.handleOpenToast('danger')}>Open Toast danger</Button>
                        <Button size="small" theme="purple" onClick={() => this.handleOpenToast('purple')}>Open Toast purple</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default SpinnerPage