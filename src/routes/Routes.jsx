import { useRoutes } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"
import HomePage from "../pages/Home"
import PlanePage from "../pages/Plane"
import AddPlanePage from "../pages/AddPlane"
import ThankPage from "../pages/Thank"


export const paths = {
	homePage: '/',
	planePage: '/:id',
	addPlanePage: '/create-plane',
	thankpage: '/thankpage',
	notFoundPage: '*'
}

const AllRoutes = () => {

	const allPaths = useRoutes([
		{ path: paths.homePage, element: <HomePage /> },
		{ path: paths.planePage, element: <PlanePage /> },
		{ path: paths.addPlanePage, element: <AddPlanePage /> },
		{ path: paths.thankpage, element: <ThankPage /> },
		{ path: paths.notFoundPage, element: <HomePage /> },
	])

	return allPaths
}

const Routes = () => {
	return (
		<Router>
			<AllRoutes />
		</Router>
	)
}

export default Routes