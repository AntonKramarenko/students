import React, { useEffect, useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import UserItem from "../userItem/UserItem";
import './UserList.scss'

function UserList() {

    const userData = {
        totalPages: 1,
        data: [
            {
                name: 'Nicole Kidmann',
                id: 123456,
                class: '1C',
                score: '76%',
                speed: 'Below Expected',
                parents: ['Antony Kidmann', 'Janelle Kidmann'],
                tests: [
                    {
                        label: 'Average 1-100',
                        score: 95,
                        speed: '1h 12m 00s',
                        total: 100,
                        expSpeed: "1h 00m 00s",
                        concept: 'Multiplication',
                        date: 'APR 30 2021',
                        abcent: false
                    },
                    {
                        label: 'Average 1-10',
                        score: null,
                        speed: null,
                        total: 10,
                        expSpeed: "0h 30m 00s",
                        concept: 'Multiplication',
                        date: 'APR 30 2021',
                        absent: true
                    },
                    {
                        label: 'Average 1-100',
                        score: 95,
                        speed: '1h 12m 00s',
                        total: 100,
                        expSpeed: "1h 00m 00s",
                        concept: 'Multiplication',
                        date: 'APR 30 2021',
                        abcent: false
                    },
                    {
                        label: 'Average 1-10',
                        score: null,
                        speed: null,
                        total: 10,
                        expSpeed: "0h 30m 00s",
                        concept: 'Multiplication',
                        date: 'APR 30 2021',
                        absent: true
                    },
                    {
                        label: 'Average 1-100',
                        score: 95,
                        speed: '1h 12m 00s',
                        total: 100,
                        expSpeed: "1h 00m 00s",
                        concept: 'Multiplication',
                        date: 'APR 30 2021',
                        abcent: false
                    },
                    {
                        label: 'Average 1-10',
                        score: null,
                        speed: null,
                        total: 10,
                        expSpeed: "0h 30m 00s",
                        concept: 'Multiplication',
                        date: 'APR 30 2021',
                        absent: true
                    }
                ]
            },
            {
                name: 'Nicole Kidmann2',
                id: 213456,
                class: '1C',
                score: '76%',
                speed: 'Below Expected',
                parents: ['Antony Kidmann', 'Janelle Kidmann'],
                tests: [
                    {
                        label: 'Average 1-100',
                        score: 95,
                        speed: '1h 12m 00s',
                        total: 100,
                        expSpeed: "1h 00m 00s",
                        concept: 'Multiplication',
                        date: 'APR 30 2021',
                        abcent: false
                    },
                    {
                        label: 'Average 1-10',
                        score: null,
                        speed: null,
                        total: 10,
                        expSpeed: "0h 30m 00s",
                        concept: 'Multiplication',
                        date: 'APR 30 2021',
                        absent: true
                    }
                ]
            },
            {
                name: 'Nicole Kidmann3',
                id: 312456,
                class: '1C',
                score: '76%',
                speed: 'Below Expected',
                parents: ['Antony Kidmann', 'Janelle Kidmann'],
                tests: [
                    {
                        label: 'Average 1-100',
                        score: 95,
                        speed: '1h 12m 00s',
                        total: 100,
                        expSpeed: "1h 00m 00s",
                        concept: 'Multiplication',
                        date: 'APR 30 2021',
                        abcent: false
                    },
                    {
                        label: 'Average 1-10',
                        score: null,
                        speed: null,
                        total: 10,
                        expSpeed: "0h 30m 00s",
                        concept: 'Multiplication',
                        date: 'APR 30 2021',
                        absent: true
                    }
                ]
            }
        ]
    }
    // const url = 'https://test-task-j.herokuapp.com/data?page=1&size=4'
    // const [users, setUsers] = useState([])

    // useEffect(() => {
    //     fetch(url).then(res => res.json().then(data => setUsers(data)))
    // }, [])

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
                    userData.map(user => {
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