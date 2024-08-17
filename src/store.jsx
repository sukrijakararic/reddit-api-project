import { configureStore } from "@reduxjs/toolkit";
import redditPostsReducer from "./features/redditPosts/redditPostsSlice";
import subredditsReducer from "./features/subreddits/subredditsSlice";

const store = configureStore({
    reducer: {
        redditPosts: redditPostsReducer,
        subreddits: subredditsReducer
    },
});

export default store