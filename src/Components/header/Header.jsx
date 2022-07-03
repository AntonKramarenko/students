import { CustomSelect } from '../customSelect/CustomSelect'
import { UserImg } from '../userImg/UserImg'
import './Header.scss'
import { HeaderLinks } from './headerLinks/HeaderLinks'

export const Header = () => {
  const schools =[{name: 'school 1', options: ['school 1', 'school 2', 'school 3']}]
  return (
    <header className='header'>
        {schools.map(sch => <CustomSelect key={sch.name} name={sch.name} options={sch.options}/>)}
        <HeaderLinks />
        <UserImg/>
    </header>
  )
}
