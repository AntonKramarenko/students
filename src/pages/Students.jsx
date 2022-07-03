import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CustomLoader } from '../components/loader/CustomLoader'
import { PageBoard } from '../components/pageBoard/PageBoard'
import { PageHeader } from '../components/pageHeader/PageHeader'
import { Pagination } from '../components/pagination/Pagination'
import { GET_STUDENTS_INFO_URL } from '../constants/routes'
import { setTotalCount, setTotalPages } from '../store/paginations'
import { setStudents } from '../store/students'

export const Students = () => {
	const userOnPage = useSelector(state => state.pagination.userOnPage)
	const currentPage = useSelector(state => state.pagination.currentPage)
	const searchValue = useSelector(state => state.searchValue.value)
	const sortBy = useSelector(state => state.sortStudents.boardSort.sortBy)
	const sortDir = useSelector(state => state.sortStudents.boardSort.sortDir)
	const [ isLoading,setIsLoading ] = useState(true)
	const dispatch = useDispatch()

	useEffect(()=> {
		fetch(GET_STUDENTS_INFO_URL(currentPage,userOnPage,searchValue,sortBy,sortDir)).then(res => res.json().then(data => {
			dispatch(setTotalCount(data.totalCount))
			dispatch(setTotalPages(data.totalPages))
			dispatch(setStudents(data.data))
			setIsLoading(false)
		})).catch(e => {throw new Error('GET_STUDENTS_INFO_URL ERROR')})
		// eslint-disable-next-line
  }, [currentPage, userOnPage,searchValue,sortBy,sortDir])

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
