import React from 'react'
import styles from './Button.module.scss'
import clsx from 'clsx'

const Button = ({ children, className, type, action }) => {
  const buttonStyles = ['default', 'favorite']
  const buttonType = type?.toLowerCase()
  return (
    <button
      className={clsx(
        (className && type === 'favorite') && styles[className],
        (className && type !== 'favorite') && className,
        buttonStyles.includes(buttonType) ? styles[`${buttonType}Button`] : styles.defaultButton,
      )}
      onClick={() => { action && action() }}
    >
      {children}
    </button >
  )
}

export default Button