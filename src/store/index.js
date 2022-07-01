import { configureStore } from "@reduxjs/toolkit";
import valueReducer from './searchValue'
import paginationReducer from './paginations.js'
import studentsReducer from './students'
import selectStudentsReducer from './selectStudents'


export default configureStore({
    reducer: {
        searchValue: valueReducer,
        pagination: paginationReducer,
        students: studentsReducer,
        selectStudents: selectStudentsReducer
    }
})