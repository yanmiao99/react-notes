// 全局状态管理

import React, {useContext, useReducer} from 'react';
import reducer from "./reducer"
import {
    SETUP_USER_BEGIN,
    SETUP_USER_SUCCESS,
    SETUP_USER_ERROR,
    TOGGLE_SIDEBAR,
    LOGOUT_USER,
    UPDATE_USER
} from "./actions"
import http from "../utils/request"
import storage from "../utils/storage"
import {message} from "antd";

const AppContext = React.createContext()

// 获取是否登录
const token = storage.getItem('token')
const user = storage.getItem('user')
const userLocation = storage.getItem('location')


const initState = {
    isLoading: false,

    // 用户信息
    user: user ? user : null,
    token: token ? token : '',
    userLocation: userLocation ? userLocation : '',
    jobLocation: userLocation ? userLocation : '',

    // 侧边栏
    showSidebar: false,

}

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initState);

    // 派发 "注册 / 登录用户" 任务
    const setupUser = async (currentUser, type) => {

        dispatch({
            type: SETUP_USER_BEGIN
        })

        try {
            const {data} = await http.post(`auth/${type}`, currentUser)

            const {user, token, location} = data

            // 存储用户信息
            addUserToLocalStorage({user, token, location})

            dispatch({
                type: SETUP_USER_SUCCESS,
                payload: {user, token, location}
            })

            if (type === 'login') {
                message.success(`用户登录成功`)
            } else {
                message.success(`用户注册成功, 自动登录`)
            }

        } catch (e) {
            dispatch({
                type: SETUP_USER_ERROR
            })
        }
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

    // 控制侧边栏开关
    const toggleSidebar = () => {
        dispatch({type: TOGGLE_SIDEBAR})
    }
    // 退出登录
    const logoutUser = () => {
        dispatch({type: LOGOUT_USER})
        removeUserFromLocalStorage()
        message.success('用户退出登录')
    }

    // 个人信息更新
    const updateUser = async (currentUser) => {
        try {
            const {data} = await http.patch('auth/updateUser', currentUser)

            const {user, location, token} = data

            dispatch({
                type: UPDATE_USER,
                payload: {user, location, token},
            })

            // 更新本地存储
            addUserToLocalStorage({user, location, token})

            message.success('用户信息更新成功')

        } catch (error) {
            message.error(error.response.data.msg)
        }
    }


    return <AppContext.Provider value={{
        ...state,
        setupUser,
        toggleSidebar,
        logoutUser,
        updateUser
    }}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () => {
    return useContext(AppContext);
}

export {AppProvider, useAppContext, initState}

