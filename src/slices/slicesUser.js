import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';

export const createUserThunk = createAsyncThunk(
  'user/addUserThunk',
  async ({ email, pass }) => {
    try {
      const userCredit = await createUserWithEmailAndPassword(auth, email, pass);
      console.log(userCredit.user);
      const userData = {
        email: userCredit.user.email,
        id: userCredit.user.id,
        token: userCredit.user.token
      }
      return userData;
    }
    catch (err) {
      console.log(err);
    }
  })

export const loginThunk = createAsyncThunk(
  'user/loginThunk',
  async ({ email, pass }) => {
    try {
      const userCredit = await signInWithEmailAndPassword(auth, email, pass);
      console.log(userCredit.user);
      const userData = {
        email: userCredit.user.email,
        id: userCredit.user.id,
        token: userCredit.user.token
      }
      return userData;
    }
    catch (err) {
      console.log(err);
    }
  })

const userSlice = createSlice(
  {
    name: 'user',
    initialState: {
      email: null,
      token: null,
      id: null
    },
    reducers: {
      addUser: (state, action) => {
        return state = action.payload;
      },

      removeUser: (state, action) => {
        state.email = null;
        state.token = null;
        state.id = null;
      }

    },
    extraReducers: {

      [createUserThunk.fulfilled]: (state, action) => {
        return state = action.payload;;
      },
      [loginThunk.fulfilled]: (state, action) => {
        return state = action.payload;;
      },
      // [fetchPostsThunk.rejected]: (state, action) => {
      //   state.err = true;
      //   console.log(state.err);
      // }
    },
  }
)

export const { addUser, removeUser } = userSlice.actions
export const userReducer = userSlice.reducer





