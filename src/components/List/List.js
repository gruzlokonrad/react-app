import React from 'react';
import Column from '../Column/Column'
import { useSelector } from 'react-redux';
import styles from './List.module.scss'
import ColumnForm from '../ColumnForm/ColumnForm';
import { getColumnsById } from '../../redux/columnRedux';
import { getListById } from '../../redux/listRedux';
import { useParams } from 'react-router'
// import { Navigate } from 'react-router'
import NotFound from '../NotFound/NotFound';
import SearchForm from '../SearchForm/SearchForm'

const List = () => {
  const { listId } = useParams()
  const { title, description } = useSelector(state => getListById(state, listId)) || {}
  const columnData = useSelector(state => getColumnsById(state, listId))

  if (!title || !description) {
    return <NotFound />
    // return <Navigate to='/' />
  }

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        {title}
      </header>
      <p className={styles.description}>
        {description}
      </p>
      <SearchForm />
      <section className={styles.columns}>
        {columnData.map((column, index) => <Column key={index} {...column} />)}
      </section>
      <ColumnForm listId={listId} />
    </div>
  )
}

export default List