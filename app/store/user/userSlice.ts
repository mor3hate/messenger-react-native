import { IInitialState } from './user.interface'
import { createSlice } from '@reduxjs/toolkit'
import { login, logOut, register } from './user.actions'

const initialState: IInitialState = {
	isLoading: false,
	user: null
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(register.pending, state => {
				state.isLoading = true
			})
			.addCase(register.fulfilled, (state, { payload: { email, uid } }) => {
				state.isLoading = false
				state.user = { email, uid }
			})
			.addCase(register.rejected, state => {
				state.isLoading = false
				state.user = null
			})
			.addCase(login.pending, state => {
				state.isLoading = true
			})
			.addCase(login.fulfilled, (state, { payload: { email, uid } }) => {
				state.isLoading = false
				state.user = { email, uid }
			})
			.addCase(login.rejected, state => {
				state.isLoading = false
				state.user = null
			})
			.addCase(logOut.fulfilled, state => {
				state.isLoading = false
				state.user = null
			})
	}
})

export default userSlice.reducer
