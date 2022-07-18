import { createAsyncThunk } from "@reduxjs/toolkit"
import planesService from '../services/planesService'

export const getPlanes = createAsyncThunk(
	'GET_PLANES',
	async (_, thunkApi) => {
		try {
			return await planesService.getPlanes();
		} catch (error) {
			return thunkApi.rejectWithValue(error.response.data)
		}
	}
)
