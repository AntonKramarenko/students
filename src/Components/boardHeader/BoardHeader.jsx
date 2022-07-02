import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeSelectAllStudents, selectAllStudents } from "../../store/selectStudents";
import { deleteSortStudents, setSortStudents } from "../../store/sortStudents";
import {setCurrentPage} from "../../store/paginations";
import { sortStudentsById } from "../../store/students";
import { Arrovs } from "../arrovs/Arrovs";
import './BoardHeader.scss'

export const BoardHeader = ({boardTitles}) => {
  const {name, id, className, score, speed,parents } = boardTitles
  const users = useSelector(state => state.students.students) 
  const selectUsers = useSelector(state => state.selectStudents.selectStudents)
  const dispatch = useDispatch()
  const [isActiveCheckbox, setIsActiveCheckbox ] = useState(false)

 useEffect(()=> {
    if(isActiveCheckbox){
        dispatch(selectAllStudents(users))
    } else {
        dispatch(removeSelectAllStudents())
    }
 },[isActiveCheckbox])

 useEffect(() => {
    if(selectUsers.length === users.length){
        setIsActiveCheckbox(true)
    } else {
        setIsActiveCheckbox(false)
    }
 },[selectUsers])

 const sortHandler =(sortBy, sortDir)=>{
    dispatch(setSortStudents({sortBy,sortDir}))
 }

 

 const sortStudentsByidHandler =(id,value)=>{
    dispatch(setCurrentPage(1))
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
              <div className="boardItem__value-title">{name}</div>
              <Arrovs type='Name' id='name' clickHandler={sortHandler}/>
          </div>
          <div className='boardHeader__item-flex'>
              <div className="boardItem__value-title">{id}</div>
              <Arrovs type='Sort' id='id' clickHandler={sortStudentsByidHandler}/>
          </div>
          <div className='boardHeader__item-flex'>
              <div className="boardItem__value-title">{className}</div>
              <Arrovs type='Sort' id='class' clickHandler={sortHandler}/>
          </div>
          <div className='boardHeader__item-flex'>
              <div className="boardItem__value-title">{score}</div>
              <Arrovs type='Sort' id='score' clickHandler={sortHandler}/>
          </div>
          <div className='boardHeader__item-flex'>
              <div className="boardItem__value-title">{speed}</div>
              <Arrovs type='Sort' id='speed' clickHandler={sortHandler}/>
          </div>
          <div className='boardHeader__item-flex'>
              <div className="boardHeader__value-title">{parents}</div>
          </div>
          {selectUsers.length ? <div className='boardHeader__actions boardHeader__item-flex'>Actions</div> : null}
      </div>
    )
}