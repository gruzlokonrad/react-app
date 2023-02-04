import React from 'react'
import styles from './Button.module.scss'
import clsx from 'clsx'

const Button = ({ children, className, type, action }) => {
  const buttonStyles = ['default', 'icon']
  const buttonType = type?.toLowerCase()
  return (
    <button
      className={clsx(
        (className && type === 'icon') && styles[className],
        (className && type !== 'icon') && className,
        buttonStyles.includes(buttonType) ? styles[`${buttonType}Button`] : styles.defaultButton,
      )}
      onClick={() => { action && action() }}
    >
      {children}
    </button >
  )
}

export default Button