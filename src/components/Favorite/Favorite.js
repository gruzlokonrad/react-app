import React from 'react'
import PageTitle from '../PageTitle/PageTitle'
import Card from '../Card/Card'
import styles from './Favorite.module.scss'
import { useSelector } from 'react-redux'
import { getFavoriteCards } from '../../redux/selectors'

const Favorite = () => {
  const cards = useSelector(getFavoriteCards)
  return (
    <>
      <h2 className={styles.title}>
        <PageTitle>Favorite</PageTitle>
      </h2>
      <article className={styles.column}>
        <ul className={styles.cards}>
          {cards?.map(card => <Card key={card.id} {...card} />)}
        </ul>
      </article>
    </>
  )
}

export default Favorite