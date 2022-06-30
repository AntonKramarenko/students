import './UserItem.scss'
import { IoCaretDownOutline, IoCaretUpOutline,IoInformationCircleOutline } from "react-icons/io5";
import { useState } from 'react';
import { UserDetailsInfo } from '../userDetailsInfo/UserDetailsInfo';
import { addColorScore, addColorSpeed } from './addColorsValue';

export const UserItem = ({info}) => {
    const [isInfoOpen,setIsInfoOpen] = useState(false)
    const {name, id, score, speed,parents, tests} = info
    
  return (
    <>
    <div className='userItem'>
          <div className='userItem__checkBox'>
              <input type='checkbox' id='selectOlluser'  defaultChecked={false}/>
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
          <div className='userItem__Info' onClick={() =>setIsInfoOpen(!isInfoOpen)}>
              {isInfoOpen? <IoCaretUpOutline/>: <IoCaretDownOutline/>}
          </div>
    </div>
    {isInfoOpen 
        ? <UserDetailsInfo name={name} id={id} tests={tests} score={score} speed={speed}/>
        : null}
    </>
  )
}
