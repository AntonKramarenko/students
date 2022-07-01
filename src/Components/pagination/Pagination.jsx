import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage, setUserOnPage } from "../../store/paginations";
import { CustomSelect } from '../customSelect/CustomSelect'
import './Pagination.scss'

export const Pagination = () => {
  const totalStudents = useSelector(state => state.pagination.totalCount)
  const totalPages = useSelector(state => state.pagination.totalPages)
  const currentPage = useSelector(state => state.pagination.currentPage)
  const userOnPage = useSelector(state => state.pagination.userOnPage)
  const dispatch = useDispatch()

  const setCurrentPageHandler = (value) => {
    if(value > 0 && currentPage < totalPages){dispatch(setCurrentPage(currentPage+1))}
    if(value < 0 && currentPage > 1 ){dispatch(setCurrentPage(currentPage-1))} 
  }

  const setUserOnDoardHandler = (value) => {
    dispatch(setCurrentPage(1))
    dispatch(setUserOnPage(+value))
  }

  const userOfUsers = () => {
    switch(userOnPage){
      case 20: return `${(currentPage*userOnPage)-19}-${currentPage*userOnPage}`;
      case 10: return `${(currentPage*userOnPage)-9}-${currentPage*userOnPage}`;
    }
  }
  
  return (
    <div className='pagination'>
        <div className="pagination__rows">
            <span className='pagination__rows-title'>Rows per page:</span>
            <CustomSelect options={['10','20']}  selectHandler={setUserOnDoardHandler} />
        </div>
        <div className="pagination__users">
            {userOfUsers()} of {totalStudents}
        </div>
        <div className="pagination__arrov">
            <IoChevronBackOutline onClick={() => setCurrentPageHandler(-1)}/>
            <IoChevronForwardOutline onClick={() => setCurrentPageHandler(1)} />
        </div>
    </div>
  )
}
