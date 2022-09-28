import React, { useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import SendIcon from '@mui/icons-material/Send';

const Form = ({ data, setData, setMessages }) => {

  // Почему-то так не заработало((
  //const [text, author] = data;

  const text = data.text
  const author = data.author;

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const submitForm = (e) => {

    e.preventDefault();

    if (text.length > 0 && author.length > 0) {

      setMessages(old => [...old, { text, author }])

      setData(
        {
          text: "",
          author: ""
        }
      )

      inputRef.current?.focus();
    } else {

      alert("Заполните все поля для ввода");

    }
  };

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
      <Grid item xs={2}>
        <TextField id="outlined-basic" inputRef={inputRef} label="Текст" variant="outlined" value={text} onChange={(e) => setData(old => ({ ...old, text: e.target.value }))} />
      </Grid>
      <Grid item xs={2}>
        <TextField id="outlined-basic" label="Автор" variant="outlined" value={author} onChange={(e) => setData(old => ({ ...old, author: e.target.value }))} />
      </Grid>
      <Grid item xs={1}>
        <Button variant="contained" onClick={submitForm} endIcon={<SendIcon />}>Отправить</Button>
      </Grid>
    </Grid>
  )
}

export default Form;

