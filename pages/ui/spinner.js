import React from 'react'
import { Button, Spinner } from 'COMPONENTS/at-ui'

class SpinnerPage extends React.Component {
    render() {
        return (
            <div>
                <Spinner />
                <Spinner loadText="加载中" />
                <Spinner loadText={false} />
                <Spinner theme="danger" />
                <Spinner theme="warning" />
                <Spinner theme="info" />
                <Spinner theme="success" />
                <Spinner theme="purple" />
            </div>
        )
    }
}
export default SpinnerPage