import './UserItemActions.scss'
import { GoPencil } from "react-icons/go";
import { BiTrendingUp } from "react-icons/bi";

export const UserItemActions = () => {
  return (
    <div className='userItemActions'>
        <div className="userItemActions__action userItemActions__action-edit">
            <GoPencil/>
        </div>
        <div className="userItemActions__action userItemActions__action-trending">
            <BiTrendingUp/>
        </div>
    </div>
  )
}
