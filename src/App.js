import React, { useEffect, useState } from 'react';
import './App.scss';
import Form from './form/Form';
import Chats from './form/Chats';
import Messages from './form/Messages';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {

  const [messageStruct, setMessageStruct] = useState(
    {
      text: '',
      author: ''
    }
  )

  const [messageList, setMessageList] = useState([
    { text: 'Текст1', author: 'Денис' },
    { text: 'Текст2', author: 'Денис' },
    { text: 'Текст3', author: 'Денис' }
  ]);

  const [chatList, setChatList] = useState([
    { text: 'Чат1' },
    { text: 'Чат2' },
    { text: 'Чат3' }
  ]);

  useEffect(() => {

    if (messageList.length > 0 && messageList.slice(-1)[0].author !== 'Mr.Robot') {
      setTimeout(() => {
        setMessageList(old => [...old, { text: 'Вам ответил', author: 'Mr.Robot' }])
      }, 1500);
    }

  }, [messageList]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="App-header">Чат</div>
        <Container maxWidth="lg">
          <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
            <Grid item xs={12}>
              <Form data={messageStruct} setData={setMessageStruct} setMessages={setMessageList}></Form>
            </Grid>
            <Grid item xs={2}>
              <Chats data={chatList} setData={setChatList} ></Chats>
            </Grid>
            <Grid item xs={10}>
              <Messages data={messageList} setData={setMessageList}></Messages>
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
