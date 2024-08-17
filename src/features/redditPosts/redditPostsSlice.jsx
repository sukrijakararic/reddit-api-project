import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  posts: [],
  isLoading: false,
  error: false,
  searchTerm: "",
  selectedSubreddits: "/r/earthPorn",
  comments: [],
  commentsIsLoading: false,
  commentsError: false,
  showingComments: false,
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
        state.selectedSubreddits = "/r/earthPorn";
      })
      .addCase(getComments.pending, (state) => {
        state.commentsIsLoading = true;
        state.commentsError = false;
      })
      .addCase(getComments.rejected, (state) => {
        state.commentsIsLoading = false;
        state.commentsError = true;
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.commentsIsLoading = false;
        state.commentsError = false;
        state.comments = action.payload[1].data.children;
        state.showingComments = true;
      });
  },
});

export default redditPostsSlice.reducer;

const API_ROOT = "https://www.reddit.com";
export const getRedditPosts = createAsyncThunk(
  "redditPosts/getRedditPosts",
  async (subreddit) => {
    const response = await fetch(`${API_ROOT}${subreddit}.json`);
    const json = await response.json();
    console.log(json);
    return json;
  }
);

export const getComments = createAsyncThunk(
  "redditPosts/getComments",
  async (url) => {
    const response = await fetch(`${API_ROOT}${url}.json`);
    const json = await response.json();
    console.log(json);
    return json;
  }
);
