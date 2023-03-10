import React, {useState, useEffect} from 'react'
import Wrapper from "../assets/wrappers/RegisterPage";
import FormRow from "../components/FormRow"
import Logo from "../components/Logo";
import {useAppContext} from "../context/appContext";
import {useNavigate} from "react-router-dom"
import {message} from "antd";

// 初始化数据
const initState = {
    name: '', email: '', password: '', isLogin: true,
}

function Register() {
    const [values, setValues] = useState(initState);

    let {isLoading, setupUser, user} = useAppContext()

    let navigate = useNavigate()

    // 判断用户是否已经登录
    useEffect(() => {
        user && navigate("/")
    }, [user, navigate]); // 依赖项


    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const toggleLogin = () => {
        setValues({...values, isLogin: !values.isLogin})
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const {email, password, name, isLogin} = values

        // 1. 注册和登录的判断逻辑
        if (isLogin) {
            // 登录逻辑
            const currentUser = {email, password}
            if (!email || !password) {
                message.error('请输入账号或者密码')
                return
            }
            setupUser(currentUser, 'login')
        } else {
            // 注册逻辑
            const currentUser = {email, password, name}
            if (!email || !password || !name) {
                message.error('请输入账号/密码/名称')
                return
            }
            setupUser(currentUser, 'register')

            // 2. 获取注册信息后, 清空所有的数据
            setValues({
                name: '',
                email: '',
                password: '',
                isLogin: true, // 可以使注册成功后跳转到登录页
            })
        }


    }
    return (<Wrapper className='full-page'>
        <form onSubmit={onSubmit} className="form">
            <Logo/>
            <h3>
                {values.isLogin ? '登录' : '注册'}
            </h3>

            {values.isLogin ? '' : <FormRow
                type="name"
                name="name"
                value={values.name}
                handleChange={handleChange}
            />}
            <FormRow
                type='email'
                name="email"
                labelText='邮箱'
                value={values.email}
                handleChange={handleChange}
            />
            <FormRow
                type="password"
                name="password"
                labelText='密码'
                value={values.password}
                handleChange={handleChange}
            />
            <button type="submit" className="btn btn-block" disabled={isLoading}>
                {values.isLogin ? '登录' : '注册'}
            </button>
            <p>
                {values.isLogin ? '没有账号?' : '已有账号?'}
                <button type="button" className="login-btn" onClick={toggleLogin}>
                    {values.isLogin ? '注册' : '登录'}
                </button>
            </p>
        </form>
    </Wrapper>)
}


export default Register
