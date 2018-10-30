import { action, observable, autorun } from 'mobx'

class UserStore {
    @observable stars = 0
    constructor(rootStore) {
        this.rootStore = rootStore
    }
    @action setStars = (num) => {
        this.stars = num
    }
}

export default UserStore