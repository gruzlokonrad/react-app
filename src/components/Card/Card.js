import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCard } from '../../redux/selectors'
import Button from '../Button/Button'
import styles from './Card.module.scss'

const Card = ({id, columnId, title}) => {
  const dispatch = useDispatch();
  const action = () => {
    dispatch(removeCard(id))
  }

  return (
    <div>
      <li className={styles.card}>
        {title}
        <Button action={action} columnId={columnId} cardId={id} style={{ margin: 0 }}>Remove</Button>
      </li>
    </div>
  )
}

export default Card