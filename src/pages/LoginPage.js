import { Button, Grid, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import SendIcon from '@mui/icons-material/Send';
import { useAuth } from "../hook/useAuth";
import { createUserThunk, loginThunk, removeUser } from "../slices/slicesUser";

const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const isAuth = useAuth().isAuth
  const dispatch = useDispatch()


  return (
    <Container>
      <h1>Логин</h1>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
        <Grid item xs={2}>
          <TextField id="outlined-basic" label="Email" variant="outlined"
            onChange={(e) => { setEmail(e.target.value) }} />
        </Grid>
        <Grid item xs={2}>
          <TextField id="outlined-basic" label="Пароль" variant="outlined"
            onChange={(e) => { setPass(e.target.value) }} />
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" onClick={() => { dispatch(createUserThunk({ email, pass })) }} endIcon={<SendIcon />}>Создать</Button>
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" onClick={() => { dispatch(loginThunk({ email, pass })) }} endIcon={<SendIcon />}>Войти</Button>
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" onClick={() => { dispatch(removeUser()) }} endIcon={<SendIcon />}>Выйти</Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LoginPage;

