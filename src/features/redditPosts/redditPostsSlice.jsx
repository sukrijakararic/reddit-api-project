import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getRedditPosts = createAsyncThunk(
  "redditPosts/getRedditPosts",
  async (arg, thunkAPI) => {
    const response = await fetch("https://www.reddit.com/r/popular.json");
    const json = await response.json();
    return json;
  }
);

export const redditPostsSlice = createSlice({
  name: "redditPosts",
  initialState: {
    reddit: {
      posts: [],
      isLoading: false,
      error: null,
      searchTerm: "",
      selectedSubreddits: [],
    },
    subreddits: {
      subreddits: [],
      isLoading: false,
      error: false,
    },
  },
  reducers: {},
});
