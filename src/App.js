import React, { useEffect, useState } from 'react';
import './App.scss';
import HomePage from './pages/HomePage';
import ChatsPage from './pages/ChatsPage';
import ProfilePage from './pages/ProfilePage';
import NavBar from './form/NavBar';
import { Routes, Route } from "react-router-dom";
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
      id: '',
      text: '',
      author: ''
    }
  )

  const [messageList, setMessageList] = useState([
    { id: 0, text: 'Текст1', author: 'Денис' },
    { id: 1, text: 'Текст2', author: 'Денис' },
    { id: 2, text: 'Текст3', author: 'Денис' }
  ]);

  const [chatList, setChatList] = useState([
    { id: 0, text: 'Чат1' },
    { id: 1, text: 'Чат2' },
    { id: 2, text: 'Чат3' }
  ]);

  useEffect(() => {

    if (messageList.length > 0 && messageList.slice(-1)[0].author !== 'Mr.Robot') {
      setTimeout(() => {
        setMessageList(old => [...old, { id: messageList.slice(-1)[0].id, text: 'Вам ответил', author: 'Mr.Robot' }])
      }, 1500);
    }

  }, [messageList]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='chats' element={<ChatsPage messageStruct={messageStruct}
            setMessageStruct={setMessageStruct} setMessageList={setMessageList}
            chatList={chatList} setChatList={setChatList} messageList={messageList} />}>
            <Route path=':chatId' element={<ChatsPage messageStruct={messageStruct}
              setMessageStruct={setMessageStruct} setMessageList={setMessageList}
              chatList={chatList} setChatList={setChatList} messageList={messageList} />} />
          </Route>
          <Route path='profile' element={<ProfilePage userName={"Пользователь"} />} />
          <Route path='*' element={<HomePage userName={"Ошибка"} />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
