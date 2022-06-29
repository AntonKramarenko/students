import { ClearButton } from '../clearButton/ClearButton'
import { CustomSelect } from '../customSelect/CustomSelect'
import './SubHeader.scss'

export const SubHeader = () => {

  const selected =[
    {name:"show all", options: ['option1','option2','option3']},
    {name:"All grades",options: ['option1','option2','option3']},
    {name:"All classes",options: ['option1','option2','option3'] },
    {name:"Av.Score",options: ['option1','option2','option3']},
    {name:"Av.Speed",options: ['option1','option2','option3']},
    {name:"All Classes",options: ['option1','option2','option3'] },
  ]

  return (
    <div className='subHeader'>
      <div className='subHeader__list'>
        {selected.map((select) => <CustomSelect key={`${select.name}`} name={select.name} options={select.options}/> )}
        <ClearButton name={'clear all'}/>
      </div>
    </div>
  )
}

{/* //<CustomSelect key={`${select.name}`}  options={select.options}/> */}