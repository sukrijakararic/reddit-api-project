import { configureStore } from "@reduxjs/toolkit";
import redditPostsReducer from "./features/redditPosts/redditPostsSlice";

export const store = configureStore({
    reducer: {
        redditPosts: redditPostsReducer,
    },
});

export default store