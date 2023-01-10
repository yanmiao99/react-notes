import React from 'react'

import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import {Link} from 'react-router-dom'
import Logo from "../components/Logo";

function Landing() {
    return (
        <Wrapper>
            <nav>
                <Logo/>
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>
                        我要 <span>升职加薪</span>
                    </h1>
                    <p>
                        无人问津也好，技不如人也罢。<br/>
                        你都要试着安静下来，去做自己该做的事。<br/>
                        而不是让内心烦躁、焦虑，毁掉你本就不多的热情和定力。<br/>
                        昨日之深渊，今日之浅谈。<br/>
                        路虽远，行则将至；事虽难，行则可成。<br/>
                    </p>
                    <Link to="/register" className="btn btn-hero">
                        登录 / 注册
                    </Link>
                </div>
                <img src={main} className="img main-img" alt="job"/>
            </div>
        </Wrapper>
    )
}

export default Landing
