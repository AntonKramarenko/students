import './CustomSelect.scss'
import {IoCaretDownOutline, IoCaretUpOutline  } from "react-icons/io5";
import { useState } from 'react';

export const CustomSelect = ({ selectHandler,name,...options}) => {
   const [isActive,setIsActive] = useState(false)
   const [selectName, setSelectName] = useState(name)

   const setSelectHandler =(value)=> {
      setSelectName(value)
      if(selectHandler){
         selectHandler(value)
      }
   }

  return (
  <>
     <div className='customSelect' onClick={() =>setIsActive(!isActive)}>
        <div className='customSelect__title'>
           {selectName ? selectName : options.options[0] } 
           {isActive ? <IoCaretUpOutline/> :  <IoCaretDownOutline/>}
        </div>
        <div
            className={isActive 
                ? 'customSelect__body active-select' 
                : 'customSelect__body'}
        >
            {options.options.map(opt => <div key={`${opt}`} className='customSelect__body-item' onClick={() => setSelectHandler(`${opt}`)}>{opt}</div>  )}
        </div>

     </div> 
  </>
 
  )
}
