import './CustomSearch.scss'
import {IoSearchOutline} from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../store/searchValue';
import { useState } from 'react';
import { setCurrentPage } from '../../store/paginations';


export const CustomSearch = ({placeholder}) => {
  const dispatch = useDispatch()
  const [searchTimeout, setSearchTimeout] = useState(false)
  const [searchName, setSearchName] = useState('')

  const searchValue =(inputValue)=> {
    setSearchName(inputValue)

    if(searchTimeout !== false){
      clearTimeout(searchTimeout)
    }

    if(inputValue !== '') 
    {setSearchTimeout(setTimeout((value) => {  
      dispatch(setCurrentPage(1))
      dispatch(setSearchValue(value))
    },700, inputValue))
    } else {
      dispatch(setSearchValue(''))
    }
  }

  return (
    <div className='customSearch'>
        <input 
            type='text' 
            placeholder={placeholder}
            className='customSearch__field'
            value={searchName}
            onChange={(e) => searchValue(e.target.value)}
            />
        <IoSearchOutline />
    </div>
  )
}