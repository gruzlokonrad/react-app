import React, { useState } from 'react'
import shortid from 'shortid'
import { useDispatch } from 'react-redux'
import styles from './ColumnForm.module.scss'
import Button from '../../Button/Button'
import TextInput from '../../TextInput/TextInput';
import { addColumn } from '../../../redux/selectors'

const ColumnForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (title && icon) {
      dispatch(addColumn({ id: shortid(), title, icon }))
      setIcon('');
      setTitle('')
    } else {
      alert('Fill up all fields')
    }
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