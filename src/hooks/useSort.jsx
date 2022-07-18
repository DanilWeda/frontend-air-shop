import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setSortPlanes } from '../store/planes/planesSlice'


export const useSortPlanes = (planes = []) => {
	const dispatch = useDispatch()
	const [def, setDef] = useState([])

	useEffect(() => {
		setDef([...planes])
	}, [planes.length])

	const sortByPrice = () => {
		const sortablePlanes = [...planes];
		sortablePlanes.sort((a, b) => {
			return a.price - b.price
		})
		dispatch(setSortPlanes(sortablePlanes))
	}

	const sortByCap = () => {
		const sortablePlanes = [...planes];
		sortablePlanes.sort((a, b) => {
			return a.capacity - b.capacity
		})
		dispatch(setSortPlanes(sortablePlanes))
	}

	const sortByDef = () => {
		const sortablePlanes = def;
		dispatch(setSortPlanes(sortablePlanes))
	}

	return ({
		sortByPrice,
		sortByCap,
		sortByDef,
	})
}