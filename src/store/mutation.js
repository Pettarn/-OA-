import { SET_ISEXTEND } from './mutationType'
import { SET_ISLOGIN } from './mutationType'
import { USER_INFO } from './mutationType'

export default {
    [SET_ISEXTEND] (state, isExtend) {
        state.isExtend = isExtend
    },
    [SET_ISLOGIN] (state, isLogin) {
        state.isLogin = isLogin
    },
    [USER_INFO] (state, userInfo) {
        state.userInfo = userInfo
    },
}