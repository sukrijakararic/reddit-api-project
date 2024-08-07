import { configureStore } from "@reduxjs/toolkit";
import redditPostsReducer from "./features/redditPosts/redditPostsSlice";

const store = configureStore({
    reducer: {
        redditPosts: redditPostsReducer,
    },
});

export default store