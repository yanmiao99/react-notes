import React from 'react'
import Wrapper from '../assets/wrappers/Navbar'
import {FaAlignLeft, FaUserCircle, FaCaretDown, FaAlignRight} from 'react-icons/fa'
import Logo from './Logo'
import {useAppContext} from '../context/appContext'
import {useState} from 'react'
import {Button} from "antd";

function Navbar() {
    const {toggleSidebar, logoutUser, user, showSidebar} = useAppContext()
    const [showLogout, setShowLogout] = useState(false)
    return (
        <Wrapper>
            <div className="nav-center">
                <button className="toggle-btn" onClick={toggleSidebar}>
                    {showSidebar ? <FaAlignRight/> : <FaAlignLeft/>}
                </button>
                <div>
                    <Logo/>
                    <h3 className="logo-text">仪表盘</h3>
                </div>
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
