import Grid from '@mui/material/Grid'

const ContentWrapper = ({ children }) => {
	return (
		<Grid container spacing={2} sx={{ mt: { xs: '0', md: '2rem' } }} >
			{children}
		</Grid>
	)
}

export default ContentWrapper