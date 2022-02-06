import React from "react";
import { NavLink } from "react-router-dom";
import SelectButton from "../selectButton/SelectButton";
import './Header.scss'

function Header() {
    return (
        <header className="header">
            <SelectButton />
            <nav className="header-navigation">
                <ul className="header-navigation_list">
                    <li className="header-navigation_item">
                        <NavLink to={'/#'}> Analytics</NavLink>
                    </li>
                    <li className="header-navigation_item">
                        <NavLink to={'/#'}> gradebooks</NavLink>
                    </li>
                    <li className="header-navigation_item">
                        <NavLink to={'/#'}> Tests</NavLink>
                    </li>
                    <li className="header-navigation_item ">
                        <NavLink to={'/'} className='select'> Students</NavLink>
                    </li>
                    <li className="header-navigation_item">
                        <NavLink to={'/#'}> Teachers</NavLink>
                    </li>
                    <li className="header-navigation_item">
                        <NavLink to={'/#'}> archive</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="header-profile">
                img
            </div>
        </header>
    )
}

export default Header