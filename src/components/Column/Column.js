import React from 'react'
import styles from './Column.module.scss'
import { useSelector } from 'react-redux'
import Card from '../Card/Card'
import CardForm from '../CardForm/CardForm'

const Column = ({ id, title, icon }) => {
  const cards = useSelector(state => state.cards.filter(card => card.columnId === id));
  return (
    <article className={styles.column}>
      <h1 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + icon} />
        {title}
      </h1>
      <ul className={styles.cards}>
        {cards?.map(card => <Card key={card.id} {...card} />)}
      </ul>
      <CardForm />
    </article>
  )
}

export default Column