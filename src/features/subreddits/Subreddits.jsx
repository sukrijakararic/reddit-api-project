import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSubreddits } from "./subredditsSlice";
import { getRedditPosts } from "../redditPosts/redditPostsSlice";
import { setSelectedSubreddits } from "../redditPosts/redditPostsSlice";
import { setSearchTerm } from "../redditPosts/redditPostsSlice";
import styles from "./Subreddits.module.css";

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
      <h1 className={styles.subredditsHeader}>Subreddits</h1>
        {subreddits.map((subreddit) => (
          <button
          className={styles.subredditButton}
            key={subreddit.data.id}
            onClick={() => {
              dispatch(setSearchTerm(""));
              dispatch(getRedditPosts(subreddit.data.url));
              dispatch(setSelectedSubreddits(subreddit.data.url));
            }}
          >
            <img className={styles.subredditIcon} src={subreddit.data.icon_img} alt={`${subreddit.data.display_name}`} />
            {subreddit.data.display_name}
          </button>
        ))}
    </div>
  );
};
