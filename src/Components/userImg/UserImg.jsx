import './UserImg.scss'
import img from '../../assets/userImage/userImage.png'
import { IoCaretDownOutline } from "react-icons/io5";

export const UserImg = () => {
  return (
    <div className='userImg'>
        <div className="userImg__img">
            <img src={img} alt="User image" />
        </div>
        <IoCaretDownOutline/>
    </div>
  )
}
