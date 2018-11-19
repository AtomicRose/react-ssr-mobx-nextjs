import React from 'react'
import {Button, ButtonGroup} from 'COMPONENTS/at-ui'
class ButtonPage extends React.Component {
    render() {
        return (
            <div>
                <h3>Different sieze</h3>
                <ButtonGroup>
                    <Button type="button" size="small" theme="default">Button Text</Button>
                    <Button type="button" size="normal" theme="default">Button Text</Button>
                    <Button type="button" size="large" theme="default">Button Text</Button>
                </ButtonGroup>
                <h3>different theme</h3>
                <ButtonGroup>
                    <Button type="button" size="normal" theme="default">Button Text</Button>
                    <Button type="button" size="normal" theme="light-primary">Button Text</Button>
                    <Button type="button" size="normal" theme="primary">Button Text</Button>
                    <Button type="button" size="normal" theme="dark-primary">Button Text</Button>
                    <Button type="button" size="normal" theme="info">Button Text</Button>
                    <Button type="button" size="normal" theme="success">Button Text</Button>
                    <Button type="button" size="normal" theme="warning">Button Text</Button>
                    <Button type="button" size="normal" theme="danger">Button Text</Button>
                    <Button type="button" size="normal" theme="purple">Button Text</Button>
                </ButtonGroup>

                <h3>Purely & different theme</h3>
                <ButtonGroup>
                    <Button type="button" size="normal" theme="default" purely={true}>Button Text</Button>
                    <Button type="button" size="normal" theme="light-primary" purely={true}>Button Text</Button>
                    <Button type="button" size="normal" theme="primary" purely={true}>Button Text</Button>
                    <Button type="button" size="normal" theme="dark-primary" purely={true}>Button Text</Button>
                    <Button type="button" size="normal" theme="info" purely={true}>Button Text</Button>
                    <Button type="button" size="normal" theme="success" purely={true}>Button Text</Button>
                    <Button type="button" size="normal" theme="warning" purely={true}>Button Text</Button>
                    <Button type="button" size="normal" theme="danger" purely={true}>Button Text</Button>
                    <Button type="button" size="normal" theme="purple" purely={true}>Button Text</Button>
                </ButtonGroup>
                <h3>disabled</h3>
                <ButtonGroup>
                    <Button type="button" size="normal" theme="default" purely={true} disabled={true}>Button Text</Button>
                    <Button type="button" size="normal" theme="light-primary" purely={true} disabled={true}>Button Text</Button>
                    <Button type="button" size="normal" theme="primary" purely={true} disabled={true}>Button Text</Button>
                    <Button type="button" size="normal" theme="dark-primary" purely={true} disabled={true}>Button Text</Button>
                    <Button type="button" size="normal" theme="info" purely={true} disabled={true}>Button Text</Button>
                    <Button type="button" size="normal" theme="success" purely={true} disabled={true}>Button Text</Button>
                    <Button type="button" size="normal" theme="warning" purely={true} disabled={true}>Button Text</Button>
                    <Button type="button" size="normal" theme="danger" purely={true} disabled={true}>Button Text</Button>
                    <Button type="button" size="normal" theme="purple" purely={true} disabled={true}>Button Text</Button>
                </ButtonGroup>
                <h3>Button Group vertical</h3>
                <ButtonGroup direction="vertical" spacing={2}>
                    <Button type="button" size="normal" theme="default" purely={true}>Button Text</Button>
                    <Button type="button" size="normal" theme="light-primary" purely={true}>Button Text</Button>
                    <Button type="button" size="normal" theme="primary" purely={true}>Button Text</Button>
                    <Button type="button" size="normal" theme="dark-primary" purely={true}>Button Text</Button>
                    <Button type="button" size="normal" theme="info" purely={true}>Button Text</Button>
                    <Button type="button" size="normal" theme="success" purely={true}>Button Text</Button>
                    <Button type="button" size="normal" theme="warning" purely={true}>Button Text</Button>
                    <Button type="button" size="normal" theme="danger" purely={true}>Button Text</Button>
                    <Button type="button" size="normal" theme="purple" purely={true}>Button Text</Button>
                </ButtonGroup>
                
            </div>
        )
    }
}
export default ButtonPage