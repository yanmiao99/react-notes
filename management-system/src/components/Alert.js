import React from 'react'
import PropTypes from "prop-types"
import {useAppContext} from "../context/appContext";


const Alert = () => {
    let {alertText, alertType} = useAppContext()
    alertType = alertType === '' ? 'info' : alertType

    return <div className={`alert alert-${alertType}`}>{alertText}</div>
}

Alert.defaultProps = {
    alertType: 'info',
}

Alert.propTypes = {
    alertText: PropTypes.string.isRequired
}

export default Alert
