import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { PageBoard } from "../components/pageBoard/PageBoard"
import { PageHeader } from "../components/pageHeader/PageHeader"
import { GET_USERS } from "../config"
import { setTotalCount, setTotalPages } from "../store/paginations"
import { setStudents } from "../store/students"

export const Students = () => {
  const [isLoading,setIsLoading] = useState(true)
  const dispatch = useDispatch()


  //chang
  useEffect(()=> {
    fetch(GET_USERS(1,10)).then(res => res.json().then(data => {
      dispatch(setTotalCount(data.totalCount))
      dispatch(setTotalPages(data.totalPages))
      dispatch(setStudents(data.data))
      setIsLoading(false)
    })).catch(e => console.log('STUDENTS', e))
  }, [])

    
  return (
    <>
        <PageHeader pageName='Students'/>
        {!isLoading 
           ?<PageBoard />  
           :<div>Загрузка</div> 
           }
    </>
  )
}
