import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchPostsThunk = createAsyncThunk(
  'fetchPosts',
  async function () {
    const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = responce.json();
    console.log(data);
    return data;
  })

const postSlice = createSlice(
  {
    name: 'post',
    initialState: {
      posts: [],
      loading: false,
      err: false
    },
    reducers: {},
    extraReducers: {
      [fetchPostsThunk.pending]: (state, action) => {
        state.loading = true;
        state.err = null;
        console.log(state.loading);
      },
      [fetchPostsThunk.fulfilled]: (state, action) => {
        state.posts = [...action.payload];
        state.loading = false;
        state.err = null;
        console.log(state.posts);
      },
      [fetchPostsThunk.rejected]: (state, action) => {
        state.err = true;
        console.log(state.err);
      }
    },
  }
)

//export const { } = postSlice.actions
export const postReducer = postSlice.reducer





