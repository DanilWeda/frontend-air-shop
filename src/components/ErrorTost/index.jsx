import { Typography } from "@mui/material"

const Error = ({ error }) => {
	return (
		<>
			{
				error &&
				<Typography sx={{ color: 'red', textAlign: 'center', fontSize: '0.8rem' }} variant='body1' component="p">{error}</Typography>
			}
		</>
	)
}
export default Error