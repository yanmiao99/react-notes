import {Route,Link} from "react-router-dom"
import Nesting from "./nesting"

const About = () => {
    return (
        <>
            <h4>about</h4>
            <Link to='/about/nesting'>跳转路由嵌套</Link>
            <Route path='/about/nesting'>
                <Nesting></Nesting>
            </Route>
        </>
    )
}

export default About
