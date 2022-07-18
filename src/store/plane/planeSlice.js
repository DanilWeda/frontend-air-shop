import { createSlice } from "@reduxjs/toolkit";
import { createPlane, getPlaneById } from "./action";

const initialState = {
	plane: {
		name: '',
		description: '',
		price: '',
		capacity: '',
		planeImage: '',
	},
	isLoading: false,
	isError: '',
	message: '',
	errors: null
}

const planesSlice = createSlice({
	name: 'plane',
	initialState,
	reducers: {
		resetPlaneErrors: (state) => {
			state.errors = null;
		}
	},
	extraReducers: {
		[getPlaneById.pending]: (state) => {
			state.isLoading = true;
		},
		[getPlaneById.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.plane = action.payload;
		},
		[getPlaneById.rejected]: (state, action) => {
			state.isLoading = false;
			state.isError = true;
			state.message = action.payload.message;
			state.plane = null;
		},
		[createPlane.pending]: (state) => {
			state.isLoading = true;
			state.errors = null;
		},
		[createPlane.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.errors = null;
		},
		[createPlane.rejected]: (state, action) => {
			state.isLoading = false;
			state.isError = true;
			state.errors = action.payload;
		},
	}
})

export const { resetPlaneErrors } = planesSlice.actions
export default planesSlice.reducer