import React from 'react'
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
          <a href='/'>
            <span className="fa fa-tasks" />
          </a>
        </div>
        <div>
          <ul>
            {navlinks.map(({ name, url }, index) =>
              <li key={index}>
                <a href={url}>{name}</a>
              </li>
            )}
          </ul>
        </div>
      </Container>
    </nav>
  )
}

export default NavBar