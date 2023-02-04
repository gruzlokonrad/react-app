import React, { useState } from 'react'
import styles from './ListForm.module.scss'
import TextInput from '../TextInput/TextInput'
import Button from '../Button/Button'
import { useDispatch } from 'react-redux'
import { addList } from '../../redux/listRedux';
import shortid from 'shortid'

const ListForm = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault();

    if (title && description) {
      dispatch(addList({ id: shortid(), title, description }))
    } else {
      alert('Fill out both fields.')
    }
  }
  return (
    <form onSubmit={handleSubmit} className={styles.cardForm}>
      <TextInput value={title} onChange={e => setTitle(e.target.value)} placeholder='Title' type='text' />
      <TextInput value={description} onChange={e => setDescription(e.target.value)} placeholder='Description' type='text' />
      <Button>Add List</Button>
    </form>
  )
}

export default ListForm