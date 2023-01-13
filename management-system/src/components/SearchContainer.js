import FormRow from './FormRow'
import FormRowSelect from './FormRowSelect'
import Wrapper from '../assets/wrappers/SearchContainer';
import {useAppContext} from '../context/appContext';
import {Button} from "antd"
import JobDialog from "./JobDialog";

const SearchContainer = () => {
    const {
        isLoading,
        search,
        searchStatus,
        searchType,
        sort,
        sortOptions,
        statusOptions,
        jobTypeOptions,
        clearFilters,
        handleChange,
        handleAddOrEditJobDialogShow,
        jobDialogShow
    } = useAppContext()

    const handleSearch = (e) => {
        if (isLoading) return;
        handleChange({name: e.target.name, value: e.target.value})
    }

    const handleClearFilters = (e) => {
        e.preventDefault();
        clearFilters()
    }

    const handleAddJob = () => {
        handleAddOrEditJobDialogShow(true)
    }

    return (
        <Wrapper>
            <form className="form">
                <h4>功能区</h4>
                <div className="form-center">
                    <FormRow
                        labelText="搜索"
                        type="text"
                        name="search"
                        value={search}
                        handleChange={handleSearch}
                    />

                    <FormRowSelect
                        labelText='面试状态'
                        name='searchStatus'
                        value={searchStatus}
                        handleChange={handleSearch}
                        list={['所有', ...statusOptions]}
                    />

                    <FormRowSelect
                        labelText='工作类型'
                        name='searchType'
                        value={searchType}
                        handleChange={handleSearch}
                        list={['所有', ...jobTypeOptions]}
                    />

                    <FormRowSelect
                        labelText='任务排序'
                        name='sort'
                        value={sort}
                        handleChange={handleSearch}
                        list={sortOptions}
                    />

                    <Button
                        className='btn-block'
                        type="primary"
                        danger
                        disabled={isLoading}
                        onClick={handleClearFilters}
                    >
                        重置搜索条件
                    </Button>

                    <Button
                        className='btn-block'
                        type="primary"
                        onClick={handleAddJob}
                    >
                        新增工作
                    </Button>
                </div>
            </form>
            {jobDialogShow && <JobDialog/>}
        </Wrapper>
    )
}

export default SearchContainer
