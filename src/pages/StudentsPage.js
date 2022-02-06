import React from "react";
import Filter from "../Components/filter/Filter";
import SubHeader from "../Components/subHeader/SubHeader";
import UserList from "../Components/userList/UserList";

function StudentsPage() {
    return (
        <section className="studentsPage">
            <SubHeader />
            <Filter />
            <UserList />
        </section >



    )
}

export default StudentsPage