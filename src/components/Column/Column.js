import React from 'react'
import styles from './Column.module.scss'
import Card from '../Card/Card'
import CardForm from '../CardForm/CardForm'

const Column = ({ action, columnId, title, icon, cards }) => {
  const { addCard, removeCard } = action;
  return (
    <article className={styles.column}>
      <h1 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + icon} />
        {title}
      </h1>
      <ul className={styles.cards}>
        {cards?.map(card => <Card action={removeCard} key={card.id} title={card.title} columnId={columnId} cardId={card.id}/>)}
      </ul>
      <CardForm columnId={columnId} action={addCard} />
    </article>
  )
}

export default Column