import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	archivedStudents: []
}

const archivedStudentsSlice = createSlice({
	name: 'archivedStudents',
	initialState,
	reducers: {
		addToArchive(state, action) {
			state.archivedStudents.push(...action.payload)
		}
	}
})

export const { addToArchive } = archivedStudentsSlice.actions
export default archivedStudentsSlice.reducer