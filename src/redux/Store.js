import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { chatReducer } from '../slices/slicesChats'
import { messageReducer } from '../slices/slicesMessages'
import { postReducer } from '../slices/slicesPost'
import { addMesage } from '../slices/slicesMessages'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { userReducer } from '../slices/slicesUser'

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    chats: chatReducer,
    messages: messageReducer,
    post: postReducer,
    user: userReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = store => next => action => {
    if (action.type === 'message/addMesage' && action.payload.author !== 'mr.Robot') {
        const botMessage = { id: action.payload.id, text: 'Привет', author: 'mr.Robot' };
        setTimeout(() => store.dispatch(addMesage(botMessage)), 2000);
    }
    return next(action)
}

export const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(middleware),
    reducer: persistedReducer
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export const persistor = persistStore(store);