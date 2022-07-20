import axios from 'axios';



const axiosApi = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	timeout: 1000,
});

const getPlanes = async () => {
	const planes = await axiosApi.get(`/api/planes`)

	return planes.data
}

const getPlane = async (id) => {
	const plane = await axiosApi.get(`/api/planes/${id}`)

	return plane.data
}

const createPlane = async (planeData) => {
	const plane = await axiosApi.post(`/api/planes`, planeData)

	return plane.data
}

const planesService = {
	getPlanes,
	getPlane,
	createPlane,
}

export default planesService