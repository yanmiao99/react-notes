import React from 'react'

import main from '../assets/images/main.svg'
import logo from '../assets/images/logo.svg'
import Wrapper from '../assets/wrappers/LandingPage'
// import {Link} from 'react-router-dom'

function Landing() {
    return (
        <Wrapper>
            <nav>
                <img src={logo} alt="logo"/>
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>
                        我要 <span>升职加薪</span>
                    </h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
                        explicabo atque assumenda consequuntur alias obcaecati neque
                        reiciendis, officiis veniam animi impedit ipsa consectetur
                        perspiciatis, quo, suscipit vel tempore! Ipsum quam, minima magni
                        voluptas soluta quia! Ipsum illo consectetur tempore quaerat animi
                        esse deleniti dolore quas est odit. Reiciendis, veniam corrupti?
                    </p>
                    {/*<Link to="/register" className="btn btn-hero">*/}
                    {/*    登录 / 注册*/}
                    {/*</Link>*/}
                </div>
                <img src={main} className="img main-img" alt="job"/>
            </div>
        </Wrapper>
    )
}

export default Landing
