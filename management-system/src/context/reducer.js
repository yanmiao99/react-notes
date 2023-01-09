import {
    DISPLAY_ALERT,
    CLEAR_ALERT
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


        default :
            throw new Error(`没有找到派发的 : ${action.type} 任务`)
    }
}

export default reducer
