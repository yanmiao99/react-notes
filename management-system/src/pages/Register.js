import React, {useState} from 'react'
import Wrapper from "../assets/wrappers/RegisterPage";
import FormRow from "../components/FormRow"
import Logo from "../components/Logo";
import Alert from "../components/Alert";

// 初始化数据
const initState = {
    name: '',
    email: '',
    password: '',
    isLogin: true,
    showAlert: false
}

function Register() {
    const [values, setValues] = useState(initState);
    const [isLoading, setIsLoading] = useState(false);
    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const toggleLogin = () => {
        setValues({...values, isLogin: !values.isLogin})
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <Wrapper className='full-page'>
            <form onSubmit={onSubmit} className="form">
                <Logo/>
                <h3>
                    {values.isLogin ? '登陆' : '注册'}
                </h3>

                {values.showAlert && <Alert alertText={'文字'} alertType={'danger'}/>}

                {
                    values.isLogin ? '' :
                        <FormRow
                            type="name"
                            name="name"
                            value={values.name}
                            handleChange={handleChange}
                        />
                }
                <FormRow
                    type='email'
                    name="email"
                    value={values.email}
                    handleChange={handleChange}
                />
                <FormRow
                    type="password"
                    name="password"
                    value={values.password}
                    handleChange={handleChange}
                />
                <button type="submit" className="btn btn-block" disabled={isLoading}>
                    {values.isLogin ? '登陆' : '注册'}
                </button>
                <p>
                    {values.isLogin ? '没有账号?' : '已有账号?'}
                    <button type="button" className="login-btn" onClick={toggleLogin}>
                        {values.isLogin ? '注册' : '登录'}
                    </button>
                </p>
            </form>
        </Wrapper>
    )
}


export default Register
