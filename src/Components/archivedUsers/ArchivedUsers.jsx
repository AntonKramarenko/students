import { UserItem } from '../userItem/UserItem'
import './ArchivedUsers.scss'

export const ArchivedUsers = ({selectUsers}) => {
  return (
    <div className='archivedUsers'>
        <div className="archivedUsers__title">Archived</div>
        {selectUsers.map(user => <UserItem  key={user.id} info={user}/>)}
    </div>
  )
}
