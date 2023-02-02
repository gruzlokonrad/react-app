import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Container from '../Container/Container'
import styles from './NavBar.module.scss'

const NavBar = () => {

  const navlinks = [
    { name: 'Home', url: '/' },
    { name: 'Favorite', url: '/favorite' },
    { name: 'About', url: '/about' },
  ]

  return (
    <nav className={styles.nav}>
      <Container className={styles.container}>
        <div>
          <Link to='/'>
            <span className="fa fa-tasks" />
          </Link>
        </div>
        <div>
          <ul>
            {navlinks.map(({ name, url }, index) =>
              <li key={index}>
                <NavLink
                  className={({ isActive }) => isActive ? styles.linkActive : undefined}
                  to={url}
                >
                  {name}
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </Container>
    </nav>
  )
}

export default NavBar