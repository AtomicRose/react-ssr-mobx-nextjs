import React from 'react'
import css from 'SCSS/main.scss'
import indexCss from 'SCSS/index.scss'
import Link from 'next/link'
const Index = (props) => {
    const { language } = props
    return (
        <div>
            <p className={css.hello}>this is home page...</p>
            <p className={indexCss.aa}>abcdefg</p>
            <Link href={`/${language}/example`}>
                <button>See Example</button>
            </Link>
        </div>
    )
}

export default Index