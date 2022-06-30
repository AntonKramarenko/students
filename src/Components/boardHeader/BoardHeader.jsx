import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
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

    return (
      <div className='boardHeader'>
          <div className='boardHeader__checkBox'>
              <input type='checkbox' id='selectOlluser'  defaultChecked={false}/>
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
      </div>
    )
}
