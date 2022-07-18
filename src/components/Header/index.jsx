import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import SearchIcon from '@mui/icons-material/Search';
import Select from '../Select'
import Button from '@mui/material/Button';
import { useSortPlanes } from '../../hooks/useSort';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { searchPlanes } from '../../store/planes/planesSlice';
import { Link } from 'react-router-dom';
import { paths } from '../../routes/Routes'



const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
}));


const Header = () => {
	const [search, setSearch] = useState('')
	const [sortParam, setSortParam] = useState(3)
	const { planes } = useSelector((state) => state.planes)

	const { sortByPrice, sortByCap, sortByDef } = useSortPlanes(planes || [])

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(searchPlanes(search))
	}, [search])


	useEffect(() => {

		if (sortParam === 1) {
			sortByPrice()

		}
		if (sortParam === 2) {
			sortByCap()

		}

		if (sortParam === 3) {
			sortByDef()
		}


	}, [sortParam])




	return (

		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static' color="inherit">
				<Toolbar>

					<AirplaneTicketIcon fontSize='large' />

					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, ml: '1rem' }}
					>
						Travel with Comfort!
					</Typography>
					<Select setSortParam={setSortParam} sortParam={sortParam} />
					<Link to={paths.addPlanePage} style={{ textDecoration: 'none', color: 'black' }}>
						<Button sx={{ p: '0.9rem', mr: '1rem' }} color="inherit" variant="outlined">Add Air Plane</Button>
					</Link>
					<Search>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
						<StyledInputBase
							onChange={(e) => setSearch(e.target.value)}
							placeholder="Search…"
							inputProps={{ 'aria-label': 'search' }}
						/>
					</Search>
				</Toolbar>
			</AppBar>
		</Box >
	)
}

export default Header





