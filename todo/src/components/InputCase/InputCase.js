import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './InputCase.module.css'


const InputCase = () => (
  <TextField
   id="standard-full-width"
   label=""
   style={{ margin: 8 }}
   placeholder="Введите текст"
   helperText="Добавьте Ваше задание"
   fullWidth
   margin="normal"
   InputLabelProps={{
     shrink: true,
   }} />
);

export default InputCase;
