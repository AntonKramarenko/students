import './CustomSearch.scss'
import {IoSearchOutline} from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../store/searchValue';

export const CustomSearch = ({placeholder}) => {
  const value = useSelector(state => state.searchValue.value)
  const dispatch = useDispatch()

  return (
    <div className='customSearch'>
        <input 
            type='text' 
            placeholder={placeholder}
            className='customSearch__field'
            value={value}
            onChange={(e) => dispatch(setSearchValue(e.target.value))}
            />
        <IoSearchOutline />
    </div>
  )
}
