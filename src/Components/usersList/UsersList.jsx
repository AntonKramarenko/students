import { useSelector } from 'react-redux'
import { ArchivedUsers } from '../archivedUsers/ArchivedUsers'
import { UserItem } from '../userItem/UserItem'
import './UsersList.scss'

export const UsersList = () => {
  const users = useSelector(state => state.students.students)
  const archivedStudents = useSelector(state => state.archivedStudents.archivedStudents)

  return (
    <div className='usersList'>
        {
          users.map(user =>  <UserItem key={user.id} info={user}/>)
        }
        {archivedStudents.length > 0 
          ? <ArchivedUsers selectUsers={archivedStudents}/> 
          :null
        }
    </div>
  )
}
