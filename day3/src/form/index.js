import React, {useState} from "react";

const FormInput = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [data, setData] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault()
        if (username && email) {
            const person = {username, email}
            setData([...data, person])
            setUsername('')
            setEmail('')
        } else {
            console.log('暂无数据');
        }
    }
    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    return (<form onSubmit={handleSubmit}>
        <div className="form-control">
            <label htmlFor="username">名字 : </label>
            <input
                type="text"
                id='username'
                name='username'
                value={username}
                onChange={(e) => handleUsernameChange(e)}/>
        </div>
        <div className="form-control">
            <label htmlFor="email">邮箱 : </label>
            <input
                type="text"
                id='email'
                name='email'
                value={email}
                onChange={(e) => handleEmailChange(e)}
            />
        </div>

        <div>
            {
                data.length > 0
                    ? data.map((item, index) => {
                        return (
                            <p key={index}>
                                {item.username} :
                                {item.email}
                            </p>
                        )
                    })
                    :
                    <p>暂无数据</p>
            }
        </div>

        <button type='submit'>提交</button>
    </form>)
}

export default FormInput
