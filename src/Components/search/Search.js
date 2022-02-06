import React from "react";
import './Search.scss'

function Search() {
    return (
        <div className="search ">
            <input placeholder="Enter Student Name, Parent or ID here" className="search-input" />
            <button className="search-button">Search</button>
        </div>
    )
}

export default Search