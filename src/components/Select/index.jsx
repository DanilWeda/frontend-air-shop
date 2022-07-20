import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function BasicSelect({ setSortParam, sortParam, xs }) {

	const handleChange = (event) => {
		setSortParam(event.target.value);
	};


	return (
		<Box sx={{
			display: { xs: xs, md: 'flex' }, justifyContent: { xs: 'center' }, minWidth: 150, p: '10px', color: 'inherit'
		}}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">Sort By</InputLabel>
				<Select
					color='info'
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={sortParam}
					label="Sort By"
					onChange={handleChange}
					sx={!xs && { maxWidth: '90vw' }}
				>
					<MenuItem value={1}>Price</MenuItem>
					<MenuItem value={2}>Capacity</MenuItem>
					<MenuItem value={3}>Default</MenuItem>
				</Select>
			</FormControl>
		</Box >
	);
}