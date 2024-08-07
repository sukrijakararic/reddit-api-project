import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getRedditPosts = createAsyncThunk(
  "redditPosts/getRedditPosts",
  async (arg, thunkAPI) => {
    const response = await fetch("https://www.reddit.com/r/popular.json");
    const json = await response.json();
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
        state.reddit.isLoading = true;
        state.reddit.error = false;
      })
      .addCase(getRedditPosts.rejected, (state) => {
        state.reddit.isLoading = false;
        state.reddit.error = true;
      })
      .addCase(getRedditPosts.fulfilled, (state, action) => {
        state.reddit.isLoading = false;
        state.reddit.error = false;
        state.reddit.posts.push(action.payload);
        state.redddit.selectedSubreddits = "popular";
      });
  },
});

export default redditPostsSlice.reducer;
