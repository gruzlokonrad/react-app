import React from 'react';
import Column from '../Column/Column'
import { useSelector } from 'react-redux';
import styles from './List.module.scss'
import ColumnForm from '../ColumnForm/ColumnForm';

const List = () => {
  const columns = useSelector(state => state.columns);

  // const removeCard = (cardId, columnId) => {
  //   const columnsUpdate = columns.map(column => {
  //     if (column.id === columnId && column.cards.filter(card => card.id === cardId)) {
  //       return { ...column, cards: column.cards.filter(card => card.id !== cardId) }
  //     } else {
  //       return column
  //     }
  //   })

  //   setColumns(columnsUpdate);
  // }

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        Things to do<span>soon</span>
      </header>
      <p className={styles.description}>
        Interesting things I want to check out.
      </p>
      <section className={styles.columns}>
        {columns.map(column => <Column key={column.id} {...column} />)}
      </section>
      <ColumnForm />
    </div>
  )
}

export default List