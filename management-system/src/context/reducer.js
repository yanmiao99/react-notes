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

        // 工作搜索条件
        case CLEAR_FILTERS:
            return {
                ...state,
                search: "",
                searchStatus: "所有",
                searchType: "所有",
                sort: "最新",
            }

        case HANDLE_CHANGE:
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            }

        // 所有工作数据
        case GET_JOBS_BEGIN :
            return {...state, isLoading: true, showAlert: false}

        case GET_JOBS_SUCCESS :
            return {
                ...state,
                isLoading: false,
                jobs: action.payload.jobs,
                totalJobs: action.payload.totalJobs,
                numOfPages: action.payload.numOfPages,
            }

        case CHANGE_PAGE :
            return {...state, page: action.payload.page}

        case SET_EDIT_JOB :
            const job = state.jobs.find((job) => job._id === action.payload.id)
            const {_id, position, company, jobLocation, status, jobType} = job
            return {
                ...state,
                isEditing: true,
                editJobId: _id,
                position,
                company,
                jobLocation,
                status,
                jobType,
            }

        case DELETE_JOB_BEGIN :
            return {...state, isLoading: true}


        case EDIT_JOB_BEGIN :
            return {...state, isLoading: true}


        case EDIT_JOB_SUCCESS :
            return {
                ...state,
                isLoading: false,
                showAlert: true,
                alertType: 'success',
                alertText: '工作已更新',
            }

        case EDIT_JOB_ERROR :
            return {
                ...state,
                isLoading: false,
                showAlert: true,
                alertType: 'danger',
                alertText: action.payload.msg,
            }

        case CLEAR_VALUES :
            const initialState = {
                jobLocation: state.userLocation,
                isEditing: false,
                editJobId: '',
                position: '',
                company: '',
                jobType: '全职',
                status: '待定',
            }
            return {
                ...state,
                ...initialState,
            }


        default :
            throw new Error(`没有找到派发的 : ${action.type} 任务`)
    }
}

export default reducer
