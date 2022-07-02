import { configureStore } from "@reduxjs/toolkit";
import valueReducer from './searchValue'
import paginationReducer from './paginations.js'
import studentsReducer from './students'
import selectStudentsReducer from './selectStudents'
import sortStudents from "./sortStudents";
import archivedStudents from "./archivedStudents";


export default configureStore({
    reducer: {
        searchValue: valueReducer,
        pagination: paginationReducer,
        students: studentsReducer,
        selectStudents: selectStudentsReducer,
        sortStudents: sortStudents,
        archivedStudents: archivedStudents
    }
})