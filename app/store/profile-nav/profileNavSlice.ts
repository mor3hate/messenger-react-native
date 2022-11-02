import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: { index: number } = {
	index: 1
}

export const profileNavSlice = createSlice({
	name: 'profileNav',
	initialState,
	reducers: {
		setIndex: (state, action: PayloadAction<number>) => {
			state.index = action.payload
		}
	}
})

export const { setIndex } = profileNavSlice.actions

export default profileNavSlice.reducer
