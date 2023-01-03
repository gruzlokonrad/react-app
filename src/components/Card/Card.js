import React from 'react'
import Button from '../Button/Button'
import styles from './Card.module.scss'

const Card = ({ action, title, columnId, cardId }) => {

  return (
    <div>
      <li className={styles.card}>
        {title}
        <Button action={action} columnId={columnId} cardId={cardId} style={{ margin: 0 }}>Remove</Button>
      </li>
    </div>
  )
}

export default Card