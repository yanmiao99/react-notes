// 全局状态管理

import React, {useContext, useState} from 'react';

const AppContext = React.createContext()

const initState = {
    isLoading: false,

    // 控制弹窗
    showAlert: true,
    alertText: '测试文字',
    alertType: '' // success | danger , 默认 info
}

const AppProvider = ({children}) => {
    const [state] = useState(initState)
    return <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
}

const useAppContext = () => {
    return useContext(AppContext);
}

export {AppProvider, useAppContext}

