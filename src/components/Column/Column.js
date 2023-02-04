import React from 'react'
import styles from './Column.module.scss'
import { useSelector } from 'react-redux'
import Card from '../Card/Card'
import CardForm from '../CardForm/CardForm'
import { getFilteredCards } from '../../redux/cardRedux'

const Column = ({ id, title, icon }) => {
  const cards = useSelector(state => getFilteredCards(state, id))

  return (
    <article className={styles.column}>
      <h1 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + icon} />
        {title}
      </h1>
      <ul className={styles.cards}>
        {cards?.map(card => <Card key={card.id} {...card} />)}
      </ul>
      <CardForm id={id} />
    </article>
  )
}

export default Column