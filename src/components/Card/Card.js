import React from 'react'
import Button from '../Button/Button'
import styles from './Card.module.scss'

const Card = ({id, columnId, title}) => {

  return (
    <div>
      <li className={styles.card}>
        {title}
        <Button columnId={columnId} cardId={id} style={{ margin: 0 }}>Remove</Button>
      </li>
    </div>
  )
}

export default Card