import React, {useState} from "react";

const FormInput = () => {
    const [data, setData] = useState([]);

    let formData = {
        username: '',
        email: ''
    }

    const [form, setForm] = useState(formData);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (form.username && form.email) {
            setData([...data, form])
            setForm({
                username: '',
                email: ''
            })
        } else {
            console.log('暂无数据');
        }
    }
    const handleFormChange = (e) => {
        let name = e.target.name
        let value = e.target.value

        // 每次更改的时候, 都把前一次赋值的数据给叠加上来 , 所以需要这样子的写法
        setForm({...form, [name]: value})
    }

    return (<form onSubmit={handleSubmit}>
        <div className="form-control">
            <label htmlFor="username">名字 : </label>
            <input
                type="text"
                name='username'
                value={form.username}
                onChange={handleFormChange}/>
        </div>
        <div className="form-control">
            <label htmlFor="email">邮箱 : </label>
            <input
                type="text"
                name='email'
                value={form.email}
                onChange={handleFormChange}
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
