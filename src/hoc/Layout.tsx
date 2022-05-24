// High Order Component
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Layout = () => {
	return (
		<>
			<NavBar />
			<main>
				<Outlet />
			</main>
			<footer>Our Footer - Mentions légales</footer>
		</>
	)
}

export default Layout