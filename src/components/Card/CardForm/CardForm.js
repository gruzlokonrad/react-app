import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ACTION } from '../../../redux/actionType'
import shortid from 'shortid'
import Button from '../../Button/Button'
import TextInput from '../../TextInput/TextInput'
import styles from './CardForm.module.scss'
import { addCard } from '../../../redux/selectors'

const CardForm = ({ id }) => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (title) {
      dispatch(addCard({ id: shortid(), columnId: id, title }))
      setTitle('');
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.cardForm}>
      <TextInput title={title} onChange={e => setTitle(e.target.value)} placeholder='Card text' />
      <Button>Add Card</Button>
    </form>
  )
}

export default CardForm