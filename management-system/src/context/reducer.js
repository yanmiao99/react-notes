import {
    SETUP_USER_BEGIN,
    SETUP_USER_SUCCESS,
    SETUP_USER_ERROR,
    TOGGLE_SIDEBAR,
    LOGOUT_USER
} from "./actions"

import {initState} from './appContext'

const reducer = (state, action) => {
    switch (action.type) {
        case SETUP_USER_BEGIN :
            return {
                ...state,
                isLoading: true
            }

        case SETUP_USER_SUCCESS :
            return {
                ...state,
                isLoading: false,
                // 存储用户信息
                token: action.payload.token,
                user: action.payload.user,
                userLocation: action.payload.location,
                jobLocation: action.payload.location,
            }

        case SETUP_USER_ERROR :
            return {
                ...state,
                isLoading: false,
            }

        // 侧边栏
        case TOGGLE_SIDEBAR :
            return {
                ...state,
                showSidebar: !state.showSidebar,
            }

        case LOGOUT_USER :
            return {
                ...initState,
                user: null,
                token: '',
                userLocation: '',
                jobLocation: '',
            }

        default :
            throw new Error(`没有找到派发的 : ${action.type} 任务`)
    }
}

export default reducer
