import React from 'react'
import styles from './Button.module.scss'

const Button = ({ children, style, action, cardId, columnId }) => {
  return (
    <button
      className={styles.button}
      style={style}
      onClick={() => {
        if (action)
          action(cardId, columnId)
      }}
    >
      {children}
    </button >
  )
}

export default Button