import './CustomSelect.scss'
import {IoCaretDownOutline, IoCaretUpOutline  } from "react-icons/io5";
import { useState } from 'react';

export const CustomSelect = ({name,...options}) => {

    const [isActive,setIsActive] = useState(false)
    const [selectName, setSelectName] = useState(name)
    const [currentOptions, setCurrentOptions] = useState(options.options)

  return (
  <>
     <div className='customSelect' onClick={() =>setIsActive(!isActive)}>
        <div className='customSelect__title'>
           {selectName ? selectName : currentOptions[0] } 
           {isActive ? <IoCaretUpOutline/> :  <IoCaretDownOutline/>}
        </div>
        <div
            className={isActive 
                ? 'customSelect__body active-select' 
                : 'customSelect__body'}
        >
            {currentOptions.map(opt => <div key={`${opt}`} className='customSelect__body-item' onClick={() => setSelectName(`${opt}`)}>{opt}</div>  )}
        </div>

     </div> 
  </>
 
  )
}

{/* <div key={opt.options} className='customSelect__body-item' onClick={() => setSelectName(`${opt.options}`)}>{opt.options}</div>  */}
