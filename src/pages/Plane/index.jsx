
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useLocation } from "react-router"
import Plane from '../../components/Plane'
import PlaneHeader from '../../components/PlaneHeader'
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch } from "react-redux"
import { getPlaneById } from "../../store/plane/action"
import { Typography } from "@mui/material"
import { Link } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { paths } from '../../routes/Routes'


const PlanePage = () => {
	const { plane, isLoading, isError, message } = useSelector((state) => state.plane)

	const location = useLocation();
	const dispatch = useDispatch();


	useEffect(() => {
		const planeId = location.pathname.slice(1)
		dispatch(getPlaneById(planeId))
	}, [dispatch])


	return (
		<>
			<PlaneHeader />
			<Link to={paths.homePage}>
				<Typography sx={{ color: '#808080', m: '2rem', display: 'flex', alignItems: 'center', }} variant='body1' component="p">
					<ArrowBackIosIcon /> Back to the Planes!</Typography>
			</Link>
			{isLoading && (
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<CircularProgress color="success" size={120} sx={{ margin: '0 auto', marginTop: '50vh' }} />
				</div>
			)}
			{isError && <h1 style={{ display: 'flex', justifyContent: 'center' }}>{message}</h1>}
			{plane && <Plane {...plane} />}

		</>
	)
}
export default PlanePage