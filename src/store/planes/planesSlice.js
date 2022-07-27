import { createSlice } from "@reduxjs/toolkit";
import { getPlanes } from "./action";

const initialState = {
	search: '',
	planes: null,
	isError: false,
	isLoading: false,
	message: ''
}

const planeSlice = createSlice({
	name: 'planes',
	initialState,
	reducers: {
		setSortPlanes: (state, action) => {
			state.planes = action.payload
		},
		searchPlanes: (state, action) => {
			state.search = action.payload
		},
	},
	extraReducers: {
		[getPlanes.pending]: (state) => {
			state.isLoading = true;
		},
		[getPlanes.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.planes = action.payload;
		},
		[getPlanes.rejected]: (state, action) => {
			state.isLoading = false;
			state.isError = true;
			state.message = action.payload?.message;
			state.planes = null;
		},
	}
})

export const { setSortPlanes, searchPlanes } = planeSlice.actions
export default planeSlice.reducer