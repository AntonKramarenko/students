import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import UserInfo from "../userInfo/UserInfo";

function UserItem(props) {

    const [isOpen, setIsOpen] = useState(false)

    const clickHandler = () => {
        setIsOpen(!isOpen)
    }

    return (
        <Fragment>
            <div className="userItem" onClick={clickHandler}>
                <input type="checkbox" id={props.user.id} name={props.user.name} className="userItem-checkbox" />
                <table>
                    <tbody>
                        <tr>
                            <td className="userItem-name">{props.user.name}</td>
                            <td className="userItem-id">{props.user.id}</td>
                            <td className="userItem-сlass">{props.user.class}</td>
                            <td className="userItem-score">{props.user.score}</td>
                            <td className="userItem-speed">{props.user.speed}</td>
                            <td className="userItem-parents">{props.user.parents}</td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={clickHandler}>+</button>
            </div>
            {
                isOpen
                    ? <UserInfo user={props.user} />
                    : null
            }
        </Fragment>


    )
}

export default UserItem