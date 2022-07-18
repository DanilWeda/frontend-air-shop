import { createAsyncThunk } from "@reduxjs/toolkit"
import planesService from '../services/planesService'


export const getPlaneById = createAsyncThunk(
	'GET_PLANE_BY_ID',
	async (id, thunkApi) => {
		try {
			return await planesService.getPlane(id);
		} catch (error) {
			return thunkApi.rejectWithValue(error.response.data)
		}
	}
)

export const createPlane = createAsyncThunk(
	'CREATE_PLANE',
	async (planeData, thunkApi) => {
		try {
			return await planesService.createPlane(planeData);
		} catch (error) {
			return thunkApi.rejectWithValue(error.response.data)
		}
	}
)