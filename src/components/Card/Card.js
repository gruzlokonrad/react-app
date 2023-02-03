import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCard } from '../../redux/selectors'
import Button from '../Button/Button'
import styles from './Card.module.scss'
import { toggleCardFavorite } from '../../redux/selectors'
import clsx from 'clsx'

const Card = ({ id, columnId, isFavorite, title }) => {
  const dispatch = useDispatch();
  const action = () => dispatch(removeCard(id))
  const toggleFavorite = () => dispatch(toggleCardFavorite(id))

  return (
    <div>
      <li className={styles.card}>
        <Button action={toggleFavorite} type='favorite' className={clsx(isFavorite && 'favorite')}>
          <span className="fa fa-star-o" />
        </Button>
        {title}
        <Button action={action} columnId={columnId} cardId={id} className={styles.button}>Remove</Button>
      </li>
    </div>
  )
}

export default Card