import React from "react";
import './SubHeader.scss'

import ClearButton from "../clearButton/ClearButton";
import SelectButton from "../selectButton/SelectButton";

function SubHeader() {
    return (
        <section className="subHeader">
            <SelectButton />
            <SelectButton />
            <SelectButton />
            <SelectButton />
            <SelectButton />
            <SelectButton />
            <ClearButton />
        </section>
    )



}


export default SubHeader