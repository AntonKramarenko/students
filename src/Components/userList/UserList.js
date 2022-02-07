import React, { useEffect, useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import UserItem from "../userItem/UserItem";
import './UserList.scss'

function UserList() {

    const userData = {
        totalPages: 1,
        data: [
            {
                name: 'UserNAme',
                id: 1234567,
                class: 'C',
                score: '%',
                speed: 'Below Expected',
                parents: ['parents1', 'parents2'],
            }
        ]
    }

    const url = 'https://test-task-j.herokuapp.com/data?page=1&size=4'
    const [users, setUsers] = useState(userData)

    useEffect(() => {
        fetch(url).then(res => res.json().then(data => setUsers(data)))
    }, [])

    return (
        <Fragment >
            <div className="userItem" >
                <input type="checkbox" className="userItem-checkbox" />
                <table>
                    <tbody>
                        <tr>
                            <td className="userItem-name">Name</td>
                            <td className="userItem-id">ID</td>
                            <td className="userItem-сlass">Class</td>
                            <td className="userItem-score">Score</td>
                            <td className="userItem-speed">Speed</td>
                            <td className="userItem-parents">Parents</td>
                        </tr>
                    </tbody>
                </table>
            </div >
            <div>
                {
                    users.data.map(user => {
                        return (
                            <UserItem user={user} key={user.id} />
                        )
                    })
                }
            </div>

        </Fragment >
    )
}

export default UserList