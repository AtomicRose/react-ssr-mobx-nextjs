import I18N from 'I18N'
import React from 'react'
import Link from 'next/link'
import { inject, observer } from 'mobx-react';
import fetch from "isomorphic-fetch"
import { Button } from 'antd'
import Head from 'next/head'

@inject('rootStore')
@observer
class Error extends React.Component {
    static async getInitialProps() {
    }
    constructor(props) {
        super(props)
        const { rootStore } = props
        /**
         * Here, you need init your page data in mobx store.
         * Usually, do some actions.
         */
        rootStore.userStore.getUserInfo()
    }
    changeUserInfo() {
        this.props.rootStore.userStore.changeUserInfo()
    }
    render() {
        const { language, store, rootStore } = this.props
        const langText = I18N.langText(language)
        const changeLang = (language === 'zh_CN' ? 'en_US' : 'zh_CN')
        return (
            <div>
                <Head>
                    <title>Example</title>
                </Head>
                <p>{langText.example.pageError}</p>
                <Link href={`/${changeLang}/example`}>
                    <button>change language</button>
                </Link>
                <p>--------User Info---------</p>
                <p>{`${rootStore.userStore.user ? rootStore.userStore.user.myFriend.nickName : ''}`}</p>
                <Button htmlType="button" type="primary" onClick={() => this.changeUserInfo()}>改变用户信息</Button>
                <Link href={`/example/antd`}>
                    <Button htmlType="button" type="danger" onClick={() => this.changeUserInfo()}>看看Antd的用法</Button>
                </Link>
            </div>
        )
    }
}


export default Error