import ContentWrapper from '../ContentWrapper'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getPlanes } from '../../store/planes/action'
import CircularProgress from '@mui/material/CircularProgress';
import PlaneItem from '../PlaneItem'
import { Typography } from '@mui/material';
import { paths } from '../../routes/Routes';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import { Box } from '@mui/system';

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
			{planes && !planes.length &&
				<Box sx={{ display: 'flex', margin: '0 auto', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
					<Typography variant='h3' component='h1' sx={{ with: '100%' }}>Sry, here we don`t have posts</Typography>
					<Link to={paths.addPlanePage} style={{ textDecoration: 'none', color: 'black', marginTop: '2rem' }}>
						<Button sx={{ p: '0.9rem', mr: '2rem' }} color="inherit" variant="outlined">Add Air Plane</Button>
					</Link>
				</Box>
			}
		</ContentWrapper>
	)
}
export default Planes