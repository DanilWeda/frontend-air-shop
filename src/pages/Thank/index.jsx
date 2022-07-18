import { Typography, Box } from '@mui/material'
import PlaneHeader from '../../components/PlaneHeader'
import { Link } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { paths } from '../../routes/Routes'


const ThankPage = () => {
	return (
		<div>
			<PlaneHeader offBtn />
			<Box sx={{ margin: '30vh 0' }}>
				<Typography variant='h3' component='h1' sx={{ display: 'flex', justifyContent: 'center', flexGrow: '1', m: '1rem' }}>Thank You!</Typography>
				<Typography variant='body1' component='h2' sx={{ display: 'flex', justifyContent: 'center', flexGrow: '1', m: '1rem' }}>We alredy expect you order!</Typography>
			</Box>
			<Link to={paths.homePage}>
				<Typography sx={{ color: '#808080', m: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }} variant='body1' component="p">
					<ArrowBackIosIcon /> Back to the Planes!</Typography>
			</Link>
		</div>
	)
}
export default ThankPage