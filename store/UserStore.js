import { action, observable, autorun } from 'mobx'
import exampleApi from 'API/example'

class UserStore {
    @observable user = {
        myFriend: {
            avatar: '',
            nickName: ''
        }

    }

    @observable stars = 0
    constructor(rootStore) {
        this.rootStore = rootStore
        // autorun(async () => {
        //     this.user = await exampleApi.getUserInfo()
        // })
    }
    @action setStars = (num) => {
        this.stars = num
    }
    @action getUserInfo = async () => {
        const res = await exampleApi.getUserInfo()
        this.user.myFriend = res.data
    }
    @action changeUserInfo = async () => {
        const res = await exampleApi.changeUserInfo()
        this.user.myFriend = res.data
    }
}

export default UserStore