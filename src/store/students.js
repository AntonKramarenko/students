import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	students: []
}

const studentsSlice = createSlice({
	name: 'students',
	initialState,
	reducers: {
		setStudents(state, action) {
			state.students = action.payload
		},
		sortStudentsById(state, action) {
			const arr = state.students.map(item => item)
			if (action.payload.value === 1) {
				return { students: arr.sort((a, b) => (a.id > b.id ? 1 : -1)) }
			}
			if (action.payload.value === -1) {
				return { students: arr.sort((a, b) => (a.id < b.id ? 1 : -1)) }
			}
		}
	}
})

export const { setStudents, sortStudentsById } = studentsSlice.actions
export default studentsSlice.reducer