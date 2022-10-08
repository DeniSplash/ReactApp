import { createSlice } from '@reduxjs/toolkit'

const initialMessages = [
  { id: 0, text: 'Текст1', author: 'Денис' },
  { id: 1, text: 'Текст2', author: 'Денис' },
  { id: 2, text: 'Текст3', author: 'Денис' }
];

const messageSlice = createSlice({
  name: 'message',
  initialState: initialMessages,
  reducers: {
    addMesage: (state, action) => {
      return [...state, action.payload];
    }
  }
})

export const { addMesage } = messageSlice.actions
export const messageReducer = messageSlice.reducer
