import {Modal, Form, Button, Input, Select} from 'antd';
import {useAppContext} from "../context/appContext"
import Wrapper from "../assets/wrappers/dialogForm"

const {Option} = Select;
const JobDialog = () => {

    const {
        // 弹窗
        jobDialogShow,
        handleAddOrEditJobDialogShow,

        // options 渲染
        jobTypeOptions,
        statusOptions,

        // isEditing,
        // editJob,
        createJob,
        getJobs
    } = useAppContext()

    const onFinish = (values) => {
        // 创建数据
        createJob(values)
        // 清空输入框
        onReset()
        // 关闭弹窗
        handleAddOrEditJobDialogShow(false)
        // 刷新所有工作任务
        getJobs()
    };

    const handleCancel = () => {
        handleAddOrEditJobDialogShow(false)
    };

    const [form] = Form.useForm();
    const onReset = () => {
        form.resetFields();
    }

    const rules = {
        position: [{required: true, message: '请输入岗位名称'}],
        company: [{required: true, message: '请输入公司名称'}],
        jobLocation: [{required: true, message: '请输入公司地址'}],
        status: [{required: true, message: '请选择面试状态'}],
        jobType: [{required: true, message: '请选择工作类型'}],
    }


    let dialogInfo = {
        status: '待定',
        jobType: '全职',
        position: '',
        jobLocation: '',
        company: '',
    }

    return (
        <>

            <Modal
                title="添加任务"
                open={jobDialogShow}
                onCancel={handleCancel}
                destroyOnClose
                centered
                footer={null}
            >
                <Wrapper>
                    <Form
                        preserve={false}
                        form={form}
                        name="form"
                        onFinish={onFinish}
                        className='dialogForm'
                        initialValues={dialogInfo}
                    >
                        <Form.Item
                            name="status"
                            label="面试情况"
                            rules={rules.status}
                        >
                            <Select allowClear>
                                {
                                    statusOptions.map(item => {
                                        return <Option key={item} value={item}>{item}</Option>
                                    })
                                }
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="jobType"
                            label="工作类型"
                            rules={rules.jobType}
                        >
                            <Select allowClear>
                                {
                                    jobTypeOptions.map(item => {
                                        return <Option key={item} value={item}>{item}</Option>
                                    })
                                }
                            </Select>
                        </Form.Item>


                        <Form.Item
                            name="position"
                            label="应聘职位"
                            rules={rules.position}>
                            <Input placeholder='应聘职位'/>
                        </Form.Item>

                        <Form.Item
                            name='company'
                            label="公司名称"
                            rules={rules.company}>
                            <Input placeholder='公司名称'/>
                        </Form.Item>

                        <Form.Item
                            name="jobLocation"
                            label="公司地点"
                            rules={rules.jobLocation}>
                            <Input placeholder='公司地点'/>
                        </Form.Item>
                        <Form.Item className='dialogFormButtonGroup'>
                            <Button htmlType="button" onClick={onReset}>
                                重置
                            </Button>
                            <Button type="primary" htmlType="submit">
                                提交
                            </Button>
                        </Form.Item>
                    </Form>
                </Wrapper>
            </Modal>
        </>
    )
}

export default JobDialog
