import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Dialog, Row, Col } from 'COMPONENTS/at-ui'

class SpinnerPage extends React.Component {
    constructor(props) {
        super(props)
    }
    handleOpenToast(t) {
        Dialog.toast('This is toast ' + new Array(Math.ceil(Math.random() * 60)).join('Haha '), {
            afterClose: (type, props) => {
                console.log('Oh, i close by delay time', type)
            },
            theme: t,
            delay: 2000
        })
    }
    handleOpenAlert(t) {
        Dialog.alert({
            title: 'Title: ' + t,
            content: <div><p>hahah</p><p>heheeh</p></div>,
            beforeClose: (type, props) => {
                console.log('Before close by: ', type)
                return true
            },
            afterClose: (type, props) => {
                console.log('Oh, i close by: ', type)
            },
            theme: t
        })
    }
    handleOpenConfirm(t) {
        Dialog.confirm({
            title: 'Title: ' + t,
            content: <div><p>hahah</p><p>heheeh</p></div>,
            beforeClose: (type, props) => {
                console.log('Before close by: ', type)
                return true
            },
            afterClose: (type, props) => {
                console.log('Oh, i close by: ', type)
            },
            theme: t
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
                        <Button size="small" theme="primary" onClick={() => this.handleOpenToast('primary')}>Open Toast primary</Button>
                        <Button size="small" theme="warning" onClick={() => this.handleOpenToast('warning')}>Open Toast warning</Button>
                        <Button size="small" theme="danger" onClick={() => this.handleOpenToast('danger')}>Open Toast danger</Button>
                        <Button size="small" theme="purple" onClick={() => this.handleOpenToast('purple')}>Open Toast purple</Button>
                    </Col>
                </Row>
                <Row style={{marginTop: '16px'}}>
                    <Col>
                        <Button size="small" theme="default" onClick={() => this.handleOpenAlert('default')}>Open Alert default</Button>
                        <Button size="small" theme="success" onClick={() => this.handleOpenAlert('success')}>Open Alert success</Button>
                        <Button size="small" theme="info" onClick={() => this.handleOpenAlert('info')}>Open Alert info</Button>
                        <Button size="small" theme="primary" onClick={() => this.handleOpenAlert('primary')}>Open Alert primary</Button>
                        <Button size="small" theme="warning" onClick={() => this.handleOpenAlert('warning')}>Open Alert warning</Button>
                        <Button size="small" theme="danger" onClick={() => this.handleOpenAlert('danger')}>Open Alert danger</Button>
                        <Button size="small" theme="purple" onClick={() => this.handleOpenAlert('purple')}>Open Alert purple</Button>
                    </Col>
                </Row>
                <Row style={{ marginTop: '16px' }}>
                    <Col>
                        <Button size="small" theme="default" onClick={() => this.handleOpenConfirm('default')}>Open Confirm default</Button>
                        <Button size="small" theme="success" onClick={() => this.handleOpenConfirm('success')}>Open Confirm success</Button>
                        <Button size="small" theme="info" onClick={() => this.handleOpenConfirm('info')}>Open Confirm info</Button>
                        <Button size="small" theme="primary" onClick={() => this.handleOpenConfirm('primary')}>Open Confirm primary</Button>
                        <Button size="small" theme="warning" onClick={() => this.handleOpenConfirm('warning')}>Open Confirm warning</Button>
                        <Button size="small" theme="danger" onClick={() => this.handleOpenConfirm('danger')}>Open Confirm danger</Button>
                        <Button size="small" theme="purple" onClick={() => this.handleOpenConfirm('purple')}>Open Confirm purple</Button>
                    </Col>
                </Row>
                <Row style={{ marginTop: '16px' }}>
                    <Col>
                        <Button size="small" theme="default" onClick={() => this.handleOpenLoading('spinner')}>Open Spinner</Button>
                        <Button size="small" theme="success" onClick={() => this.handleOpenLoading('pageLoading')}>Open Page loading</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default SpinnerPage