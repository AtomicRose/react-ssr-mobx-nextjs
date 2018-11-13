import React from 'react'
import Button from 'COMPONENTS/atoms/Button'
class ButtonPage extends React.Component {
    render() {
        return (
            <div>
                <Button type="button" size="small" theme="danger">small danger</Button>
                <Button type="button" size="small" theme="danger" purely={true}>small danger</Button>
            </div>
        )
    }
}
export default ButtonPage