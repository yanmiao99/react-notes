// 全局状态管理

import React, {useContext, useReducer} from 'react';
import reducer from "./reducer"
import {
    DISPLAY_ALERT,
    CLEAR_ALERT,
    SETUP_USER_BEGIN,
    SETUP_USER_SUCCESS,
    SETUP_USER_ERROR
} from "./actions"
import http from "../utils/request"
import storage from "../utils/storage"

const AppContext = React.createContext()

// 获取是否登录
const token = storage.getItem('token')
const user = storage.getItem('user')
const userLocation = storage.getItem('location')


const initState = {
    isLoading: false,

    // 控制弹窗
    showAlert: false,
    alertText: '弹窗',
    alertType: '', // success | danger , 默认 info

    // 用户信息
    user: user ? user : null,
    token: token ? token : '',
    userLocation: userLocation ? userLocation : '',
    jobLocation: userLocation ? userLocation : '',

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

    // 派发 "注册 / 登陆用户" 任务
    const setupUser = async (currentUser, type) => {

        dispatch({
            type: SETUP_USER_BEGIN
        })

        try {
            const res = await http.post(`auth/${type}`, currentUser)

            const {user, token, location} = res.data

            // 存储用户信息
            addUserToLocalStorage({user, token, location})

            dispatch({
                type: SETUP_USER_SUCCESS,
                payload: {user, token, location, alertText: type === 'login' ? '登陆' : '注册'}
            })
        } catch (e) {
            dispatch({
                type: SETUP_USER_ERROR
            })
        }

        // 关闭弹窗
        clearAlert()
    }

    // 存储用户信息
    const addUserToLocalStorage = ({user, token, location}) => {
        storage.setItem('user', user)
        storage.setItem('token', token)
        storage.setItem('location', location)
    }

    // 删除用户信息
    const removeUserFromLocalStorage = () => {
        storage.clearItem('user')
        storage.clearItem('token')
        storage.clearItem('location')
    }

    return <AppContext.Provider value={{
        ...state,
        displayAlert,
        setupUser
    }}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () => {
    return useContext(AppContext);
}

export {AppProvider, useAppContext}

