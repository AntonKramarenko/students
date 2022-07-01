import './UserItem.scss'
import { IoCaretDownOutline, IoCaretUpOutline,IoInformationCircleOutline } from "react-icons/io5";
import { useEffect, useState } from 'react';
import { UserDetailsInfo } from '../userDetailsInfo/UserDetailsInfo';
import { addColorScore, addColorSpeed } from './addColorsValue';
import { useDispatch, useSelector } from 'react-redux';
import {  removeSelectStudent, selectStudent } from '../../store/selectStudents';
import { UserItemActions } from './userItemActions/UserItemActions';

export const UserItem = ({info}) => {

   const {name, id, score, speed,parents, tests} = info
   const [isInfoOpen,setIsInfoOpen] = useState(false)
   const [isChecked, setIsChacked] = useState(false)
   const selectUsers = useSelector(state => state.selectStudents.selectStudents)
   const users = useSelector(state => state.students.students) 

   const dispatch = useDispatch()

    useEffect(() => {
       if(selectUsers.length){selectUsers.forEach(user =>{if(user.id === id){setIsChacked(true)}})
       } else {setIsChacked(false)}
   },[selectUsers])

   const selectUserHandler = () =>{
    setIsChacked(!isChecked)

    if(!isChecked){ dispatch(selectStudent(info))
    } else {dispatch(removeSelectStudent(info))}
   }

return (
    <>
    <div className='userItem'>
          <div className='userItem__checkBox'>
              <input 
              type='checkbox' 
              id='selectOlluser'  
              checked={isChecked}
              onChange={() => selectUserHandler()}
              />
          </div>
          <div className='userItem__value1'>{name}</div>
          <div className='userItem__value2'>{id}</div>
          <div className='userItem__value3'>{info.class}</div>
          <div className='userItem__value4'>{addColorScore(score)}</div>
          <div className='userItem__value5'>{addColorSpeed(speed)}</div>
          <div className='userItem__value6'>
              <IoInformationCircleOutline/>
              {parents.map(par => <span key={par}>{par},</span>)}
          </div>
          <div className='userItem__Info' >
              {isChecked 
                    ? <UserItemActions/>
                    : null}
              {isInfoOpen
                ?<IoCaretUpOutline onClick={() =>setIsInfoOpen(!isInfoOpen)}/> 
                : <IoCaretDownOutline onClick={() =>setIsInfoOpen(!isInfoOpen)}/>
                }
              
          </div>
    </div>
    {isInfoOpen 
        ? <UserDetailsInfo name={name} id={id} tests={tests} score={score} speed={speed}/>
        : null}
    </>
  )
}
