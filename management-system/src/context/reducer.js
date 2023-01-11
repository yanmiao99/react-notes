import {
    SETUP_USER_BEGIN,
    SETUP_USER_SUCCESS,
    SETUP_USER_ERROR,
    TOGGLE_SIDEBAR,
    LOGOUT_USER,
    UPDATE_USER
} from "./actions"

import {initState} from './appContext'

const reducer = (state, action) => {
    switch (action.type) {

        // 登陆 / 注册
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

        // 更新用户信息
        case UPDATE_USER :
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                userLocation: action.payload.location,
                jobLocation: action.payload.location,
            }

        default :
            throw new Error(`没有找到派发的 : ${action.type} 任务`)
    }
}

export default reducer
