import { Grid, CardMedia, Typography, Button, Box } from "@mui/material"
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DescriptionIcon from '@mui/icons-material/Description';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom'
import { paths } from '../../routes/Routes'

const Plane = ({ name, description, price, capacity, planeImage }) => {
	return (
		<Grid component={Paper} container sx={{ margin: '1rem auto', justifyContent: 'center', maxWidth: '1200px' }}>
			<Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
				<Typography sx={{ p: '0.5rem' }} variant='h4' component='h1'>{name}</Typography>
			</Grid>
			<Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
				<Grid item xs={9} sx={{ display: 'flex', justifyContent: 'center' }}>
					<CardMedia
						component="img"
						height="500px"
						sx={{ height: { xs: '200px', sm: '350px', md: '500px' } }}
						image={planeImage}
						alt={name}
					/>
				</Grid>
			</Grid>
			<Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
				<Grid item xs={9} sx={{ display: 'flex', justifyContent: 'center' }}>
					<Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
						<AttachMoneyIcon />
						<Typography sx={{ p: '0.5rem' }} variant='h6' component='strong'>{price}</Typography>
					</Grid>
					<Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<DescriptionIcon />
					</Grid>
					<Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<GroupAddIcon sx={{ mr: '1rem' }} />
						<Typography sx={{ p: '0.5rem' }} variant='h6' component='strong'>{capacity}</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
				<Grid item xs={9} sx={{ display: 'flex', justifyContent: 'center' }}>
					<Typography variant="h5" sx={{ m: '0.5rem' }}>{description}</Typography>
				</Grid>
			</Grid>
			<Box sx={{ display: 'flex', justifyContent: 'center' }}>
				<Link to={paths.thankpage} style={{ textDecoration: 'none', color: 'black' }}>
					<Button sx={{ p: '0.9rem', m: '1rem ' }} color="inherit" variant="outlined">Buy This Air Plane</Button>
				</Link>
			</Box>
		</Grid>
	)
}
export default Plane