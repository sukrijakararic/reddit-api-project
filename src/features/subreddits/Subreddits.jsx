import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSubreddits } from "./subredditsSlice";
import { getRedditPosts } from "../redditPosts/redditPostsSlice";
import { setSelectedSubreddits } from "../redditPosts/redditPostsSlice";

export const Subreddits = () => {
  const dispatch = useDispatch();

  const subreddits = useSelector((state) => state.subreddits.subreddits);

  const handleSubreddits = () => {
    dispatch(getSubreddits());
  };

  useEffect(() => {
    handleSubreddits();
  }, []);

  return (
    <div>
      <h1>Subreddits</h1>
      <ul>
        {subreddits.map((subreddit) => (
          <li
            key={subreddit.data.id}
            onClick={() => {
              dispatch(getRedditPosts(subreddit.data.url));
              dispatch(setSelectedSubreddits(subreddit.data.url));
            }}
          >
            {subreddit.data.display_name}
          </li>
        ))}
      </ul>
    </div>
  );
};
