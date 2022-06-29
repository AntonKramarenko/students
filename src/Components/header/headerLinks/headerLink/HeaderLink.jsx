import { Link, NavLink } from 'react-router-dom'
import './HeaderLink.scss'

export const HeaderLink = ({name, to}) => {
  return (
    <li className="headerLink">
         <NavLink to={to}>{name}</NavLink>
    </li>   
  )
}
