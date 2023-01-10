import React from 'react'
import {useAppContext} from '../context/appContext'
import {Navigate} from 'react-router-dom'

// 路由守卫
function ProtectedRoute({children}) {
    const {user} = useAppContext()
    if (!user) {
        return <Navigate to="/landing"/>
    }
    return children
}

export default ProtectedRoute
