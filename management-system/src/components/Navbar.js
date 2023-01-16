import React from 'react'
import Wrapper from '../assets/wrappers/Navbar'
import {FaAlignLeft, FaUserCircle, FaCaretDown, FaAlignRight} from 'react-icons/fa'
import Logo from './Logo'
import {useAppContext} from '../context/appContext'
import {useState, useEffect} from 'react'
import {Button, Alert} from "antd";
import requestThirdParty from "../utils/request-third-party";
import Marquee from 'react-fast-marquee';

function Navbar() {
    const {toggleSidebar, logoutUser, user, showSidebar} = useAppContext()
    const [showLogout, setShowLogout] = useState(false)
    const [alertText, setAlertText] = useState('')


    useEffect(() => {
        getOneWordData()
    }, [])

    const getOneWordData = async () => {
        const {data} = await requestThirdParty.get('https://v.api.aa1.cn/api/time-tx/index.php')
        const text = `当前时间 : ${data.nowtime} - ${data.nxyj}`
        setAlertText(text)

    }


    return (
        <Wrapper>
            <div className="nav-center">
                <button className="toggle-btn" onClick={toggleSidebar}>
                    {showSidebar ? <FaAlignRight/> : <FaAlignLeft/>}
                </button>
                <Logo/>
                {
                    alertText &&
                    <Alert
                        className='ant-alert'
                        type="info"
                        message={
                            <Marquee pauseOnHover gradient={false}>
                                {alertText}
                            </Marquee>
                        }
                    />
                }
                <div className="btn-container">
                    <Button className="btn" onClick={() => setShowLogout(!showLogout)}>
                        <FaUserCircle/>
                        {/* {user && user.name} */}
                        {user?.name}
                        <FaCaretDown/>
                    </Button>
                    <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
                        <button className="dropdown-btn" onClick={logoutUser}>
                            退出
                        </button>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Navbar
