import React from 'react'
import I18N from 'I18N'
import style from 'SCSS/components/organisms/navigation.scss'
import { Icon } from 'COMPONENTS/at-ui'
const iconMap = ['coolly-icon-travel-hot', 'coolly-icon-travel-scenery', 'coolly-icon-travel-wiki', 'coolly-icon-travel-plan', 'coolly-icon-travel-me']
class Navigation extends React.Component {
    render() {
        const { language, router } = this.props
        const langText = I18N.langText(language)
        const navigationList = langText.navigation || []
        let navs = []
        navigationList.map((item, index) => {
            navs.push(
                <li key={index} className={style['coolly-navigation-item' + index]}>
                    <a className={router.query.island === item.island ? style['active'] : ''} href={`/${language}${item.path}`}>
                        <span className={style['nav-icon']}><Icon type={iconMap[index]} /></span><span className={style['nav-text']}>{item.mobileText}</span>
                    </a>
                </li>
            )
        })
        return (
            <div className={style['coolly-navigation']}>
                <ul>
                    {navs}
                </ul>
            </div>
        )
    }
}
export default Navigation