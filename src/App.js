import React, { useEffect, useState } from 'react';
import './App.scss';
import HomePage from './pages/HomePage';
import ChatsPage from './pages/ChatsPage';
import ProfilePage from './pages/ProfilePage';
import NavBar from './form/NavBar';
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';

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


  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='chats' element={<ChatsPage />}>
            <Route path=':chatId' element={<ChatsPage />} />
          </Route>
          <Route path='profile' element={<ProfilePage userName={"Пользователь"} />} />
          <Route path='*' element={<HomePage userName={"Ошибка"} />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
