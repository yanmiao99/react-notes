import {useAppContext} from '../context/appContext'
import {useEffect} from 'react'
import Loading from './Loading'
import Wrapper from '../assets/wrappers/JobsContainer'
import Job from './Job'
import PageBtnContainer from './PageBtnContainer'
import {Empty} from "antd"

const JobsContainer = () => {
    const {
        getJobs,
        isLoading,
        totalJobs,
        jobs,
        search,
        searchStatus,
        searchType,
        sort,
        numOfPages,
        page
    } = useAppContext()

    useEffect(() => {
        getJobs()
        // eslint-disable-next-line
    }, [search, searchStatus, searchType, sort, page])

    if (isLoading) {
        return <Loading center/>
    }

    if (jobs.length === 0) {
        return (
            <Wrapper>
                <Empty
                    description={
                        <span>暂无数据</span>
                    }
                />
            </Wrapper>
        )
    }

    return (
        <Wrapper>
            <h5>共有 {totalJobs} 个工作展示</h5>
            <div className="jobs">
                {jobs.map((job) => {
                    return <Job key={job._id} {...job} />
                })}
            </div>

            {numOfPages > 1 && <PageBtnContainer/>}
        </Wrapper>
    )
}

export default JobsContainer
