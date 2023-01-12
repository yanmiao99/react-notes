import Wrapper from '../assets/wrappers/PageBtnContainer'
import { useAppContext } from '../context/appContext'
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi'

const PageBtnContainer = () => {
    const { numOfPages, page, changePage } = useAppContext()

    const prevPage = () => {
        let newPage = page - 1;
        if (newPage < 1) {
            newPage = numOfPages
        }

        changePage(newPage)
    }

    const nextPage = () => {
        let newPage = page + 1;
        if (newPage > numOfPages) {
            newPage = 1;
        }

        changePage(newPage)
    }

    const pages = Array.from({ length: numOfPages }, (_, index) => {
        return index + 1;
    })

    return <Wrapper>
        <button className='prev-btn' onClick={prevPage}>
            <HiChevronDoubleLeft />
            上一页
        </button>

        <div className='btn-container'>
            {
                pages.map(pageNumber => {
                    return <button
                        type='button'
                        className={pageNumber === page ? 'pageBtn active' : 'pageBtn'}
                        key={pageNumber}
                        onClick={() => changePage(pageNumber)}
                    >
                        {pageNumber}
                    </button>
                })
            }
        </div>

        <button className='next-btn' onClick={nextPage}>
            下一页
            <HiChevronDoubleRight />
        </button>
    </Wrapper>
}

export default PageBtnContainer