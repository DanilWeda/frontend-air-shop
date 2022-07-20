import { useState } from 'react'
import PlaneHeader from "../../components/PlaneHeader"
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DescriptionIcon from '@mui/icons-material/Description';
import Paper from '@mui/material/Paper';
import { Grid, Typography, Button, TextField, Fab, Box } from "@mui/material"
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import AddIcon from '@mui/icons-material/Add';
import ImageIcon from '@mui/icons-material/Image';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link, useNavigate } from 'react-router-dom'
import { paths } from '../../routes/Routes'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useEffect } from "react";
import { resetPlaneErrors } from "../../store/plane/planeSlice"
import Error from "../../components/ErrorTost"
import { createPlane } from '../../store/plane/action'

const AddPlanePage = () => {

	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { errors } = useSelector(state => state.plane)
	const [body, setBody] = useState({
		name: '',
		description: '',
		price: '',
		capacity: '',
		planeImage: '',
	})

	const handleClick = useCallback(() => {
		const reqBody = new FormData()
		reqBody.append('name', body.name)
		reqBody.append('description', body.description)
		reqBody.append('price', body.price)
		reqBody.append('capacity', body.capacity)
		reqBody.append('planeImage', body.planeImage)
		dispatch(createPlane(reqBody))
			.then(res => res.error ? console.log('For Errors Vision') : navigate(`/${res.payload._id}`))
	}, [body])


	useEffect(() => {
		return () => dispatch(resetPlaneErrors())
	}, [dispatch])




	return (
		<>
			<PlaneHeader offBtn />
			<Link to={paths.homePage}>
				<Typography sx={{ color: '#808080', m: '2rem', display: 'flex', alignItems: 'center', }} variant='body1' component="p">
					<ArrowBackIosIcon /> Back to the Planes!</Typography>
			</Link>
			<Typography sx={{ color: '#808080', m: '2rem', textAlign: 'center' }} variant='h4' component="h1">Create you own Plane!</Typography>
			<Grid container sx={{ margin: '0 auto', justifyContent: 'center', maxWidth: '1200px', p: '1.5rem' }}>
				<Grid component={Paper} item xs={12} sm={10} md={8} sx={{ justifyContent: 'center', maxWidth: '1200px', p: { xs: '1rem', sm: '1rem', md: '1.5rem' } }}>
					<Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
						<DriveFileRenameOutlineIcon />
						<TextField onChange={(e) => setBody({ ...body, name: e.target.value })} value={body.name || ''} id="standard-basic" label="Name" variant="standard" sx={{ m: '1rem', flexGrow: '1' }} />
					</Grid>
					<Error error={errors?.name?.message} />
					<Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<DescriptionIcon />
						<TextField onChange={(e) => setBody({ ...body, description: e.target.value })} value={body.description || ''} id="standard-basic" label="Description" variant="standard" sx={{ m: '1rem', flexGrow: '1' }} />
					</Grid>
					<Error error={errors?.description?.message} />
					<Grid item xs={6} sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
						<AttachMoneyIcon />
						<TextField onChange={(e) => setBody({ ...body, price: e.target.value.replace(/\D/g, '') })} value={body.price || ''} id="standard-basic" label="Price" variant="standard" sx={{ m: '1rem' }} />
					</Grid>
					<Error error={errors?.price?.message} />
					<Grid item xs={7} sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
						<GroupAddIcon />
						<TextField onChange={(e) => setBody({ ...body, capacity: e.target.value.replace(/\D/g, '') })} value={body.capacity || ''} id="standard-basic" label="Capacity" variant="standard" sx={{ m: '1rem' }} />
					</Grid>
					<Error error={errors?.capacity?.message} />
					<Grid item xs={12}>
						<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
							<ImageIcon />
							{

							}
							<Typography sx={{ color: '#808080', m: '1rem', flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }} variant='body1' component="p">
								{body?.planeImage ?
									<><CheckCircleIcon fontSize='large' sx={{ color: 'green', px: '1rem' }} /> Success upload! </> : 'Choose Image'}
							</Typography>
							<Fab size="small" color="secondary" aria-label="image-input">
								<label htmlFor="image-input" style={{ width: '100%', height: '100%', cursor: 'pointer' }}  >
									<AddIcon sx={{ py: '0.45rem' }} />
								</label>
							</Fab>
							<input onChange={(e) => setBody({ ...body, planeImage: e.target.files[0] })} id='image-input' type="file" style={{ display: 'none' }} />
						</Box>
						<Error error={errors?.planeImage?.message} />
					</Grid>

					<Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<Button sx={{ p: '0.9rem', m: '2rem' }} onClick={handleClick} color="inherit" variant="outlined">Add Air Plane</Button>
					</Grid>
				</Grid>
			</Grid>
		</>
	)
}
export default AddPlanePage