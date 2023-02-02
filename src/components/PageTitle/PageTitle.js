import React from 'react'
import styles from './PageTitle.module.scss'

const PageTitle = ({ children }) => {
  return (
    <div className={styles.pageTitle}>{children}</div>
  )
}

export default PageTitle