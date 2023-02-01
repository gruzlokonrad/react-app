import React from 'react';
import Column from '../Column/Column'
import { useSelector } from 'react-redux';
import styles from './List.module.scss'
import ColumnForm from '../ColumnForm/ColumnForm';

const List = () => {
  const columns = useSelector(state => state.columns);

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        Things to do <span>soon</span>
      </header>
      <p className={styles.description}>
        Interesting things I want to check out.
      </p>
      <section className={styles.columns}>
        {columns.map((column, index) => <Column key={index} {...column} />)}
      </section>
      <ColumnForm />
    </div>
  )
}

export default List