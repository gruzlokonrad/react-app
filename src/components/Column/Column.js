import React from 'react'
import styles from './Column.module.scss'

const Column = ({ title, icon }) => {
  return (
    <article className={styles.column}>
      <h1 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + icon} />
        {title}
      </h1>
    </article>
  )
}

export default Column