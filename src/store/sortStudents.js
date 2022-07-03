import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	boardSort: {
		sortBy: '',
		sortDir: ''
	}
}

const sortStudentsSlice = createSlice({
	name: 'sortStudentsSlice',
	initialState,
	reducers: {
		setSortStudents(state, action) {
			state.boardSort = action.payload
		},
		deleteSortStudents(state) {
			return initialState
		}
	}
})

export const { setSortStudents, deleteSortStudents } = sortStudentsSlice.actions

export default sortStudentsSlice.reducer
