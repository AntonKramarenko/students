import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalCount: 0,
    totalPages: 0
}

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setTotalCount(state, action) {
            state.totalCount = action.payload
        },
        setTotalPages(state, action) {
            state.totalPages = action.payload
        }
    }
})

export const { setTotalCount, setTotalPages } = paginationSlice.actions
export default paginationSlice.reducer