import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import About from "./about"
import Home from "./home"
import Error from "./error"
import Details from "./details"

import "../css/index.css"

import Navbar from "./navbar"

const Router5Demo = () => {
    return (
        <div className='router5demo'>
            {/*
            switch : 精准匹配, 只匹配一个
            */}
            <Router>
                <Navbar></Navbar>
                <Switch>
                    <Route path='/' exact>
                        <Home/>
                    </Route>
                    <Route path='/about'>
                        <About/>
                    </Route>
                    <Route path='/list/:id' children={<Details/>}> </Route>
                    <Route path='*'>
                        <Error/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Router5Demo
