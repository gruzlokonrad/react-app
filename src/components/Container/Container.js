import React from 'react'
import styles from './Container.module.scss'
import clsx from 'clsx'

const Container = ({ children, className }) => {
  return (
    <div className={clsx(className && className, styles.container)}>{children}</div>
  )
}

export default Container