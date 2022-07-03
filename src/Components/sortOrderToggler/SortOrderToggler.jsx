import './SortOrderToggler.scss'
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

export const SortOrderToggler = ({type, id, onSortChange }) =>{ 
   const handleArrowClick =(value) => {
    if(onSortChange)onSortChange(id, value)
   }

   if(type === 'Name'){
        return (
            <div className="clickSortOrderToggler__sortByName">
                <IoChevronUpOutline onClick={() => handleArrowClick(1)}/>
                <span>AZ</span>
                <IoChevronDownOutline onClick={() => handleArrowClick(-1)}/>
            </div>) 
   }

   if(type === 'Sort'){
        return (
            <div className="clickSortOrderToggler__sortByArrow">
                <IoChevronUpOutline onClick={() => handleArrowClick(1)}/>
                <IoChevronDownOutline onClick={() => handleArrowClick(-1)}/>
            </div>) 
   }

   return null
}
