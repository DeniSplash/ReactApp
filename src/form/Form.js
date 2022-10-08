import React, { useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch } from 'react-redux';
import { addMesage } from '../slices/slicesMessages'

const Form = ({ idChat }) => {

  const dispatch = useDispatch();

  let newMsg = { id: idChat, text: '', author: '' }
  const inputRef = useRef(null);
  const inputARef = useRef(null);

  const addMessageHandler = () => {
    if (newMsg.text.length > 0 && newMsg.author.length > 0) {
      dispatch(addMesage(newMsg));
      inputRef.current?.focus();
      inputRef.current.value = '';
      inputARef.current.value = '';
      newMsg = { id: idChat, text: '', author: '' };

    } else {
      alert("Заполните все поля для ввода");
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const setText = (text) => {
    newMsg.text = text;
    console.log(inputRef.current.value);

  }

  const setAuthor = (author) => {
    newMsg.author = author;
  }

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
      <Grid item xs={2}>
        <TextField id="outlined-basic" inputRef={inputRef} label="Текст" variant="outlined"
          onChange={(e) => setText(e.target.value)} />
      </Grid>
      <Grid item xs={2}>
        <TextField id="outlined-basic" inputRef={inputARef} label="Автор" variant="outlined"
          onChange={(e) => setAuthor(e.target.value)} />
      </Grid>
      <Grid item xs={1}>
        <Button variant="contained" onClick={addMessageHandler} endIcon={<SendIcon />}>Отправить</Button>
      </Grid>
    </Grid>
  )
}

export default Form;

