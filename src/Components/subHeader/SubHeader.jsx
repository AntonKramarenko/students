import { ClearButton } from '../clearButton/ClearButton'
import { CustomSelect } from '../customSelect/CustomSelect'
import {ExportSCV} from '../exportCSV/ExportSCV'
import {IoClose,IoArchiveSharp} from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import './SubHeader.scss'
import { removeSelectAllStudents } from '../../store/selectStudents';
import { addToArchive } from '../../store/archivedStudents';



export const SubHeader = () => {
  const selected =[
    {name:"show all", options: ['option1','option2','option3']},
    {name:"All grades",options: ['option1','option2','option3']},
    {name:"All classes",options: ['option1','option2','option3'] },
    {name:"Av.Score",options: ['option1','option2','option3']},
    {name:"Av.Speed",options: ['option1','option2','option3']},
    {name:"All Classes",options: ['option1','option2','option3'] },
  ]
  const headers =[
    { label: "Name", key: "name" },
    { label: "ID", key: "id" },
    { label: "Class", key: "class" },
    { label: "Av. Score, %", key: "score" },
    { label: "Av. Speed", key: "speed" },
    { label: "Parents", key: "parents" }
  ]
  const selectUsers = useSelector(state => state.selectStudents.selectStudents)
  const dispatch = useDispatch()


  const addToArchiveHandler =()=>{
    dispatch(addToArchive(selectUsers)) 
    dispatch(removeSelectAllStudents()) 
  }


  return (
    <>
    <div className='subHeader'>
      <div className='subHeader__list'>
        {selected.map((select) => <CustomSelect key={`${select.name}`} name={select.name} options={select.options}/> )}
        <ClearButton name={'clear all'}/>
      </div>

      {selectUsers.length ? 
      <div className="subHeader__body ">
          <div className="subHeader__body-title">{selectUsers.length} Student Selected</div>
          <div className="subHeader__body-btns">
            <div className="subHeader__body-cancel" onClick={() => dispatch(removeSelectAllStudents())}><IoClose/> cancel selection</div>
            <ExportSCV info={selectUsers} headers={headers} nameExport='SelectUsers'/>
            <div className="subHeader__body-archive" onClick={() => addToArchiveHandler()}> <IoArchiveSharp /> archive selected</div>
          </div>
      </div>
      : null
      }
    </div>
    </>
  )
}

{/* //<CustomSelect key={`${select.name}`}  options={select.options}/> */}