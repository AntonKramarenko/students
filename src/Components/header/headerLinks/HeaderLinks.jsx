import './HeaderLinks.scss'
import { HeaderLink } from './headerLink/HeaderLink'

export const HeaderLinks = () => {
    const links = [
        {name: 'Analytics', to: '/analytics'},
        {name: 'Gradebooks', to: '/gradebooks'},
        {name: 'Tests', to: '/tests'},
        {name: 'Students', to: '/students'},
        {name: 'Teachers', to: '/teachers'},
        {name: 'Archive', to: '/archive'}
    ]
  return (
    <nav className="headerLinks">
        <ul className="headerLinks__list">
            {links.map(link => <HeaderLink key={link.name} name={link.name} to={link.to}/>)}
        </ul>
    </nav>
  )
}
