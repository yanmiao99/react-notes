import dayjs from 'dayjs'
import Wrapper from '../assets/wrappers/Job'
import {useAppContext} from '../context/appContext'
import JobInfo from './JobInfo'
import {FaLocationArrow, FaBriefcase, FaCalendarAlt} from 'react-icons/fa'
import {Button, Popconfirm, message} from "antd";


const Job = ({
                 _id,
                 company,
                 createdAt,
                 position,
                 jobLocation,
                 jobType,
                 status,
             }) => {
    let date = dayjs(createdAt)
    date = date.format('YYYY-MM-DD')

    const {deleteJob, handleAddOrEditJobDialogShow} = useAppContext()


    // 处理status的样式
    let statusStyle

    if (status === '面试') {
        statusStyle = 'interview'
    } else if (status === '待定') {
        statusStyle = 'pending'
    } else {
        statusStyle = 'declined'
    }

    const handleConfirm = (id) => {
        deleteJob(id)
        message.success('删除成功');
    };

    const handleEdit = (id) => {
        handleAddOrEditJobDialogShow({show: true, type: 'edit', id})
    }


    return (
        <Wrapper>
            <header>
                <div className="main-icon">{company.charAt(0)}</div>
                <div className="info">
                    <h5>{position}</h5>
                    <p>{company}</p>
                </div>
            </header>
            <div className="content">
                <div className="content-center">
                    <JobInfo icon={<FaLocationArrow/>} text={jobLocation}/>
                    <JobInfo icon={<FaCalendarAlt/>} text={date}/>
                    <JobInfo icon={<FaBriefcase/>} text={jobType}/>
                    <div className={`status ${statusStyle}`}>{status}</div>
                </div>

                <footer>
                    <div className="actions">
                        <Button
                            type="primary"
                            onClick={() => handleEdit(_id)}
                        >
                            编辑
                        </Button>

                        <Popconfirm
                            title="警告️"
                            description="确定删除吗 ?"
                            onConfirm={() => handleConfirm(_id)}
                            okText="确定"
                            cancelText="取消"
                        >
                            <Button type="primary" danger>
                                删除
                            </Button>
                        </Popconfirm>

                    </div>
                </footer>
            </div>
        </Wrapper>
    )
}

export default Job
