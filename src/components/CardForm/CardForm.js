import React, { useState } from 'react'
import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput'
import styles from './CardForm.module.scss'

const CardForm = (props) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    props.action({title: value}, props.columnId);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit} className={styles.cardForm}>
      <TextInput value={value} onChange={e => setValue(e.target.value)} placeholder='Card text' />
      <Button>Add Card</Button>
    </form>
  )
}

export default CardForm