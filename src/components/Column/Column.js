import React from 'react'
import styles from './Column.module.scss'
import Card from '../Card/Card'
import CardForm from '../CardForm/CardForm'

const Column = ({ action, columnId, title, icon, cards }) => {
  return (
    <article className={styles.column}>
      <h1 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + icon} />
        {title}
      </h1>
      <ul className={styles.cards}>
        {cards.map(card => <Card key={card.id} title={card.title} />)}
      </ul>
      <CardForm columnId={columnId} action={action} />
    </article>
  )
}

export default Column