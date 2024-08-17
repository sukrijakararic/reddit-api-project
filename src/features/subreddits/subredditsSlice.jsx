import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  subreddits: [],
  isLoading: false,
  error: false,
};

export const subredditsSlice = createSlice({
  name: "subreddits",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getSubreddits.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(getSubreddits.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(getSubreddits.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.subreddits = action.payload.data.children;
      });
  },
});

export default subredditsSlice.reducer;

const API_ROOT = "https://www.reddit.com";

export const getSubreddits = createAsyncThunk(
  "subreddits/getSubreddits",
  async () => {
    const response = await fetch(`${API_ROOT}/subreddits.json`);
    const json = await response.json();
    console.log(json);
    return json;
  }
);
