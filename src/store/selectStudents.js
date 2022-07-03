import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	selectStudents: []
}

const selectStudentsSlice = createSlice({
	name: 'selectStudents',
	initialState,
	reducers: {
		selectAllStudents(state, action) {
			state.selectStudents = action.payload
		},
		removeSelectAllStudents() {
			return initialState
		},
		selectStudent(state, action) {
			state.selectStudents.push(action.payload)
		},
		removeSelectStudent(state, action) {
			state.selectStudents = state.selectStudents.filter(student =>
				student.id !== action.payload.id
			)
		}
	}
})

export const { selectAllStudents, removeSelectAllStudents, selectStudent, removeSelectStudent } = selectStudentsSlice.actions
export default selectStudentsSlice.reducer