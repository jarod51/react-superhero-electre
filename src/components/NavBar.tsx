// import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
// import AuthContext from '../context/auth-context'
import { useAppSelector } from '../redux/hook'
import { getAuthStatus } from '../redux/reducers/auth'

const NavBar = () => {
  // const { authenticated } = useContext(AuthContext)
  const { authenticated } = useAppSelector(getAuthStatus)

  const links = [
    {
      path: '/',
      name: 'home',
    },
    {
      path: 'battle',
      name: 'battle',
    },
    {
      path: 'heroes',
      name: 'heroes',
    },
    {
      path: 'search',
      name: 'search',
    },
    {
      path: 'cities',
      name: 'cities',
    },
  ]
  if (authenticated) {
    links.push({
      path: 'logout',
      name: 'logout',
    })
  } else {
    links.push({
      path: 'login',
      name: 'login',
    })
  }
  return (
    <nav>
      <ul className='flex justify-center gap-6 font-bold text-lg my-2'>
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              isActive ? 'cursor-pointer capitalize text-red-700' : 'cursor-pointer capitalize'
            }
          >
            {link.name}
          </NavLink>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
