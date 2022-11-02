import { configureStore } from '@reduxjs/toolkit'
import userSlice from './user/userSlice'
import profileNavSlice from './profile-nav/profileNavSlice'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import AsyncStorage from '@react-native-async-storage/async-storage'

const persistConfig = {
	key: 'root',
	storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, userSlice)

export const store = configureStore({
	reducer: {
		user: persistedReducer,
		profileNav: profileNavSlice
	},
	middleware: [thunk]
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
