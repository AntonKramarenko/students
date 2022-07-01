import { BoardHeader } from '../boardHeader/BoardHeader'
import { UsersList } from '../usersList/UsersList'

export const PageBoard = () => {

  const boardTitles = {
    name: 'Name',
    id: 'ID',
    className: 'Class',
    score: 'Av. Score, %',
    speed: 'Av. Speed',
    parents:'Parents'
  }

  return (
    <div className='pageBoard'>
        <BoardHeader boardTitles={boardTitles}/>
        <UsersList/>
    </div>
  )
}
