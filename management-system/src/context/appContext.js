// 全局状态管理

import React, {useContext, useReducer} from 'react';
import reducer from "./reducer"
import {
    DISPLAY_ALERT,
    CLEAR_ALERT,
    REGISTER_USER_BEGIN,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
} from "./actions"
import http from "../utils/request"

const AppContext = React.createContext()

const initState = {
    isLoading: false,

    // 控制弹窗
    showAlert: false,
    alertText: '弹窗',
    alertType: '', // success | danger , 默认 info

    // 用户信息
    user: [],
    token: '',
    userLocation: ''

}

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initState);

    // 派发 "显示弹窗" 任务
    const displayAlert = () => {
        dispatch({
            type: DISPLAY_ALERT,
        })
        clearAlert()
    }

    // 派发 "关闭弹窗" 任务
    const clearAlert = () => {
        setTimeout(() => {
            dispatch({
                type: CLEAR_ALERT
            })
        }, 2000)
    }

    // 派发 "注册用户" 任务
    const registerUser = async (currentUser) => {
        console.log(currentUser);

        dispatch({type: REGISTER_USER_BEGIN})

        let res = await http.post('auth/register', currentUser)

        const {user, token, location} = res.data

        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: {user, token, location}
        })
    }

    return <AppContext.Provider value={{
        ...state,
        displayAlert,
        registerUser
    }}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () => {
    return useContext(AppContext);
}

export {AppProvider, useAppContext}

