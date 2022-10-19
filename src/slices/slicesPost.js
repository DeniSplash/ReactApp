import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchPostsThunk = createAsyncThunk(
  'fetchPosts',
  async function () {
    const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = responce.json();
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

      },
      [fetchPostsThunk.fulfilled]: (state, action) => {
        state.posts = [...action.payload];
        state.loading = false;
        state.err = null;

      },
      [fetchPostsThunk.rejected]: (state, action) => {
        state.err = true;

      }
    },
  }
)

//export const { } = postSlice.actions
export const postReducer = postSlice.reducer





