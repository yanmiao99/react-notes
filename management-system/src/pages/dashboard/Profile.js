import Wrapper from '../../assets/wrappers/DashboardFormPage'
import {useAppContext} from '../../context/appContext'
import {Button, Form, Input} from 'antd';
import {UserOutlined, RobotOutlined, SendOutlined} from '@ant-design/icons';
import {AiOutlineMail, AiOutlineCompass} from "react-icons/ai"

const Profile = () => {
    const {
        user,
        updateUser,
    } = useAppContext()

    const onFinish = (values) => {
        // 发起用户请求
        updateUser(values)
    };

    const rules = {
        name: [{required: true, message: '请输入姓名'}],
        nickName: [{required: true, message: '请输入昵称'}],
        email: [{required: true, message: '请输入邮箱'}],
        location: [{required: true, message: '请输入地址'}]
    }

    return (
        <Wrapper>
            <Form
                name="form"
                onFinish={onFinish}
                initialValues={user}
                autoComplete="off"
                layout='vertical'
            >
                <h3>个人信息</h3>
                <div className="form-center">
                    <Form.Item
                        label="姓名"
                        name="name"
                        rules={rules.name}>
                        <Input prefix={<UserOutlined/>} placeholder="请输入姓名"/>
                    </Form.Item>
                    <Form.Item
                        label="昵称"
                        name="nickName"
                        rules={rules.nickName}>
                        <Input prefix={<RobotOutlined/>} placeholder="请输入昵称"/>
                    </Form.Item>
                    <Form.Item
                        label="邮箱"
                        name="email"
                        rules={rules.email}>
                        <Input prefix={<AiOutlineMail/>} placeholder="请输入邮箱"/>
                    </Form.Item>
                    <Form.Item
                        label="地区"
                        name="location"
                        rules={rules.location}>
                        <Input prefix={<AiOutlineCompass/>} placeholder="请输入地区"/>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            sm: {span: 24, offset: 0},
                            lg: {offset: 12}
                        }}>
                        <Button type="primary" htmlType="submit" className='btn btn-block'>
                            更新
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </Wrapper>
    )
}

export default Profile
