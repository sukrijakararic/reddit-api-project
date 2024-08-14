import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_ROOT = "https://www.reddit.com";
export const getRedditPosts = createAsyncThunk(
  "redditPosts/getRedditPosts",
  async () => {
    const response = await fetch(`${API_ROOT}/r/earthPorn.json`);
    const json = await response.json();
    console.log(json)
    return json;
  }
);


const initialState = {
  posts: [],
  isLoading: false,
  error: false,
  searchTerm: "",
  selectedSubreddits: "",
};

export const redditPostsSlice = createSlice({
  name: "redditPosts",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRedditPosts.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(getRedditPosts.rejected, (state) => {
        state.isLoading = false;
        state.reddit.error = true;
      })
      .addCase(getRedditPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.posts = action.payload.data.children;
        state.selectedSubreddits = "r/earthPorn";
      })
  },
});

export default redditPostsSlice.reducer;


