import React, {useState} from 'react'
import Wrapper from "../assets/wrappers/RegisterPage";
import FormRow from "../components/FormRow"
import Logo from "../components/Logo";
import Alert from "../components/Alert";
import {useAppContext} from "../context/appContext";

// 初始化数据
const initState = {
    name: '',
    email: '',
    password: '',
    isLogin: true,
}

function Register() {
    const [values, setValues] = useState(initState);

    let {showAlert, isLoading, displayAlert, registerUser} = useAppContext()


    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const toggleLogin = () => {
        setValues({...values, isLogin: !values.isLogin})
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const {email, password, name, isLogin} = values
        const currentUser = {email, password, name}

        // 1. 登陆不用判断name , 注册需要判断 name
        if (isLogin) {
            if (!email || !password) {
                displayAlert()
                return
            }
            // 登陆逻辑 todo...
        } else {
            if (!email || !password || !name) {
                displayAlert()
                return
            }
            // 注册逻辑
            registerUser(currentUser)
        }
    }
    return (
        <Wrapper className='full-page'>
            <form onSubmit={onSubmit} className="form">
                <Logo/>
                <h3>
                    {values.isLogin ? '登陆' : '注册'}
                </h3>

                {showAlert && <Alert alertText={'文字'}/>}

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
