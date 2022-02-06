import React from "react";
import './Filter.scss'
import ExportCSV from "../exportCSV/ExportCSV";
import Search from "../search/Search";


function Filter() {
    return (
        <section className="filter" >
            <div className="filter-brand">Students</div>
            <Search />
            <ExportCSV />
        </section>
    )
}

export default Filter