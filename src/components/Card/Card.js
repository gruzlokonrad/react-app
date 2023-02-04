import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCard } from '../../redux/cardRedux'
import Button from '../Button/Button'
import styles from './Card.module.scss'
import { toggleCardFavorite } from '../../redux/cardRedux'
import clsx from 'clsx'

const Card = ({ id, columnId, isFavorite, title }) => {
  const dispatch = useDispatch();
  const action = () => dispatch(removeCard(id))
  const toggleFavorite = () => dispatch(toggleCardFavorite(id))

  return (
    <div>
      <li className={styles.card}>
        {title}
        <Button action={toggleFavorite} type='icon' className={clsx(isFavorite && 'favorite')}>
          <span className="fa fa-star-o" />
        </Button>
        <Button action={action} type='icon' columnId={columnId} cardId={id} className={styles.button}>
          <span className="fa fa-trash" />
        </Button>
      </li>
    </div>
  )
}

export default Card