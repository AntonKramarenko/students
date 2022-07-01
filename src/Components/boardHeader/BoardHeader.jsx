import { useEffect, useState } from "react";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { removeSelectAllStudents, selectAllStudents } from "../../store/selectStudents";
import './BoardHeader.scss'

const Arrovs = ({type}) =>{ 
  switch(type){
      case 'Name': return (
                      <div className="boardHeader__sortByName">
                          <IoChevronUpOutline/>
                          <span className=''>AZ</span>
                          <IoChevronDownOutline/>
                      </div>) 

      default :   return (
                      <div className="boardHeader__sortByArrov">
                          <IoChevronUpOutline/>
                          <IoChevronDownOutline/>
                      </div>) 
  }
  }

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
          <div className='boardHeader__value1 boardHeader__item-flex'>
              <div className="boardItem__value-title">{name}</div>
              <Arrovs type='Name'/>
          </div>
          <div className='boardHeader__value2 boardHeader__item-flex'>
              <div className="boardItem__value-title">{id}</div>
              <Arrovs />
          </div>
          <div className='boardHeader__value3 boardHeader__item-flex'>
              <div className="boardItem__value-title">{className}</div>
          </div>
          <div className='boardHeader__value4 boardHeader__item-flex'>
              <div className="boardItem__value-title">{score}</div>
              <Arrovs/>
          </div>
          <div className='boardHeader__value5 boardHeader__item-flex'>
              <div className="boardItem__value-title">{speed}</div>
              <Arrovs/>
          </div>
          <div className='boardHeader__value6 boardHeader__item-flex'>
              <div className="boardHeader__value-title">{parents}</div>
          </div>
          {selectUsers.length ? <div className='boardHeader__actions boardHeader__item-flex'>Actions</div> : null}
      </div>
    )
}