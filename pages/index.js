import React from 'react'
import sass from 'SCSS/index.scss'
import less from 'LESS/index.less'
import Link from 'next/link'
const Index = (props) => {
    const { language } = props
    return (
        <div>
            <p className={sass.red}>this is home page...</p>
            <p className={less.green}>abcdefg</p>
            <Link href={`/${language}/example`}>
                <button>See Example</button>
            </Link>
        </div>
    )
}

export default Index