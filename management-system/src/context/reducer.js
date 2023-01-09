import {
    DISPLAY_ALERT,
    CLEAR_ALERT,
    REGISTER_USER_BEGIN,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
} from "./actions"

const reducer = (state, action) => {
    switch (action.type) {
        case DISPLAY_ALERT :
            return {
                ...state,
                showAlert: true,
                alertType: 'danger',
                alertText: '请确保所有内容已经输入'
            }

        case CLEAR_ALERT :
            return {
                ...state,
                showAlert: false,
                alertType: '',
                alertText: ''
            }

        case REGISTER_USER_BEGIN :
            return {
                ...state,
                isLoading: true
            }

        case REGISTER_USER_SUCCESS :
            return {
                ...state,
                isLoading: false,
                showAlert: true,
                alertType: 'success',
                alertText: '用户注册成功'
            }

        default :
            throw new Error(`没有找到派发的 : ${action.type} 任务`)
    }
}

export default reducer