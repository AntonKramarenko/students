import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeSelectAllStudents, selectAllStudents } from '../../store/selectStudents'
import { deleteSortStudents, setSortStudents } from '../../store/sortStudents'
import { sortStudentsById } from '../../store/students'
import { SortOrderToggler } from '../sortOrderToggler/SortOrderToggler'
import './BoardHeader.scss'

export const BoardHeader = ({boardTitles}) => {
	const {name, id, className, score, speed,parents } = boardTitles
	const users = useSelector(state => state.students.students) 
	const selectUsers = useSelector(state => state.selectStudents.selectStudents)
	const [ isActiveCheckbox, setIsActiveCheckbox ] = useState(false)
	const dispatch = useDispatch()
  
	useEffect(()=> {
		if(isActiveCheckbox){
			dispatch(selectAllStudents(users))
		} else {
			dispatch(removeSelectAllStudents())
		}
		// eslint-disable-next-line
 },[isActiveCheckbox])

	useEffect(() => {
		if(selectUsers.length === users.length){
			setIsActiveCheckbox(true)
		} else {
			setIsActiveCheckbox(false)
		}
		// eslint-disable-next-line
 },[selectUsers])

	const sortHandler =(sortBy, sortDir)=>{
		dispatch(setSortStudents({sortBy,sortDir}))
	}

	const sortStudentsByIdHandler =(id,value)=>{
		dispatch(deleteSortStudents())
		dispatch(sortStudentsById({id,value}))
	}

	return (
		<div className='boardHeader'>
			<div className='boardHeader__checkBox'>
				<input 
					type='checkbox' 
					id='selectOlluser' 
					checked={isActiveCheckbox}  
					onChange={() => setIsActiveCheckbox(!isActiveCheckbox)}
				/>
			</div>
			<div className='boardHeader__item-flex'>
				<div className='boardItem__value-title'>{name}</div>
				<SortOrderToggler type='Name' id='name' onSortChange={sortHandler}/>
			</div>
			<div className='boardHeader__item-flex'>
				<div className='boardItem__value-title'>{id}</div>
				<SortOrderToggler type='Sort' id='id' onSortChange={sortStudentsByIdHandler}/>
			</div>
			<div className='boardHeader__item-flex'>
				<div className='boardItem__value-title'>{className}</div>
				<SortOrderToggler type='Sort' id='class' onSortChange={sortHandler}/>
			</div>
			<div className='boardHeader__item-flex'>
				<div className='boardItem__value-title'>{score}</div>
				<SortOrderToggler type='Sort' id='score' onSortChange={sortHandler}/>
			</div>
			<div className='boardHeader__item-flex'>
				<div className='boardItem__value-title'>{speed}</div>
				<SortOrderToggler type='Sort' id='speed' onSortChange={sortHandler}/>
			</div>
			<div className='boardHeader__item-flex'>
				<div className='boardHeader__value-title'>{parents}</div>
			</div>
			{selectUsers.length ? <div className='boardHeader__actions boardHeader__item-flex'>Actions</div> : null}
		</div>
	)
}