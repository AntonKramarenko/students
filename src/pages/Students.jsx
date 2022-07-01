import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CustomLoader } from "../components/loader/CustomLoader"
import { PageBoard } from "../components/pageBoard/PageBoard"
import { PageHeader } from "../components/pageHeader/PageHeader"
import { Pagination } from "../components/pagination/Pagination"
import { GET_USERS } from "../config"
import { setTotalCount, setTotalPages } from "../store/paginations"
import { setStudents } from "../store/students"

export const Students = () => {
  const userOnPage = useSelector(state => state.pagination.userOnPage)
  const currentPage = useSelector(state => state.pagination.currentPage)
  const searchValue = useSelector(state => state.searchValue.value)
  const [isLoading,setIsLoading] = useState(true)
  const dispatch = useDispatch()

 console.log(searchValue)


  useEffect(()=> {
    fetch(GET_USERS(currentPage,userOnPage,searchValue)).then(res => res.json().then(data => {
      dispatch(setTotalCount(data.totalCount))
      dispatch(setTotalPages(data.totalPages))
      dispatch(setStudents(data.data))
      setIsLoading(false)
    })).catch(e => console.log('STUDENTS', e))
  }, [currentPage, userOnPage,searchValue])

  return (
    <>
        <PageHeader pageName='Students'/>
        {!isLoading 
           ?<PageBoard />  
           : <CustomLoader/>
        }
        <Pagination/>
    </>
  )
}
