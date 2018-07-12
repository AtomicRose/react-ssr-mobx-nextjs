
import CommonStore from 'STORE/CommonStore'
import UserStore from 'STORE/UserStore'
let store = null
class RootStore {
    constructor() {
        // here you need bind other store to the RootStore. So you can use other store by used rootStore.XXXX
        this.userStore = new UserStore(this)
        this.commonStore = new CommonStore(this)

    }
}

export function initRootStore(isServer) {
    if (isServer) {
        return new RootStore()
    } else {
        if (store === null) {
            store = new RootStore(isServer)
        }
        return store
    }
}