import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	totalCount: 0,
	totalPages: 0,
	userOnPage: 10,
	currentPage: 1
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
		},
		setCurrentPage(state, action) {
			state.currentPage = action.payload
		},
		setUserOnPage(state, action) {
			state.userOnPage = action.payload
		}
	}
})

export const { setTotalCount, setTotalPages, setCurrentPage, setUserOnPage } = paginationSlice.actions
export default paginationSlice.reducer