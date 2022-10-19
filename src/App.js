import React, { useEffect, useState } from 'react';
import './App.scss';
import HomePage from './pages/HomePage';
import ChatsPage from './pages/ChatsPage';
import ProfilePage from './pages/ProfilePage';
import NavBar from './form/NavBar';
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import PostPage from './pages/PostPage';
import LoginPage from './pages/LoginPage';
import { useAuth } from './hook/useAuth';

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
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const isAuth = useAuth().isAuth

  const POST_URL = "https://jsonplaceholder.typicode.com/posts"

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch(POST_URL)
        .then(resp => resp.json())
        .then(data => {
          setData(data)
        })
        .catch(err => setError(err))
        .finally(() => {
          setLoading(false)
        })

    }, 1000)


  }, [])

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        {
          loading ? <h1>загрузка...</h1> :
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='chats' element={<ChatsPage />}>
                <Route path=':chatId' element={<ChatsPage />} />
              </Route>
              <Route path='profile' element={<ProfilePage userName={"Пользователь"} />} />
              <Route path='post' element={<PostPage data={[]} />} />
              <Route path='*' element={<HomePage userName={"Ошибка"} />} />
            </Routes>
        }
      </div>
    </ThemeProvider>
  );
}

export default App;
