import { createSlice } from '@reduxjs/toolkit'

const initialChats = [
  { id: 0, text: 'Чат1' },
  { id: 1, text: 'Чат2' },
  { id: 2, text: 'Чат3' }
];

const chatSlice = createSlice({
  name: 'chats',
  initialState: initialChats,
  reducers: {
    addChat: (state, action) => {
      return [...state, action.payload];
    },
    removeChat: (state) => {
      return [...state.filter((e, i) => i < state.length - 1)];
    }
  }
})

export const { addChat, removeChat } = chatSlice.actions
export const chatReducer = chatSlice.reducer

