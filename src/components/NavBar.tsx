import { NavLink } from 'react-router-dom'

const NavBar = () => {
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
      path: 'login',
      name: 'login',
    },
  ]
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
