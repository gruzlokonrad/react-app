import React, { useState } from 'react';
import Column from '../Column/Column'
import styles from './List.module.scss'
import shortid from 'shortid';
import ColumnForm from '../ColumnForm/ColumnForm';
import CardForm from '../CardForm/CardForm';

const List = () => {

  const [columns, setColumns] = useState([
    {
      id: 1,
      title: 'Books',
      icon: 'book',
      cards: [
        { id: 1, title: 'This is Going to Hurt' },
        { id: 2, title: 'Interpreter of Maladies' }
      ]
    },
    {
      id: 2,
      title: 'Movies',
      icon: 'film',
      cards: [
        { id: 1, title: 'Harry Potter' },
        { id: 2, title: 'Star Wars' }
      ]
    },
    {
      id: 3,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        { id: 1, title: 'The Witcher' },
        { id: 2, title: 'Skyrim' }
      ]
    }
  ]);

  const addColumn = ({ title, icon }) => {
    setColumns([...columns, { id: shortid(), title: title, icon: icon, card: [] }]);
  };

  const addCard = (newCard, columnId) => {
    const columnsUpdated = columns.map(column => {
      if (column.id === columnId)
        return { ...column, cards: [...column.cards, { id: shortid(), title: newCard.title }] }
      else
        return column
    })

    setColumns(columnsUpdated);
  }

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        Things to do<span>soon</span>
      </header>
      <p className={styles.description}>
        Interesting things I want to check out.
      </p>
      <section className={styles.columns}>
        {columns.map(({ id, title, icon, cards }) => <Column action={addCard} columnId={id} key={id} title={title} icon={icon} cards={cards} />)}
      </section>
      <ColumnForm action={addColumn} />
    </div>
  )
}

export default List