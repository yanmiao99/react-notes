import { Link } from 'react-router-dom'
import img from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'

function Error() {
    return (
        <Wrapper className="full-page">
            <div>
                <img src={img} alt="not found" />
                <h3>哦吼! Page Not Found</h3>
                <Link to="/">回到首页</Link>
            </div>
        </Wrapper>
    )
}

export default Error
