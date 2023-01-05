import "../css/navbar.css"
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className='navbar'>
            <span>
                <Link to="/">首页</Link>
            </span>
            <span>
                <Link to="/about">关于</Link>
            </span>
        </div>
    )
}

export default Navbar
