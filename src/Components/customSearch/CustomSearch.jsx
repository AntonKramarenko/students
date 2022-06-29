import './CustomSearch.scss'
import {IoSearchOutline} from "react-icons/io5";

export const CustomSearch = ({search, setSearch}) => {

  return (
    <div className='customSearch'>
        <input 
            type='text' 
            placeholder='Enter Student Name, Parent or ID here' 
            className='customSearch__field'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            
        <IoSearchOutline />
    </div>
  )
}
