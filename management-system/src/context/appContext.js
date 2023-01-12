// 全局状态管理

import React, {useContext, useReducer} from 'react';
import reducer from "./reducer"
import {
    SETUP_USER_BEGIN,
    SETUP_USER_SUCCESS,
    SETUP_USER_ERROR,
    TOGGLE_SIDEBAR,
    LOGOUT_USER,
    UPDATE_USER,
    CLEAR_FILTERS,
    HANDLE_CHANGE,
    GET_JOBS_BEGIN,
    GET_JOBS_SUCCESS,
    CHANGE_PAGE,
    SET_EDIT_JOB,
    DELETE_JOB_BEGIN,
    EDIT_JOB_BEGIN,
    EDIT_JOB_SUCCESS,
    EDIT_JOB_ERROR,
    CLEAR_VALUES
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

    // 所有工作 - 搜索栏
    search: "",
    searchStatus: "所有",
    searchType: "所有",
    sort: "最新",
    sortOptions: ["最新", "最早", "a-z", "z-a"],
    jobTypeOptions: ['全职', '兼职', '远程'],
    statusOptions: ['面试', '拒绝', '待定'],

    // 所有工作 - 展示
    totalJobs: 0,
    numOfPages: 1,
    page: 1,
    jobs: [],

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

    // 清除搜索条件
    const clearFilters = () => {
        dispatch({type: CLEAR_FILTERS})
    }

    // 搜索条件更改
    const handleChange = ({name, value}) => {
        dispatch({type: HANDLE_CHANGE, payload: {name, value}})
    }

    // 获取所有工作的数据
    const getJobs = async () => {
        const {page, search, searchStatus, searchType, sort} = state
        let url = `/jobs?page=${page}&status=${searchStatus}&jobType=${searchType}&srot=${sort}`

        if (search) {
            url = url + `&search=${search}`
        }

        dispatch({type: GET_JOBS_BEGIN})

        try {
            const {data} = await http.get(url)
            const {jobs, totalJobs, numOfPages} = data

            dispatch({
                type: GET_JOBS_SUCCESS,
                payload: {jobs, totalJobs, numOfPages},
            })
        } catch (error) {
            logoutUser()
        }
    }

    // 更改分页
    const changePage = (page) => {
        dispatch({type: CHANGE_PAGE, payload: {page}})
    }

    // 编辑工作跳转
    const setEditJob = (id) => {
        dispatch({ type: SET_EDIT_JOB, payload: { id } })
    }

    // 编辑工作
    const editJob = async () => {
        dispatch({ type: EDIT_JOB_BEGIN })

        try {
            const { position, company, jobLocation, jobType, status } = state

            await http.patch(`/jobs/${state.editJobId}`, {
                position,
                company,
                jobLocation,
                jobType,
                status,
            })

            dispatch({ type: EDIT_JOB_SUCCESS })

            dispatch({ type: CLEAR_VALUES })
        } catch (error) {
            if (error.response.status === 401) return

            dispatch({
                type: EDIT_JOB_ERROR,
                payload: { msg: error.response.data.msg },
            })
        }
    }

    // 删除工作
    const deleteJob = async (jobId) => {
        dispatch({ type: DELETE_JOB_BEGIN })

        try {
            await http.delete(`/jobs/${jobId}`)
            await getJobs()
        } catch (error) {
            logoutUser()
        }
    }


    return <AppContext.Provider value={{
        ...state,
        setupUser,
        toggleSidebar,
        logoutUser,
        updateUser,
        clearFilters,
        handleChange,
        getJobs,
        changePage,
        setEditJob,
        editJob,
        deleteJob
    }}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () => {
    return useContext(AppContext);
}

export {AppProvider, useAppContext, initState}

