import {Outlet} from 'react-router-dom'
import Wrapper from '../../assets/wrappers/SharedLayout'

import Navbar from "../../components/Navbar"
import SmallSidebar from "../../components/SmallSidebar"
import BigSidebar from "../../components/BigSidebar"

// 整体框架布局
function SharedLayout() {
    return (
        <Wrapper>
            <main className="dashboard">
                <SmallSidebar/>
                <BigSidebar/>

                <div>
                    <Navbar/>
                    <div className="dashboard-page">
                        {/*
                            其他的路由的出口都在这里, 类似vue 的 router-view
                        */}
                        <Outlet/>
                    </div>
                </div>
            </main>
        </Wrapper>
    )
}

export default SharedLayout
