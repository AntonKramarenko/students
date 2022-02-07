import react from "react";
import './UserTests.scss'

function UserTests(props) {


    return (
        <table className="userTests">
            <tbody>
                <tr>
                    <td className="userItem-name">#</td>
                    <td className="userItem-name">Test Label</td>
                    <td className="userItem-name">Score</td>
                    <td className="userItem-name">Speed</td>
                    <td className="userItem-name">Total Q-ns</td>
                    <td className="userItem-name">Exp. Speed</td>
                    <td className="userItem-name">Concept</td>
                    <td className="userItem-name">Date</td>
                    <td className="userItem-name">Absent</td>
                </tr>
                {props.tests.map((test, index) => {

                    return (
                        <tr key={index} className="userTests-data">
                            <td className="userItem-name">{index + 1}.</td>
                            <td className="userItem-name">{test.label}</td>
                            <td className="userItem-name">{test.score}</td>
                            <td className="userItem-name">{test.speed}</td>
                            <td className="userItem-name">{test.total}</td>
                            <td className="userItem-name">{test.expSpeed}</td>
                            <td className="userItem-name">{test.concept}</td>
                            <td className="userItem-name">{test.date}</td>
                            <td className="userItem-name"> <input type="checkbox" className="userItem-checkbox" /></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>

    )
}

export default UserTests