import { useSelector } from 'react-redux'
import { UserItem } from '../userItem/UserItem'
import './UsersList.scss'

export const UsersList = () => {
  const users = useSelector(state => state.students.students)

  return (
    <div className='usersList'>
        {
          users.map(user => <UserItem key={user.id} info={user}/> )
        }
    </div>
  )
}
