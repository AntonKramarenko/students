import './Arrovs.scss'
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

export const Arrovs = ({type, id, clickHandler }) =>{ 
    
   const clickArrov =(value) => {
    if(clickHandler){
        clickHandler(id, value)
    }
   }
    switch(type){
        case 'Name': return (
                        <div className="arrovs__sortByName">
                            <IoChevronUpOutline onClick={() => clickArrov(1)}/>
                            <span>AZ</span>
                            <IoChevronDownOutline onClick={() => clickArrov(-1)}/>
                        </div>) 

        case 'Sort' : return (
                        <div className="arrovs__sortByArrov">
                            <IoChevronUpOutline onClick={() => clickArrov(1)}/>
                            <IoChevronDownOutline onClick={() => clickArrov(-1)}/>
                        </div>) 
    }
    }
