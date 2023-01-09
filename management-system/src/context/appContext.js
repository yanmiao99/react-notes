// 全局状态管理

import React, {useContext, useReducer} from 'react';
import reducer from "./reducer"
import {
    DISPLAY_ALERT,
    CLEAR_ALERT
} from "./actions"

const AppContext = React.createContext()

const initState = {
    isLoading: false,

    // 控制弹窗
    showAlert: false,
    alertText: '弹窗',
    alertType: '' // success | danger , 默认 info
}

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initState);

    // 派发 "显示弹窗" 任务
    const displayAlert = () => {
        dispatch({
            type: DISPLAY_ALERT
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

    return <AppContext.Provider value={{
        ...state,
        displayAlert,
    }}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () => {
    return useContext(AppContext);
}

export {AppProvider, useAppContext}

