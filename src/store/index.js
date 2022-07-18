import { configureStore } from '@reduxjs/toolkit'
import planesReducer from './planes/planesSlice'
import planeReducer from './plane/planeSlice'


export const store = configureStore({
	reducer: {
		planes: planesReducer,
		plane: planeReducer,
	}
})