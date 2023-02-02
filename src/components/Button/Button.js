import React from 'react'
import styles from './Button.module.scss'

const Button = ({ children, style, action }) => {
  return (
    <button
      className={styles.button}
      style={style}
      onClick={() => { action && action() }}
    >
      {children}
    </button >
  )
}

export default Button