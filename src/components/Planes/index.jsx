import ContentWrapper from '../ContentWrapper'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getPlanes } from '../../store/planes/action'
import CircularProgress from '@mui/material/CircularProgress';
import PlaneItem from '../PlaneItem'

const Planes = () => {
	const dispatch = useDispatch()
	const { planes, isLoading, isError, message, search } = useSelector((state) => state.planes)

	const [serchedPlanes, setSerchedPlanes] = useState([])


	useEffect(() => {
		dispatch(getPlanes())
	}, [dispatch])

	useEffect(() => {
		setSerchedPlanes(planes)
	}, [planes, search])

	useEffect(() => {
		if (search) {
			const newPlanes = planes.filter(plane => plane.name.toLowerCase().includes(search.toLowerCase()));
			setSerchedPlanes(newPlanes)
		} else {
			setSerchedPlanes(planes)
		}
	}, [search, serchedPlanes.length])


	return (
		<ContentWrapper>
			{isLoading && <CircularProgress color="success" size={120} sx={{ margin: '0 auto', marginTop: '50vh' }} />}
			{isError && <h1>{message}</h1>}
			{serchedPlanes && serchedPlanes.map(plane => (<PlaneItem key={plane._id} {...plane} />))}
		</ContentWrapper>
	)
}
export default Planes