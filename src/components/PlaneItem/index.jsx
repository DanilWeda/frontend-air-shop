import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { Divider } from '@mui/material';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DescriptionIcon from '@mui/icons-material/Description';
import { Link } from 'react-router-dom';

const PlaneItem = ({ planeImage, name, description, capacity, price, _id }) => {
	return (
		<>
			<Grid item xs={12} sm={12} md={4} xl={3} sx={{ display: 'flex', justifyContent: 'center' }}>
				<Link to={`/${_id}`} style={{ textDecoration: 'none' }}>
					<Card sx={{ maxWidth: '400px' }}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="340px"
								image={`${process.env.REACT_APP_API_URL}${planeImage}`}
								alt={name}
							/>
							<CardContent>
								<Typography sx={{ mb: '1rem' }} variant="h3">
									{name}
									<Divider light />
								</Typography>

								<Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', ml: '1rem' }}>
									<DescriptionIcon sx={{ mr: '1rem' }} />
									Description:
								</Typography>
								<Typography variant="body1" component="h5" sx={{ ml: '3.5rem', mb: '1rem', wordWrap: 'break-word' }}>
									{description}
								</Typography>
								<Divider light />
								<Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', ml: '1rem', minHeight: '50px' }}>
									<GroupAddIcon sx={{ mr: '1rem' }} />
									<Typography variant="h6" component='span'>Capacity: </Typography>
									<Typography variant="h6" component='span' sx={{ ml: '0.5rem', fontWeight: '400' }}>{capacity}</Typography>
								</Typography>
								<Divider light />
								<Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', ml: '1rem', minHeight: '50px' }}>
									<AttachMoneyIcon sx={{ mr: '1rem' }} />
									<Typography variant="h6" component='span'>Price: </Typography>
									<Typography variant="h6" component='span' sx={{ ml: '0.5rem', fontWeight: '400' }}>{price} $</Typography>
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Link>
			</Grid >
		</>
	)
}


export default PlaneItem