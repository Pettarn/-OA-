import { SET_ISEXTEND } from './mutationType'
import { SET_ISLOGIN } from './mutationType'

export default {
    [SET_ISEXTEND] (state, isExtend) {
        state.isExtend = isExtend
    },
    [SET_ISLOGIN] (state, isLogin) {
        state.isLogin = isLogin
    }
}