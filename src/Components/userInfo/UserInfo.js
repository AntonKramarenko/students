import React from "react";
import './UserInfo.scss'
import SelectButton from "../selectButton/SelectButton";
import UserTests from "../userTests/UserTests";

function UserInfo(props) {

    return (
        <div className="userInfo">
            <table>
                <tbody>
                    <tr className="userInfo-user">
                        <td className="userInfo-name">Student: {props.user.name}</td>
                        <td className="userInfo-id">id:  {props.user.id}</td>
                    </tr>
                    <tr className="userInfo-selectButtons">
                        <td className="userInfo-select"> <SelectButton /></td>
                        <td className="userInfo-select"> <SelectButton /></td>
                        <td className="userInfo-select"> <SelectButton /></td>
                    </tr>
                </tbody>
            </table>
            <div className="userInfo-redLine"></div>
            <table>
                <tbody>
                    <tr>
                        <td className="userInfo-score">Score :
                        </td>
                        <td className="userInfo-score blue">
                            90%+ accuracy
                        </td>
                        <td className="userInfo-score green">
                            80 - 89% accuracy
                        </td>
                        <td className="userInfo-score yelov">
                            50 - 79% accuracy
                        </td>
                        <td className="userInfo-score red">
                            below 50% accuracy
                        </td>
                    </tr>
                    <tr>
                        <td className="userInfo-speed">
                            Speed :
                        </td>
                        <td className="userInfo-speed blue">
                            <span className="point"></span> above expected
                        </td>
                        <td className="userInfo-speed green">
                            as expected
                        </td>
                        <td className="userInfo-speed red">
                            below expected
                        </td>
                    </tr>

                </tbody>
            </table>
            <UserTests tests={props.user.tests} />
        </div >
    )
}

export default UserInfo