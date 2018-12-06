import React from 'react'
import I18N from 'I18N'
class Navigation extends React.Component {
    render() {
        const { language } = this.props
        const langText = I18N.langText(language)
        const navigationList = langText.navigation
        return (
            <div>This is pc header</div>
        )
    }
}
export default Navigation