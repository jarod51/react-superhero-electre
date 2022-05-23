import { useState } from 'react'

type NavListItemProps = {
  id: string
  children: string
  active: string
  callback: React.Dispatch<React.SetStateAction<string>>
}

const NavListItem = ({ id, children, active, callback }: NavListItemProps) => {
	let classNames = 'cursor-pointer capitalize'
	if (active === id) classNames += ' text-red-700'
  return (
    <li
      className={classNames}
      onClick={() => callback(id)}
    >
      {children}
    </li>
  )
}

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const links = ['home', 'battle', 'heroes', 'search', 'login']
  return (
    <nav>
      <ul className='flex justify-center gap-6 font-bold text-xl'>
        {links.map((link) => (
          <NavListItem key={link} id={link} active={activeLink} callback={setActiveLink}>
            {link}
          </NavListItem>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
