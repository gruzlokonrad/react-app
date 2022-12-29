import React, { useState } from 'react'
import styles from './ColumnForm.module.scss'
import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput';

const ColumnForm = (props) => {

  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    props.action({ title: title, icon: icon });
    setIcon('');
    setTitle('')
  };

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <label className={styles.columnLabel}>
        Title:
        <TextInput value={title} onChange={e => setTitle(e.target.value)} type="text" />
      </label>
      <label className={styles.columnLabel}>
        Icon:
        <TextInput value={icon} onChange={e => setIcon(e.target.value)} type="text" />
      </label>
      <Button>Add column</Button>
    </form>
  )
}

export default ColumnForm