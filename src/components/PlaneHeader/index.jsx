import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import { useNavigate } from "react-router"
import { paths } from '../../routes/Routes';
import { Link } from 'react-router-dom'



const PlaneHeader = ({ offBtn }) => {
	const navigate = useNavigate();

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position='static' color="inherit">
					<Toolbar sx={{ display: { xs: 'flex' }, justifyContent: { xs: 'space-between' } }}>

						<AirplaneTicketIcon onClick={() => navigate(paths.homePage)} fontSize='large' sx={{ cursor: 'pointer' }} />

						<Typography
							variant="h6"
							noWrap
							component="div"
							sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, ml: '1rem' }}
						>
							Travel with Comfort!
						</Typography>
						{
							offBtn ? null :
								<Link to={paths.addPlanePage} style={{ textDecoration: 'none', color: 'black' }}>
									<Button sx={{ p: { xs: '0.3rem', md: '0.8rem' }, fontSize: { xs: '0.6rem', md: '1rem' }, sm: '0.9rem', mr: { md: '1rem' } }} color="inherit" variant="outlined">Add Air Plane</Button>
								</Link>
						}
					</Toolbar>
				</AppBar>
			</Box>
		</>
	)
}
export default PlaneHeader