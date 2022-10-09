import { configureStore } from '@reduxjs/toolkit'
import { chatReducer } from '../slices/slicesChats'
import { messageReducer } from '../slices/slicesMessages'

export const store = configureStore({
    reducer: {
        chats: chatReducer,
        messages: messageReducer
    }

}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())