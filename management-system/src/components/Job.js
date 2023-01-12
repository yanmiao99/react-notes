import dayjs from 'dayjs'
import Wrapper from '../assets/wrappers/Job'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import JobInfo from './JobInfo'
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa'

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

  const { setEditJob, deleteJob } = useAppContext()


  // 处理status的样式
  let statusStyle

  if (status === '面试') {
    statusStyle = 'interview'
  } else if (status === '待定') {
    statusStyle = 'pending'
  } else {
    statusStyle = 'declined'
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
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <div className={`status ${statusStyle}`}>{status}</div>
        </div>

        <footer>
          <div className="actions">
            <Link
              to="/add-job"
              className="btn edit-btn"
              onClick={() => setEditJob(_id)}
            >
              编辑
            </Link>

            <button
              className="btn delete-btn"
              type="button"
              onClick={() => deleteJob(_id)}
            >
              删除
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  )
}

export default Job
